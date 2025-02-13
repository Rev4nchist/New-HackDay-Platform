'use client'
import TaskContent from '@/components/dashboard/task/TaskContent'
import { taskList } from '@/data/task'
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  MouseSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import { arrayMove, SortableContext } from '@dnd-kit/sortable'
import { Modal, ModalContent } from 'keep-react'
import { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import ColumnCard from './KanbanColumn'
import TaskCard from './TaskCard'
import { Column, ID, ITask } from './types'
import { coordinateGetter, generateId } from './utils'

const initialColumn: Column[] = [
  {
    id: 1,
    title: 'To Do',
  },
  {
    id: 2,
    title: 'In Review',
  },
  {
    id: 3,
    title: 'In Progress',
  },
  {
    id: 4,
    title: 'Done',
  },
]

const Kanban = () => {
  const [mount, setMount] = useState(false)
  const [openDrawer, setOpenDrawer] = useState(false)
  const [column, setColumn] = useState<Column[]>(initialColumn)
  const columnsId = useMemo(() => column.map((col) => col.id), [column])
  const [activeColumn, setActiveColumn] = useState<Column | null>(null)
  const [activeTask, setActiveTask] = useState<ITask | null>(null)
  const [tasks, setTasks] = useState<ITask[]>(taskList)

  const deleteColumn = (id: ID) => {
    setColumn(column.filter((col) => col.id !== id))
    setTasks(tasks.filter((task) => task.columnId !== id))
  }
  const onDragStart = (event: DragStartEvent) => {
    if (event.active.data.current?.type === 'Column') {
      setActiveColumn(event.active.data.current?.column)
    }
    if (event.active.data.current?.type === 'Task') {
      setActiveTask(event.active.data.current?.task)
    }
  }
  const onDragEnd = (event: DragEndEvent) => {
    setActiveColumn(null)
    setActiveTask(null)

    const { active, over } = event

    if (!over) return

    const activeId = active.id
    const overId = over.id

    if (activeId === overId) return

    if (activeId !== overId) {
      setColumn((column) => {
        const activeIndex = column.findIndex((col) => col.id === activeId)
        const overIndex = column.findIndex((col) => col.id === overId)
        return arrayMove(column, activeIndex, overIndex)
      })
    }
  }
  const onDragOver = (event: DragOverEvent) => {
    const { active, over } = event

    if (!over) return

    const activeId = active.id
    const overId = over.id

    if (activeId === overId) return

    const isActiveTask = active.data.current?.type === 'Task'
    const isOverTask = over.data.current?.type === 'Task'
    const isOverColumn = over.data.current?.type === 'Column'

    if (isActiveTask && isOverTask) {
      setTasks((preTasks) => {
        const updatedTasks = [...preTasks]
        const activeIndex = updatedTasks.findIndex((t) => t.id === activeId)
        const overIndex = updatedTasks.findIndex((t) => t.id === overId)

        updatedTasks[activeIndex] = {
          ...updatedTasks[activeIndex],
          columnId: updatedTasks[overIndex].columnId,
        }

        return arrayMove(updatedTasks, activeIndex, overIndex)
      })
    }

    if (isActiveTask && isOverColumn) {
      setTasks((tasks) => {
        const updatedTasks = tasks.map((task) => (task.id === activeId ? { ...task, columnId: overId } : task))

        return updatedTasks
      })
    }
  }
  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: coordinateGetter,
    }),
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 3,
      },
    }),
    useSensor(TouchSensor),
  )
  const updateTitle = (id: ID, title: string) => {
    if (column.find((col) => col.id === id)) {
      setColumn(column.map((col) => (col.id === id ? { ...col, title } : col)))
    }
  }
  const createColumn = (id: ID, position: 'left' | 'right') => {
    const index = column.findIndex((col) => col.id === id)

    const newColumn: Column = {
      id: generateId(),
      title: 'New Column',
    }

    if (position === 'left') {
      setColumn([...column.slice(0, index), newColumn, ...column.slice(index)])
    }

    if (position === 'right') {
      setColumn([...column.slice(0, index + 1), newColumn, ...column.slice(index + 1)])
    }
  }
  const editTask = () => {
    setOpenDrawer(true)
  }
  const addNewTask = (columnId: ID) => {
    const newTask: ITask = {
      id: generateId(),
      title: 'Untitled Task',
      deadline: 'Due Date',
      teams: [
        { id: 1, avatar: '/images/avatar/avatar-1.png' },
        { id: 2, avatar: '/images/avatar/avatar-2.png' },
      ],
      columnId,
    }
    setTasks([newTask, ...tasks])
  }

  useEffect(() => {
    setMount(true)

    return () => {
      setMount(false)
    }
  }, [])
  return (
    <DndContext sensors={sensors} onDragStart={onDragStart} onDragEnd={onDragEnd} onDragOver={onDragOver}>
      <div className="flex items-start gap-x-5 gap-y-5 overflow-x-auto">
        <SortableContext items={columnsId}>
          {column.map((col) => (
            <ColumnCard
              key={col.id}
              deleteColumn={deleteColumn}
              column={col}
              updateTitle={updateTitle}
              editTask={editTask}
              createColumn={createColumn}
              addNewTask={addNewTask}
              tasks={tasks.filter((task) => task.columnId.toString() === col.id.toString())}
            />
          ))}
        </SortableContext>
      </div>

      {mount &&
        createPortal(
          <DragOverlay>
            {activeColumn && (
              <ColumnCard
                column={activeColumn}
                deleteColumn={deleteColumn}
                updateTitle={updateTitle}
                createColumn={createColumn}
                editTask={editTask}
                addNewTask={addNewTask}
                tasks={tasks.filter((task) => task.columnId.toString() === activeColumn.id.toString())}
              />
            )}
            {activeTask && <TaskCard editTask={editTask} task={activeTask} />}
          </DragOverlay>,
          document.body,
        )}

      <Modal open={openDrawer} onOpenChange={setOpenDrawer} showCloseIcon={false}>
        <ModalContent
          id="scroll-bar"
          className="max-h-[705px] max-w-[900px] space-y-0 overflow-y-auto rounded-3xl p-5 lg:p-8">
          <TaskContent onOpenChange={setOpenDrawer} />
        </ModalContent>
      </Modal>
    </DndContext>
  )
}

export default Kanban
