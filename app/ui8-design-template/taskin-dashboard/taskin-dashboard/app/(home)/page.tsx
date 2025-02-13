import MyProgress from '@/components/dashboard/home/MyProgress'
import MyTask from '@/components/dashboard/home/MyTask'
import Notes from '@/components/dashboard/home/Notes'
import ProjectOverview from '@/components/dashboard/home/ProjectOverview'
import TeamProgress from '@/components/dashboard/home/TeamProgress'
import PageHeader from '@/components/shared/PageHeader'

const page = () => {
  return (
    <div className="mx-auto overflow-hidden rounded-none bg-metal-25 xl:rounded-2xl dark:bg-[#29303A]">
      <PageHeader>
        <p className="text-body-3 font-medium text-metal-900 lg:text-body-1 dark:text-white">Home</p>
      </PageHeader>
      <div className="space-y-6 p-5">
        <div className="space-y-1">
          <p className="text-body-4 font-normal text-metal-600 lg:text-body-3 dark:text-metal-300">Tuesday, June 4</p>
          <p className="text-body-1 font-normal text-metal-600 lg:text-heading-6 dark:text-metal-300">
            Good afternoon, <span className="text-metal-900 dark:text-white">William Jack</span>
          </p>
        </div>
        <div className="grid grid-cols-12 gap-3 xl:gap-6">
          <div className="order-1 col-span-12 rounded-2xl border border-metal-100 bg-white p-4 xl:p-6 laptop:col-span-8 2xl:p-6 dark:border-metal-900 dark:bg-metal-900">
            <ProjectOverview />
          </div>
          <div className="order-2 col-span-12 rounded-2xl border border-metal-100 bg-white p-4 lg:col-span-12 xl:col-span-12 xl:p-6 laptop:col-span-4 2xl:p-6 dark:border-metal-900 dark:bg-metal-900">
            <MyTask />
          </div>
          <div className="order-3 col-span-12 rounded-2xl border border-metal-100 bg-white p-4 xl:p-6 laptop:col-span-6 2xl:p-6 dark:border-metal-900 dark:bg-metal-900">
            <TeamProgress />
          </div>
          <div className="order-4 col-span-12 rounded-2xl border border-metal-100 bg-white p-4 lg:col-span-6 xl:col-span-6 xl:p-6 laptop:col-span-3 2xl:p-6 dark:border-metal-900 dark:bg-metal-900">
            <MyProgress />
          </div>
          <div className="order-5 col-span-12 rounded-2xl border border-metal-100 bg-white p-4 lg:col-span-6 xl:col-span-6 xl:p-6 laptop:col-span-3 2xl:p-6 dark:border-metal-900 dark:bg-metal-900">
            <Notes />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
