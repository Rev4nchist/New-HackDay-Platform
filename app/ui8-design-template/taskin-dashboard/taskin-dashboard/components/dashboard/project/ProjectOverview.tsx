import { IPen } from '@/components/Icons/Icons'
import { TabActiveProps } from '@/interfaces'
import { Button, Divider } from 'keep-react'
import { FC } from 'react'
import ProjectMember from './ProjectMember'
import ProjectOverviewSidebar from './ProjectOverviewSidebar'
import ProjectProgress from './ProjectProgress'
import ProjectProgressStatus from './ProjectProgressStatus'

const ProjectOverview: FC<TabActiveProps> = ({ activeTab }) => {
  return (
    <div data-content={activeTab} className="hidden data-[content=overview]:block">
      <div className="grid grid-cols-12 items-start overflow-y-auto px-10 py-4 lg:gap-x-10">
        <div
          id="scroll-bar"
          className="col-span-12 h-auto overflow-y-auto py-4 laptop:col-span-8 laptop:h-[calc(100vh-210px)] 2xl:col-span-9">
          <div className="flex items-center justify-between">
            <p className="text-body-1 font-medium text-metal-900 dark:text-white">About Project</p>
            <Button
              variant="link"
              color="secondary"
              className="gap-1 text-metal-600 dark:text-metal-300 dark:hover:text-metal-300">
              <IPen className="text-metal-600 dark:text-metal-300" size={18} />
              Edit
            </Button>
          </div>
          <div className="w-full pt-3 lg:max-w-[600px]">
            <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
              Our goal is to integrate and optimize a comprehensive design system using Figma for seamless collaboration
              and efficiency across our design team. The project entails structuring reusable components, defining
              consistent styles, and establishing clear guidelines to streamline the design process.
            </p>
          </div>
          <Divider className="my-4 block" />
          <ProjectMember />
          <Divider className="my-4 block" />
          <ProjectProgress />
          <ProjectProgressStatus />
        </div>
        <ProjectOverviewSidebar />
      </div>
    </div>
  )
}

export default ProjectOverview
