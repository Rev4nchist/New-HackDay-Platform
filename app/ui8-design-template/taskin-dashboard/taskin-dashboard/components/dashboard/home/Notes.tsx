import { ILock } from '@/components/Icons/Icons'

const Notes = () => {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <p className="text-body-4 font-medium text-metal-600 lg:text-body-3 dark:text-metal-300">Notes</p>
        <span className="flex items-center gap-1 rounded-full bg-primary-50 px-1.5 text-body-5 font-medium text-primary-500 dark:bg-primary-500/10 dark:text-primary-500">
          <ILock size={12} />
          Private
        </span>
      </div>
      <div>
        <p className="mb-1.5 text-body-4 font-semibold text-metal-600 dark:text-metal-300">Tomorrow Note</p>
        <ul className="list-disc space-y-1 pl-6 text-body-4 font-normal text-metal-600 dark:text-metal-300">
          <li>Confirm meeting room booking.</li>
          <li>Bring a laptop and notepad for taking notes.</li>
          <li>Follow up on any action items after the meeting.</li>
        </ul>
      </div>
      <div>
        <p className="mb-1.5 text-body-4 font-semibold text-metal-600 dark:text-metal-300">Tomorrow Note </p>
        <ul className="list-disc space-y-1 pl-6 text-body-4 font-normal text-metal-600 dark:text-metal-300">
          <li>Confirm meeting room booking.</li>
          <li>Bring a laptop and notepad for taking notes.</li>
          <li>Follow up on any action items after the meeting.</li>
        </ul>
      </div>
    </div>
  )
}

export default Notes
