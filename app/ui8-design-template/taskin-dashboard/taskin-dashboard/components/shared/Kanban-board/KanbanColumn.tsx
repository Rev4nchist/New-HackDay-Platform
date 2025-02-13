'use client'
import { IArrowLeft, IArrowRight, IDotsThree, IPen, IPlus, ITrash } from '@/components/Icons/Icons'
import { SortableContext, useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import {
  Button,
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownItem,
  DropdownSub,
  DropdownSubAction,
  DropdownSubContent,
} from 'keep-react'
import { cn } from 'keep-react/utils'
import { FC, useMemo, useState } from 'react'
import TaskCard from './TaskCard'
import { ColumnCardProps } from './types'

const ColumnCard: FC<ColumnCardProps> = ({
  deleteColumn,
  column,
  updateTitle,
  createColumn,
  editTask,
  tasks,
  addNewTask,
}) => {
  const [editing, setEditing] = useState(false)
  const { setNodeRef, attributes, listeners, transform, transition, isDragging } = useSortable({
    id: column.id,
    data: {
      type: 'Column',
      column,
    },
    disabled: editing,
  })

  const tasksId = useMemo(() => tasks.map((t) => t.id), [tasks])

  const style = {
    transition,
    transform: CSS.Translate.toString(transform),
  }

  return (
    <div
      {...listeners}
      ref={setNodeRef}
      {...attributes}
      style={style}
      className={cn('w-[275px]', isDragging && 'opacity-50')}>
      <div className="flex items-center justify-between px-2 pb-4">
        <button onClick={() => setEditing(true)} className="w-full text-left">
          {editing && (
            <input
              type="text"
              className="w-full border-b border-b-metal-100 bg-white px-3 text-body-4 font-medium text-metal-900 outline-none dark:border-b-metal-700 dark:bg-transparent dark:text-white"
              autoFocus
              value={column.title}
              onBlur={() => setEditing(false)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') setEditing(false)
              }}
              onChange={(e) => updateTitle(column.id, e.target.value)}
            />
          )}
          {!editing && <p className="text-body-3 font-medium text-metal-600 dark:text-metal-300">{column.title}</p>}
        </button>
        <div className="flex items-center justify-end gap-2">
          <Dropdown>
            <DropdownAction asChild>
              <button>
                <IDotsThree className="text-metal-600 dark:text-metal-300" size={16} />
              </button>
            </DropdownAction>
            <DropdownContent
              align="end"
              className="w-[215px] space-y-0.5 rounded-xl border border-metal-100 p-3.5 shadow-2xLarge dark:divide-metal-800 dark:border-metal-800">
              <DropdownItem
                onClick={() => setEditing(true)}
                className="mb-0 rounded-lg p-2.5 dark:hover:bg-metal-800/30">
                <IPen size={20} />
                <p className="text-body-4 font-medium text-metal-600 dark:text-metal-300">Rename section</p>
              </DropdownItem>

              <DropdownSub>
                <DropdownSubAction className="mb-0 rounded-lg p-2.5 dark:hover:bg-metal-800/30">
                  <button className="flex items-center gap-2">
                    <IPen size={20} />
                    <p className="text-body-4 font-medium text-metal-600 dark:text-metal-300">Add section</p>
                  </button>
                </DropdownSubAction>
                <DropdownSubContent className="w-[215px] space-y-0.5 p-3.5 dark:divide-metal-800">
                  <DropdownItem
                    className="mb-0 rounded-lg p-2.5 dark:hover:bg-metal-800/30"
                    onClick={() => createColumn(column.id, 'left')}>
                    <IArrowLeft size={16} />
                    <p className="text-body-4 font-medium text-metal-600 dark:text-metal-300">Add section to left</p>
                  </DropdownItem>

                  <DropdownItem
                    className="mb-0 rounded-lg p-2.5 dark:hover:bg-metal-800/30"
                    onClick={() => createColumn(column.id, 'right')}>
                    <IArrowRight size={16} />
                    <p className="text-body-4 font-medium text-metal-600 dark:text-metal-300">Add section to right</p>
                  </DropdownItem>
                </DropdownSubContent>
              </DropdownSub>

              <DropdownItem
                className="mb-0 rounded-lg p-2.5 dark:hover:bg-metal-800/30"
                onClick={() => {
                  deleteColumn(column.id)
                }}>
                <ITrash color="#f00" size={20} />
                <p className="text-error-500">Deleted section</p>
              </DropdownItem>
            </DropdownContent>
          </Dropdown>
          <button onClick={() => addNewTask(column.id)}>
            <IPlus className="text-metal-600 dark:text-metal-300" size={16} />
          </button>
        </div>
      </div>
      <div
        id="scroll-bar"
        className="borer-metal-200 mx-auto h-[680px] max-h-[680px] w-full space-y-3 overflow-y-auto rounded-xl border border-dashed bg-metal-900/[0.02] p-2 dark:border-metal-700">
        <SortableContext items={tasksId}>
          {tasks.map((task) => (
            <TaskCard task={task} key={task.id} editTask={editTask} />
          ))}
          <div className="mt-4 flex w-full items-center justify-center">
            <Button
              onClick={() => addNewTask(column.id)}
              color="secondary"
              variant="outline"
              className="gap-1 dark:bg-metal-700 dark:hover:bg-metal-900">
              <IPlus /> Add New Task
            </Button>
          </div>
        </SortableContext>
      </div>
    </div>
  )
}

export default ColumnCard
