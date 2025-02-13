'use client'
import Kanban from '@/components/shared/Kanban-board/Kanban'
import { useSearchParams } from 'next/navigation'

const TaskBoard = () => {
  const activeTab = useSearchParams().get('tab')

  const handleActive = (!activeTab && 'boards') || (activeTab === 'boards' && 'boards')
  return (
    <div data-content={handleActive} className="hidden p-6 data-[content=boards]:block">
      <div id="scroll-bar" className="h-screen overflow-auto xl:h-[calc(100vh-224px)]">
        <Kanban />
      </div>
    </div>
  )
}

export default TaskBoard
