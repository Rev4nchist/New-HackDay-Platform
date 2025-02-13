'use client'
import TaskListView from '@/components/shared/TaskListView'
import { useSearchParams } from 'next/navigation'

const TaskList = () => {
  const activeTab = useSearchParams().get('tab')
  return (
    <div data-content={activeTab} className="hidden data-[content=lists]:block">
      <TaskListView />
    </div>
  )
}

export default TaskList
