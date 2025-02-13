'use client'
import BigCalendar from '@/components/shared/BigCalendar'
import { useSearchParams } from 'next/navigation'

const TaskCalender = () => {
  const activeTab = useSearchParams().get('tab')
  return (
    <div
      data-content={activeTab}
      id="scroll-bar"
      className="hidden h-[calc(100vh-20vh)] overflow-auto p-6 data-[content=calender]:block">
      <BigCalendar />
    </div>
  )
}

export default TaskCalender
