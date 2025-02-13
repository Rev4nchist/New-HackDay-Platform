import Kanban from '@/components/shared/Kanban-board/Kanban'
import { TabActiveProps } from '@/interfaces'
import { FC } from 'react'

const ProjectBoardList: FC<TabActiveProps> = ({ activeTab }) => {
  return (
    <div data-content={activeTab} className="hidden p-6 data-[content=boards]:block">
      <div id="scroll-bar" className="overflow-y-scroll xl:h-[calc(100vh-220px)]">
        <Kanban />
      </div>
    </div>
  )
}

export default ProjectBoardList
