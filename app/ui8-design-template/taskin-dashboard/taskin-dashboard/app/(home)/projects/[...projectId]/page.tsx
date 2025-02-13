import ProjectBoardList from '@/components/dashboard/project/ProjectBoardList'
import ProjectCalendar from '@/components/dashboard/project/ProjectCalendar'
import ProjectFiles from '@/components/dashboard/project/ProjectFiles'
import ProjectMessage from '@/components/dashboard/project/ProjectMessage'
import ProjectOverview from '@/components/dashboard/project/ProjectOverview'
import ProjectSettings from '@/components/dashboard/project/ProjectSettings'
import ProjectTabs from '@/components/dashboard/project/ProjectTabs'
import ProjectTabsSidebar from '@/components/dashboard/project/ProjectTabsSidebar'
import ProjectTaskList from '@/components/dashboard/project/ProjectTaskList'
import FilterDropdown from '@/components/shared/FilterDropdown'
import GroupByDropdown from '@/components/shared/GroupByDropdown'
import PageHeader from '@/components/shared/PageHeader'
import SortDropdown from '@/components/shared/SortDropdown'
import Image from 'next/image'

const page = ({ params }: { params: { projectId: string[] } }) => {
  const projectId = params.projectId[0]
  const contentRef = params.projectId[1]
  return (
    <div className="overflow-hidden bg-white xl:rounded-2xl dark:bg-metal-900">
      <PageHeader>
        <div className="flex items-center gap-2">
          <Image src="/images/logo/figma-design.svg" height={32} width={32} alt="figma-design" />
          <p className="text-body-3 font-medium text-metal-900 lg:text-body-1 dark:text-white">Figma Design System</p>
        </div>
      </PageHeader>
      <div className="flex items-center justify-between border-b border-b-metal-100 px-4 py-3 md:px-6 dark:border-b-metal-700">
        <ProjectTabs projectId={projectId} contentRef={contentRef} />
        <div className="block lg:hidden">
          <ProjectTabsSidebar projectId={projectId} contentRef={contentRef} />
        </div>
        <div className="flex items-center">
          <FilterDropdown />
          <SortDropdown />
          <GroupByDropdown />
          <ProjectSettings />
        </div>
      </div>
      <ProjectOverview activeTab={contentRef} />
      <ProjectBoardList activeTab={contentRef} />
      <ProjectTaskList activeTab={contentRef} />
      <ProjectCalendar activeTab={contentRef} />
      <ProjectMessage activeTab={contentRef} />
      <ProjectFiles activeTab={contentRef} />
    </div>
  )
}

export default page
