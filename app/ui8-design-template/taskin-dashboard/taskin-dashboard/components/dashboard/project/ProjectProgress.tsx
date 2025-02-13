import CompletedTaskChart from './CompletedTaskChart'
import ProgressTask from './ProgressTask'

const ProjectProgress = () => {
  const data = [
    { id: 1, progress: 'Doing', taskProgress: 46, fill: '#3CAAFA' },
    { id: 2, progress: 'Todo', taskProgress: 24, fill: '#9631F5' },
    { id: 3, progress: 'Done', taskProgress: 12, fill: '#38D6EF' },
    { id: 4, progress: 'In Review', taskProgress: 12, fill: '#D638EE' },
    { id: 5, progress: 'Other', taskProgress: 6, fill: '#E9EFF7' },
  ]
  return (
    <div className="mb-4 space-y-4">
      <p className="text-body-1 font-medium text-metal-900 dark:text-white">Progress</p>
      <div className="grid grid-cols-12 gap-x-5">
        <div className="col-span-6 rounded-2xl border border-metal-100 p-5 dark:border-metal-800">
          <p className="text-body-3 font-medium text-metal-400 dark:text-metal-300">Completed tasks</p>
          <CompletedTaskChart />
          <div className="flex items-center justify-center gap-5">
            <div className="flex items-center gap-2.5">
              <div className="size-5 rounded-md bg-metal-100"></div>
              <p className="text-body-4 font-medium text-metal-900 dark:text-white">Complete</p>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="bg-gradient-17 size-5 rounded-md"></div>
              <p className="text-body-4 font-medium text-metal-900 dark:text-white">Incomplete</p>
            </div>
          </div>
        </div>
        <div className="col-span-6 rounded-2xl border border-metal-100 p-5 dark:border-metal-800">
          <p className="text-body-3 font-medium text-metal-400 dark:text-metal-300">Completed tasks</p>
          <ProgressTask />
          <div className="flex items-center justify-center gap-x-5">
            {data.map((item) => (
              <div key={item.id} className="flex items-center gap-1.5">
                <div className="size-2 rounded-full" style={{ backgroundColor: item.fill }}></div>
                <p className="text-body-5 font-medium text-metal-900 dark:text-white">{item.progress}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectProgress
