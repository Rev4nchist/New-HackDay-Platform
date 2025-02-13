import { ICheckSquareOffset, IClock, IFlag } from '@/components/Icons/Icons'
import { ITask } from '@/interfaces'
import { Avatar, AvatarFallback, AvatarGroup, AvatarImage, Badge, Checkbox, Label } from 'keep-react'
import Image from 'next/image'

const TaskItem = ({ task }: { task: ITask }) => {
  return (
    <div className="flex max-w-max flex-wrap items-start justify-between gap-5 px-5 py-4 lg:max-w-full lg:flex-row lg:border-0 lg:px-0">
      <div className="flex items-center gap-2.5 laptop:w-[420px]">
        <Checkbox className="border-metal-200 dark:border-metal-500" id={task.id.toString()} />
        <Label
          htmlFor={task.id.toString()}
          className="flex items-center gap-1 text-body-4 font-medium text-metal-900 dark:text-white">
          <Image src={task.icon} alt="briefcase" height={14} width={14} /> {task.title}
        </Label>
      </div>
      <div className="flex items-center gap-1 laptop:w-[100px]">
        <ICheckSquareOffset className="size-4 text-metal-600 dark:text-metal-300" />
        <p className="text-body-4 font-medium text-metal-600 dark:text-metal-300">{task.visibility}</p>
      </div>
      <div className="laptop:w-[115px]">
        <button className="flex w-full max-w-[115px] items-center rounded-full border border-metal-200 px-2.5 py-0.5 text-body-5 font-medium text-metal-600 dark:border-metal-700 dark:bg-[#d9e9ff12] dark:text-metal-300">
          <Image src="/images/logo/figma.svg" height={14} width={14} alt="figma" />
          <span className="line-clamp-1">{task.project}</span>
        </button>
      </div>
      <div className="laptop:w-[115px]">
        <button className="flex items-center gap-1 rounded-full border border-metal-200 px-2.5 py-0.5 text-body-5 font-medium text-metal-600 dark:border-metal-800 dark:bg-[#d9e9ff12] dark:text-metal-300">
          <IClock height={16} width={16} />
          {task.deadline}
        </button>
      </div>
      <div className="laptop:w-[115px]">
        <Badge variant="border" className="gap-1">
          <IFlag height={16} width={16} weight="fill" />
          {task.priority}
        </Badge>
      </div>
      <div className="relative z-10 laptop:w-[115px]">
        <AvatarGroup className="*:ring-white dark:*:ring-metal-800">
          {task.team.map((member: { id: number; img: string; name: string }) => (
            <Avatar key={member.id} className="size-6">
              <AvatarImage src={member.img} />
              <AvatarFallback>{member.name.slice(0, 2)}</AvatarFallback>
            </Avatar>
          ))}
        </AvatarGroup>
      </div>
    </div>
  )
}

export default TaskItem
