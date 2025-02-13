const ProjectProgressStatus = () => {
  return (
    <div className="flex flex-wrap items-stretch justify-between gap-3 lg:items-center">
      <div className="flex-auto space-y-1 rounded-2xl border border-metal-100 px-4 py-3 text-center lg:flex-1 dark:border-metal-800">
        <p className="text-body-1 font-semibold text-metal-600 lg:text-heading-5 dark:text-white">2</p>
        <p className="text-body-4 font-medium text-metal-400 lg:text-body-3 dark:text-metal-300">Completed tasks</p>
      </div>
      <div className="flex-auto space-y-1 rounded-2xl border border-metal-100 px-4 py-3 text-center lg:flex-1 dark:border-metal-800">
        <p className="text-body-1 font-semibold text-metal-600 lg:text-heading-5 dark:text-white">9</p>
        <p className="text-body-4 font-medium text-metal-400 lg:text-body-3 dark:text-metal-300">In completed tasks</p>
      </div>
      <div className="flex-auto space-y-1 rounded-2xl border border-metal-100 px-4 py-3 text-center lg:flex-1 dark:border-metal-800">
        <p className="text-body-1 font-semibold text-metal-600 lg:text-heading-5 dark:text-white">0</p>
        <p className="text-body-4 font-medium text-metal-400 lg:text-body-3 dark:text-metal-300">Overdue tasks</p>
      </div>
      <div className="flex-auto space-y-1 rounded-2xl border border-metal-100 px-4 py-3 text-center lg:flex-1 dark:border-metal-800">
        <p className="text-body-1 font-semibold text-metal-600 lg:text-heading-5 dark:text-white">11</p>
        <p className="text-body-4 font-medium text-metal-400 lg:text-body-3 dark:text-metal-300">Total tasks</p>
      </div>
    </div>
  )
}

export default ProjectProgressStatus
