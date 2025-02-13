import {
  IDotsThree,
  IMagnifyingGlass,
  IPaperPlaneTilt,
  IPhoneCall,
  IPlus,
  ISmileySticker,
} from '@/components/Icons/Icons'
import { TabActiveProps } from '@/interfaces'
import { Avatar, AvatarImage, Button, Divider } from 'keep-react'
import Image from 'next/image'
import { FC } from 'react'

const ProjectMessage: FC<TabActiveProps> = ({ activeTab }) => {
  return (
    <div data-content={activeTab} className="hidden data-[content=message]:block">
      <div className="flex items-center justify-between border-b border-b-metal-100 px-6 py-3 dark:border-b-metal-800">
        <p className="text-body-1 font-medium text-metal-900 dark:text-white">Project group message</p>
        <div className="flex items-center gap-1.5">
          <button className="p-2">
            <IPhoneCall className="text-metal-600 dark:text-metal-300" size={20} weight="bold" />
          </button>
          <button>
            <IMagnifyingGlass className="text-metal-600 dark:text-metal-300" size={20} weight="bold" />
          </button>
          <button>
            <IDotsThree className="text-metal-600 dark:text-metal-300" size={20} weight="bold" />
          </button>
        </div>
      </div>
      <div id="scroll-bar" className="relative h-screen overflow-y-scroll px-5 xl:h-[calc(100vh-230px)]">
        <div className="py-6 xl:py-2">
          <div className="space-y-3">
            <div className="flex items-end gap-2">
              <Avatar className="mb-9 size-10">
                <AvatarImage className="size-10" src="/images/avatar/avatar-3.png" />
              </Avatar>
              <div className="space-y-2.5">
                <div className="max-w-[273px] rounded-e-xl rounded-t-xl border border-metal-100 p-4 dark:border-metal-800">
                  <p className="text-body-4 font-normal text-metal-900 dark:text-white">
                    Hey team! Just a heads-up, we’re diving into the Figma Design System integration project today.
                    Exciting times ahead!
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <p className="text-body-5 font-medium text-metal-300 dark:text-metal-600">2:30 PM</p>
                  <button className="flex items-center gap-1 rounded-md border border-metal-100 bg-metal-25 px-1.5 py-0.5 text-body-4 font-medium text-metal-800 dark:border-metal-800 dark:bg-metal-900 dark:text-metal-300">
                    <Image src="/images/emoji/heart.svg" height={12} width={12} alt="heart" /> 3
                  </button>
                </div>
              </div>
            </div>
            <Divider variant="center">15 July </Divider>
            <div className="flex items-end gap-2">
              <Avatar className="mb-9 size-10">
                <AvatarImage className="size-10" src="/images/avatar/avatar-4.png" />
              </Avatar>
              <div className="space-y-2.5">
                <div className="max-w-[273px] rounded-e-xl rounded-t-xl border border-metal-100 p-4 dark:border-metal-800">
                  <p className="text-body-4 font-normal text-metal-900 dark:text-white">Hey team! How are your all?</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <p className="text-body-5 font-medium text-metal-300 dark:text-metal-600">2:30 PM</p>
                  <button className="flex items-center gap-1 rounded-md border border-metal-100 bg-metal-25 px-1.5 py-0.5 text-body-4 font-medium text-metal-800 dark:border-metal-800 dark:bg-metal-900 dark:text-metal-300">
                    <Image src="/images/emoji/heart.svg" height={12} width={12} alt="heart" /> 3
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-end gap-2">
              <Avatar className="mb-9 size-10">
                <AvatarImage className="size-10" src="/images/avatar/avatar-5.png" />
              </Avatar>
              <div className="space-y-2.5">
                <div className="max-w-[273px] rounded-e-xl rounded-t-xl border border-metal-100 p-4 dark:border-metal-800">
                  <p className="text-body-4 font-normal text-metal-900 dark:text-white">
                    Hey team! Just a heads-up, we’re diving into the Figma Design System integration project today.
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <p className="text-body-5 font-medium text-metal-300 dark:text-metal-600">2:30 PM</p>
                  <button className="flex items-center gap-1 rounded-md border border-metal-100 bg-metal-25 px-1.5 py-0.5 text-body-4 font-medium text-metal-800 dark:border-metal-800 dark:bg-metal-900 dark:text-metal-300">
                    <Image src="/images/emoji/heart.svg" height={12} width={12} alt="heart" /> 3
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-end gap-2">
              <div className="space-y-1.5">
                <div className="max-w-[308px] rounded-t-xl rounded-bl-xl bg-primary-600 p-4">
                  <p className="text-body-4 font-normal text-white">
                    Hey Zakir, I want to make this type of workspace. Can you help me?
                  </p>
                </div>
                <div className="flex items-center justify-end gap-2.5">
                  <p className="text-body-5 font-medium text-metal-300">2:30 PM</p>
                </div>
              </div>
              <Avatar className="mb-9 size-10">
                <AvatarImage className="size-10" src="/images/avatar/avatar-5.png" />
              </Avatar>
            </div>
            <div className="flex items-end gap-2">
              <Avatar className="mb-9 size-10">
                <AvatarImage className="size-10" src="/images/avatar/avatar-5.png" />
              </Avatar>
              <div className="space-y-2.5">
                <div className="max-w-[273px] rounded-e-xl rounded-t-xl border border-metal-100 p-4 dark:border-metal-800">
                  <p className="text-body-4 font-normal text-metal-900 dark:text-white">
                    That’s great news! Should we set up a kick-off meeting to discuss our approach?
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <p className="text-body-5 font-medium text-metal-300">2:30 PM</p>
                </div>
              </div>
            </div>
            <div className="flex items-end gap-2">
              <Avatar className="mb-9 size-10">
                <AvatarImage className="size-10" src="/images/avatar/avatar-5.png" />
              </Avatar>
              <div className="space-y-2.5">
                <div className="max-w-[273px] rounded-e-xl rounded-t-xl border border-metal-100 p-4 dark:border-metal-800">
                  <p className="text-body-4 font-normal text-metal-900 dark:text-white">
                    Hey team! Just a heads-up, we’re diving into the Figma Design System integration project today.
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <p className="text-body-5 font-medium text-metal-300 dark:text-metal-600">2:30 PM</p>
                  <button className="flex items-center gap-1 rounded-md border border-metal-100 bg-metal-25 px-1.5 py-0.5 text-body-4 font-medium text-metal-800 dark:border-metal-800 dark:bg-metal-900 dark:text-metal-300">
                    <Image src="/images/emoji/heart.svg" height={12} width={12} alt="heart" /> 3
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-end gap-2">
              <div className="space-y-1.5">
                <div className="max-w-[308px] rounded-t-xl rounded-bl-xl bg-primary-600 p-4">
                  <p className="text-body-4 font-normal text-white">
                    Hey Zakir, I want to make this type of workspace. Can you help me?
                  </p>
                </div>
                <div className="flex items-center justify-end gap-2.5">
                  <p className="text-body-5 font-medium text-metal-300">2:30 PM</p>
                </div>
              </div>
              <Avatar className="mb-9 size-10">
                <AvatarImage className="size-10" src="/images/avatar/avatar-5.png" />
              </Avatar>
            </div>
            <div className="flex items-end gap-2">
              <Avatar className="mb-9 size-10">
                <AvatarImage className="size-10" src="/images/avatar/avatar-5.png" />
              </Avatar>
              <div className="space-y-2.5">
                <div className="max-w-[273px] rounded-e-xl rounded-t-xl border border-metal-100 p-4 dark:border-metal-800">
                  <p className="text-body-4 font-normal text-metal-900 dark:text-white">
                    That’s great news! Should we set up a kick-off meeting to discuss our approach?
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <p className="text-body-5 font-medium text-metal-300">2:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 left-0 right-0 w-full bg-white px-5 py-5 xl:sticky dark:bg-metal-900">
          <form>
            <div className="relative flex h-14 items-center justify-between overflow-hidden rounded-full border border-metal-100 bg-white pr-3 dark:border-metal-800 dark:bg-metal-900">
              <input
                className="block flex-1 py-1.5 pl-5 pr-1.5 placeholder:text-body-4 placeholder:font-normal placeholder:text-metal-400 focus:outline-none dark:bg-metal-900"
                placeholder="Type a message"
              />
              <div className="flex items-center justify-end gap-x-1">
                <Button type="button" color="secondary" variant="softBg" shape="circle" radius="full">
                  <IPlus size={20} />
                </Button>
                <Button type="button" color="secondary" variant="softBg" shape="circle" radius="full">
                  <ISmileySticker size={20} />
                </Button>
                <Button type="submit" radius="full" shape="circle">
                  <IPaperPlaneTilt size={20} />
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ProjectMessage
