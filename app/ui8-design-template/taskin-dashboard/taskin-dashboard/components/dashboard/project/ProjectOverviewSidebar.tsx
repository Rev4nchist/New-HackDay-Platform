import { ICalendarBlank } from '@/components/Icons/Icons'
import { Avatar, AvatarFallback, AvatarImage } from 'keep-react'
import GroupMessage from './GroupMessage'

const ProjectOverviewSidebar = () => {
  return (
    <div id="scroll-bar" className="col-span-12 space-y-2.5 overflow-y-auto laptop:col-span-4 2xl:col-span-3">
      <div className="w-full rounded-xl bg-metal-25 px-6 py-5 dark:border dark:border-metal-800 dark:bg-[#d9e9ff]/[0.07]">
        <ul className="divide-y divide-metal-100 dark:divide-metal-600">
          <li className="flex items-center justify-between py-2">
            <p className="text-body-4 font-medium text-metal-600 dark:text-metal-300">Date line</p>
            <span className="flex items-center gap-x-1 rounded-full border border-error-100 bg-error-25 px-1.5 text-body-5 font-medium text-error-500 dark:border-error-800 dark:bg-error-500/10 dark:text-error-500">
              <ICalendarBlank />
              12 June
            </span>
          </li>
          <li className="flex items-center justify-between py-2">
            <p className="text-body-4 font-medium text-metal-600 dark:text-metal-300">Create by</p>
            <span className="flex items-center gap-x-1 rounded-full border border-metal-200 bg-metal-25 px-1.5 text-body-5 font-medium text-metal-500 dark:border-metal-800 dark:bg-metal-800/70 dark:text-metal-300">
              <ICalendarBlank />
              03 June
            </span>
          </li>
          <li className="flex items-center justify-between py-2">
            <p className="text-body-4 font-medium text-metal-600 dark:text-metal-300">Create by </p>
            <div className="flex items-center gap-2">
              <Avatar className="size-5">
                <AvatarImage className="size-5" src="/images/avatar/avatar-1.png" />
                <AvatarFallback className="text-body-5 font-normal text-metal-900 dark:text-white">S</AvatarFallback>
              </Avatar>
              <p className="text-body-4 font-medium text-metal-900 dark:text-white">Zakir Hossen</p>
            </div>
          </li>
        </ul>
      </div>
      <GroupMessage />
    </div>
  )
}

export default ProjectOverviewSidebar
