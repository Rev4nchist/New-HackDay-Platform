import { IArrowsOutSimple, IPaperPlaneTilt, IPlus, ISmileySticker } from '@/components/Icons/Icons'
import Link from 'next/link'
import MyMessage from './MyMessage'
import OtherMessage from './OtherMessage'

const GroupMessage = () => {
  return (
    <div className="relative ml-auto flex h-[600px] w-full flex-col justify-between rounded-2xl border border-metal-100 bg-metal-25 px-4 py-2 dark:border-metal-800 dark:bg-[#d9e9ff]/[0.07]">
      <div className="flex items-center justify-between bg-metal-25 py-2.5 dark:bg-transparent">
        <p className="text-body-3 font-medium text-metal-900 dark:text-white">Group Message</p>
        <Link href="/messages/1">
          <IArrowsOutSimple size={20} className="text-metal-600 dark:text-metal-300" />
        </Link>
      </div>
      <div id="scroll-bar" className="space-y-3 overflow-auto">
        <OtherMessage
          message="Hey team! Just a heads-up, we’re diving into the Figma Design System integration project today. Exciting
            times ahead!"
        />
        <MyMessage message="Hey Zakir, I want to make this type of workspace. Can you help me?" />
        <OtherMessage message="Hey team! Just a heads-up, we’re diving into the Figma Design System integration project today. Exciting times ahead!" />
        <MyMessage message="Hey Zakir, I want to make this type of workspace. Can you help me?" />
        <OtherMessage message="Hey team! Just a heads-up, we’re diving into the Figma Design System integration project today. Exciting times ahead!" />
        <MyMessage message="Good luck Zakir!!" />
      </div>
      <div className="sticky bottom-0 left-0 right-0 w-full pt-2">
        <form>
          <div className="grid h-12 grid-cols-12 items-center gap-2 rounded-full border border-metal-100 bg-white py-1 pl-4 pr-1 dark:border-metal-800 dark:bg-metal-900">
            <div className="col-span-7">
              <input
                className="block w-full py-1.5 placeholder:text-body-4 placeholder:font-normal placeholder:text-metal-400 focus:outline-none dark:bg-metal-900 dark:placeholder:text-metal-300"
                placeholder="Type a message"
              />
            </div>
            <div className="col-span-5">
              <div className="flex items-center justify-end gap-x-1">
                <button className="size-9 rounded-full bg-metal-50 p-2 dark:bg-metal-800">
                  <IPlus size={18} />
                </button>
                <button className="size-9 rounded-full bg-metal-50 p-2 dark:bg-metal-800">
                  <ISmileySticker size={18} />
                </button>
                <button className="size-9 rounded-full bg-primary-500 p-2 text-white">
                  <IPaperPlaneTilt size={18} />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default GroupMessage
