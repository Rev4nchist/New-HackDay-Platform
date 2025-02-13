import MyProgressChart from '@/components/charts/MyProgressChart'
import DayFilterDropdown from '@/components/shared/DayFilterDropdown'

const MyProgress = () => {
  return (
    <div className="flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <p className="text-body-4 font-medium text-metal-600 lg:text-body-3 dark:text-metal-300">My progress</p>
          <div className="relative z-50">
            <DayFilterDropdown filterTitle="This week" />
          </div>
        </div>
        <div className="mx-auto">
          <MyProgressChart />
        </div>
      </div>
      <div className="mt-auto space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="size-2.5 rounded-full bg-[#38D6EF]"></div>
            <p className="text-body-5 font-medium text-metal-600 dark:text-metal-300">Total task</p>
          </div>
          <p className="text-body-5 font-medium text-metal-600 dark:text-metal-300">23</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="size-2.5 rounded-full bg-[#9631F5]"></div>
            <p className="text-body-5 font-medium text-metal-600 dark:text-metal-300">Running</p>
          </div>
          <p className="text-body-5 font-medium text-metal-600 dark:text-metal-300">16</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="size-2.5 rounded-full bg-[#3CAAFA]"></div>
            <p className="text-body-5 font-medium text-metal-600 dark:text-metal-300">Completed</p>
          </div>
          <p className="text-body-5 font-medium text-metal-600 dark:text-metal-300">7</p>
        </div>
      </div>
    </div>
  )
}

export default MyProgress
