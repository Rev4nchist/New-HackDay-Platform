import TaskListView from '@/components/shared/TaskListView'
import { TabActiveProps } from '@/interfaces'
import { FC } from 'react'

const ProjectTaskList: FC<TabActiveProps> = ({ activeTab }) => {
  return (
    <div data-content={activeTab} className="hidden data-[content=lists]:block">
      <TaskListView />
    </div>
  )
}

export default ProjectTaskList
