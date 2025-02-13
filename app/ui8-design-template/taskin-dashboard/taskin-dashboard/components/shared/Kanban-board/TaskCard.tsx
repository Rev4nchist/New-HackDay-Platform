'use client'
import { IClock, IFileText, IFlag, IListDashes } from '@/components/Icons/Icons'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Avatar, AvatarFallback, AvatarGroup, AvatarImage, Badge } from 'keep-react'
import { cn } from 'keep-react/utils'
import Image from 'next/image'
import { FC } from 'react'
import { ID, ITask } from './types'

interface TaskCardProps {
  task: ITask
  editTask: (taskId: ID) => void
}

const TaskCard: FC<TaskCardProps> = ({ task, editTask }) => {
  const { setNodeRef, attributes, listeners, transform, transition, isDragging } = useSortable({
    id: task.id,
    data: {
      type: 'Task',
      task,
    },
  })

  const style = {
    transition,
    transform: CSS.Translate.toString(transform),
  }

  return (
    <div
      {...attributes}
      {...listeners}
      ref={setNodeRef}
      style={style}
      onClick={() => editTask(task.id)}
      className={cn(
        'w-[256px] space-y-3 rounded-lg border border-metal-50 bg-white p-4 dark:border-metal-800 dark:bg-metal-900',
        isDragging && 'skew-y-2 opacity-50',
      )}>
      <div className="space-y-2.5">
        <p className="text-body-4 font-medium text-metal-900 dark:text-white">{task.title}</p>
        <Badge variant="border">
          <Image src="/images/logo/figma.svg" alt="pencil" height={12} width={12} />
          Figma Design System
        </Badge>
        <div className="flex items-center justify-between border-y border-y-metal-50 py-2 dark:border-y-metal-800">
          <span className="inline-flex items-center gap-x-1 rounded-full bg-primary-50 px-1.5 text-body-5 font-medium text-primary-500 dark:bg-primary-500/10 dark:text-primary-500">
            <IFlag /> Medium
          </span>

          <div className="flex items-center gap-x-2">
            <span className="flex items-center gap-x-1 text-body-5 font-medium text-metal-600 dark:text-metal-300">
              <IListDashes className="size-4 text-metal-600 dark:text-metal-300" />6
            </span>
            <span className="flex items-center gap-x-1 text-body-5 font-medium text-metal-600 dark:text-metal-300">
              <IFileText className="size-4 text-metal-600 dark:text-metal-300" />9
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <AvatarGroup className="-space-x-1">
          {task.teams.map((team) => (
            <Avatar key={team.id} className="size-5">
              <AvatarImage src={team.avatar} alt="avatar-1" />
              <AvatarFallback className="text-body-5 font-normal text-metal-600 dark:text-metal-300">KR</AvatarFallback>
            </Avatar>
          ))}
        </AvatarGroup>
        <span className="flex items-center gap-x-1 rounded-full bg-metal-25 px-1.5 text-body-5 font-medium text-metal-500 dark:bg-metal-800/70 dark:text-metal-300">
          <IClock size={16} className="text-metal-600 dark:text-metal-300" />
          {task.deadline}
        </span>
      </div>
    </div>
  )
}

export default TaskCard
