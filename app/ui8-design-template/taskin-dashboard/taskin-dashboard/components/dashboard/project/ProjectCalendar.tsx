import BigCalendar from '@/components/shared/BigCalendar'
import { TabActiveProps } from '@/interfaces'
import { FC } from 'react'

const ProjectCalendar: FC<TabActiveProps> = ({ activeTab }) => {
  return (
    <div data-content={activeTab} className="hidden px-6 py-4 data-[content=calender]:block">
      <BigCalendar />
    </div>
  )
}

export default ProjectCalendar
