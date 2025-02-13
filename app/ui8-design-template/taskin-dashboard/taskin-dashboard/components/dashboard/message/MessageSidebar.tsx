import { IDotsThree, IDownloadSimple, IEnvelope, IMapPinLine, IPhoneCall, IVideoCamera } from '@/components/Icons/Icons'
import { Avatar, AvatarImage, Tabs, TabsItem, TabsList } from 'keep-react'
import Image from 'next/image'

const MessageSidebar = () => {
  return (
    <div
      id="scroll-bar"
      className="hidden h-[calc(100vh-150px)] overflow-y-scroll border-l border-l-metal-100 px-4 pt-10 laptop:col-span-4 laptop:block dark:border-l-metal-800">
      <div className="mb-[22px] flex flex-col items-center justify-center space-y-3">
        <Avatar>
          <AvatarImage src="/images/avatar/avatar-1.png" />
        </Avatar>
        <div className="text-center">
          <p className="text-body-1 font-medium text-metal-900 dark:text-white">Darlene Robertson</p>
          <p className="text-body-4 font-normal text-metal-400 dark:text-metal-300">24 minutes ago</p>
        </div>
      </div>
      <div className="mb-8 flex items-center justify-center gap-2.5">
        <span className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-metal-900/[0.04] transition-all duration-300 hover:translate-y-0.5 hover:bg-metal-900/[0.08] dark:bg-metal-800 dark:hover:bg-metal-800/50">
          <IPhoneCall size={22} className="text-metal-600 dark:text-metal-300" weight="bold" />
        </span>
        <span className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-metal-900/[0.04] transition-all duration-300 hover:translate-y-0.5 hover:bg-metal-900/[0.08] dark:bg-metal-800 dark:hover:bg-metal-800/50">
          <IVideoCamera size={22} className="text-metal-600 dark:text-metal-300" weight="bold" />
        </span>
        <span className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-metal-900/[0.04] transition-all duration-300 hover:translate-y-0.5 hover:bg-metal-900/[0.08] dark:bg-metal-800 dark:hover:bg-metal-800/50">
          <IEnvelope size={22} className="text-metal-600 dark:text-metal-300" weight="bold" />
        </span>
        <span className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-metal-900/[0.04] transition-all duration-300 hover:translate-y-0.5 hover:bg-metal-900/[0.08] dark:bg-metal-800 dark:hover:bg-metal-800/50">
          <IDotsThree className="size-6 text-metal-600 dark:text-metal-300" weight="bold" />
        </span>
      </div>
      <div className="mb-8 rounded-xl border border-metal-100 p-4 dark:border-metal-800">
        <ul className="space-y-4">
          <li className="flex items-start gap-5">
            <span>
              <IPhoneCall size={20} className="text-metal-600 dark:text-metal-300" weight="bold" />
            </span>
            <span className="text-body-4 font-medium text-metal-600 dark:text-metal-300">(316) 555-0116</span>
          </li>
          <li className="flex items-start gap-5">
            <span>
              <IEnvelope size={20} className="text-metal-600 dark:text-metal-300" weight="bold" />
            </span>
            <span className="text-body-4 font-medium text-metal-600 dark:text-metal-300">
              darlenerobertson@gmail.com
            </span>
          </li>
          <li className="flex items-start gap-5">
            <span>
              <IMapPinLine size={20} className="text-metal-600 dark:text-metal-300" weight="bold" />
            </span>
            <span className="text-body-4 font-medium text-metal-600 dark:text-metal-300">
              4517 Washington Ave. Manchester, Kentucky 39495
            </span>
          </li>
        </ul>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-body-2 font-medium text-metal-900 dark:text-white">
            Media <span className="text-body-3 font-normal text-metal-400 dark:text-metal-600">26</span>
          </p>

          <div>
            <Tabs defaultValue="1">
              <TabsList className="h-8 rounded-xl bg-metal-25 px-2 dark:bg-metal-800">
                <TabsItem
                  value="1"
                  className="h-6 px-1.5 py-0.5 text-body-4 dark:text-white dark:data-[state=active]:border-metal-800 dark:data-[state=active]:bg-metal-900">
                  Files
                </TabsItem>
                <TabsItem
                  className="h-6 px-1.5 py-0.5 text-body-4 dark:text-white dark:data-[state=active]:border-metal-800 dark:data-[state=active]:bg-metal-900"
                  value="2">
                  Image
                </TabsItem>
                <TabsItem
                  value="3"
                  className="h-6 px-1.5 py-0.5 text-body-4 dark:text-white dark:data-[state=active]:border-metal-800 dark:data-[state=active]:bg-metal-900">
                  Link
                </TabsItem>
              </TabsList>
            </Tabs>
          </div>
        </div>
        <div className="space-y-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between rounded-xl border border-metal-100 px-2.5 py-2 dark:border-metal-800">
              <div className="flex items-center gap-3">
                <div>
                  <Image src="/images/logo/pdf.svg" alt="pdf" height={32} width={32} />
                </div>
                <div className="space-y-0.5">
                  <p className="text-body-4 font-medium text-metal-900 dark:text-white">Connecting your tech.pdf</p>
                  <p className="text-body-5 font-normal text-metal-400 dark:text-metal-600">4.2MB</p>
                </div>
              </div>
              <div>
                <IDownloadSimple size={16} className="text-metal-600 dark:text-metal-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MessageSidebar
