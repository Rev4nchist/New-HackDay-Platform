import TaskBoard from '@/components/dashboard/task/TaskBoard'
import TaskCalender from '@/components/dashboard/task/TaskCalender'
import TaskList from '@/components/dashboard/task/TaskList'
import TaskProvider from '@/components/dashboard/task/TaskProvider'
import TaskTabs from '@/components/dashboard/task/TaskTabs'
import TaskTabsSidebar from '@/components/dashboard/task/TaskTabsSidebar'
import FilterDropdown from '@/components/shared/FilterDropdown'
import GroupByDropdown from '@/components/shared/GroupByDropdown'
import PageHeader from '@/components/shared/PageHeader'
import SortDropdown from '@/components/shared/SortDropdown'
import { Suspense } from 'react'

const page = () => {
  return (
    <Suspense>
      <TaskProvider>
        <PageHeader>
          <p className="text-body-3 font-medium text-metal-900 lg:text-body-1 dark:text-white">My Tasks</p>
        </PageHeader>
        <Suspense>
          <div className="flex items-center justify-between border-b border-b-metal-100 bg-white px-6 py-2 dark:border-b-metal-800 dark:bg-metal-900">
            <TaskTabs />
            <div className="block md:hidden">
              <TaskTabsSidebar />
            </div>
            <div className="flex items-center laptop:gap-x-1">
              <div className="relative z-30">
                <FilterDropdown />
              </div>
              <div className="relative z-30">
                <SortDropdown />
              </div>
              <div className="relative z-30">
                <GroupByDropdown />
              </div>
            </div>
          </div>
          <TaskBoard />
          <TaskList />
          <TaskCalender />
        </Suspense>
      </TaskProvider>
    </Suspense>
  )
}

export default page
