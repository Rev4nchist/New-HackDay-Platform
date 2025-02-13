import DayFilterDropdown from '@/components/shared/DayFilterDropdown'
import { Checkbox, Label } from 'keep-react'
import Image from 'next/image'

const MyTask = () => {
  return (
    <div className="space-y-3 lg:space-y-5">
      <div className="flex items-center justify-between">
        <p className="text-body-4 font-medium text-metal-600 lg:text-body-3 dark:text-metal-300">My Task</p>
        <DayFilterDropdown filterTitle="Today" />
      </div>
      <div id="scroll-bar" className="h-[428px] space-y-3 overflow-y-auto">
        <div className="space-y-4 rounded-xl border border-metal-100 px-3 py-4 dark:border-metal-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F5ECFE] dark:bg-[#460683]">
                <Image src="/images/logo/figma-design.svg" alt="figma logo" width={18} height={18} />
              </div>
              <p className="line-clamp-1 text-body-4 font-medium text-metal-600 lg:text-body-3 dark:text-white">
                Figma Design System
              </p>
            </div>
            <span className="rounded-full bg-metal-25 px-1.5 text-body-5 font-medium text-metal-500 dark:bg-metal-800/70 dark:text-metal-300">
              25 July
            </span>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Checkbox className="border-metal-200 dark:border-metal-500" id="update" />
                <Label htmlFor="update" className="line-clamp-1 text-body-4 font-normal text-metal-900">
                  Update button component
                </Label>
              </div>
              <span className="rounded-full bg-error-25 px-1.5 text-body-5 font-medium text-error-500 dark:bg-error-500/10 dark:text-error-500">
                Today
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Checkbox className="border-metal-200 dark:border-metal-500" id="pmd" />
                <Label htmlFor="pmd" className="line-clamp-1 text-body-4 font-normal text-metal-900">
                  Project management dashboard
                </Label>
              </div>
              <span className="rounded-full bg-primary-50 px-1.5 text-body-5 font-medium text-primary-500 dark:bg-primary-500/10 dark:text-primary-500">
                Tomorrow
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Checkbox className="border-metal-200 dark:border-metal-500" id="fe" />
                <Label htmlFor="fe" className="line-clamp-1 text-body-4 font-normal text-metal-900">
                  Fix errors
                </Label>
              </div>
              <span className="rounded-full bg-metal-25 px-1.5 text-body-5 font-medium text-metal-500 dark:bg-metal-800/70 dark:text-metal-300">
                25 July
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Checkbox className="border-metal-200 dark:border-metal-500" id="mwt" />
                <Label htmlFor="mwt" className="line-clamp-1 text-body-4 font-normal text-metal-900">
                  Meeting with dev. team
                </Label>
              </div>
              <span className="rounded-full bg-metal-25 px-1.5 text-body-5 font-medium text-metal-500 dark:bg-metal-800/70 dark:text-metal-300">
                18 March
              </span>
            </div>
          </div>
        </div>
        <div className="space-y-4 rounded-xl border border-metal-100 px-3 py-4 dark:border-metal-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F5ECFE] dark:bg-[#460683]">
                <Image src="/images/logo/figma-design.svg" alt="figma logo" width={18} height={18} />
              </div>
              <p className="line-clamp-1 text-body-4 font-medium text-metal-600 lg:text-body-3 dark:text-white">
                Figma Design System
              </p>
            </div>
            <span className="rounded-full bg-primary-50 px-1.5 text-body-5 font-medium text-primary-500 dark:bg-primary-500/10 dark:text-primary-500">
              25 July
            </span>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Checkbox className="border-metal-200 dark:border-metal-500" id="update2" />
                <Label htmlFor="update2" className="line-clamp-1 text-body-4 font-normal text-metal-900">
                  Update button component
                </Label>
              </div>
              <span className="rounded-full bg-error-25 px-1.5 text-body-5 font-medium text-error-500 dark:bg-error-500/10 dark:text-error-500">
                Today
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Checkbox className="border-metal-200 dark:border-metal-500" id="fixError" />
                <Label htmlFor="fixError" className="line-clamp-1 text-body-4 font-normal text-metal-900">
                  Fix Errors
                </Label>
              </div>
              <span className="rounded-full bg-error-25 px-1.5 text-body-5 font-medium text-error-500 dark:bg-error-500/10 dark:text-error-500">
                Tomorrow
              </span>
            </div>
          </div>
        </div>
        <div className="space-y-4 rounded-xl border border-metal-100 px-3 py-4 dark:border-metal-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F5ECFE] dark:bg-[#460683]">
                <Image src="/images/logo/figma-design.svg" alt="figma logo" width={18} height={18} />
              </div>
              <p className="line-clamp-1 text-body-4 font-medium text-metal-600 lg:text-body-3 dark:text-white">
                Figma Design System
              </p>
            </div>
            <span className="rounded-full bg-primary-50 px-1.5 text-body-5 font-medium text-primary-500 dark:bg-primary-500/10 dark:text-primary-500">
              25 July
            </span>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Checkbox className="border-metal-200 dark:border-metal-500" id="update2" />
                <Label htmlFor="update2" className="line-clamp-1 text-body-4 font-normal text-metal-900">
                  Update button component
                </Label>
              </div>
              <span className="rounded-full bg-error-25 px-1.5 text-body-5 font-medium text-error-500 dark:bg-error-500/10 dark:text-error-500">
                Today
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Checkbox className="border-metal-200 dark:border-metal-500" id="fixError" />
                <Label htmlFor="fixError" className="line-clamp-1 text-body-4 font-normal text-metal-900">
                  Fix Errors
                </Label>
              </div>
              <span className="rounded-full bg-error-25 px-1.5 text-body-5 font-medium text-error-500 dark:bg-error-500/10 dark:text-error-500">
                Tomorrow
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyTask
