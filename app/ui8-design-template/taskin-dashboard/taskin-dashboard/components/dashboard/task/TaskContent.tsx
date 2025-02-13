'use client'
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
  Breadcrumb,
  BreadcrumbDivider,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  Checkbox,
  Divider,
  Label,
  ModalDescription,
  ModalTitle,
  Tabs,
  TabsContent,
  TabsItem,
  TabsList,
  Textarea,
} from 'keep-react'

import {
  IArrowsOutSimple,
  ICalendarBlank,
  IconX,
  IDotsThreeOutlineVertical,
  IDownloadSimple,
  IFlag,
} from '@/components/Icons/Icons'

import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'
import ShareTask from './ShareTask'

interface TaskContentProps {
  onOpenChange: (open: boolean) => void
}

const TaskContent: FC<TaskContentProps> = ({ onOpenChange }) => {
  const [showShareModal, setShowShareModal] = useState(false)
  return (
    <>
      <ShareTask open={showShareModal} onOpenChange={setShowShareModal} />
      <div className="absolute right-3 top-3 flex items-center gap-x-2 lg:right-5 lg:top-5">
        <button onClick={() => setShowShareModal(true)} className="p-2">
          <IDotsThreeOutlineVertical weight="fill" className="size-4 text-metal-600 lg:size-5 dark:text-metal-300" />
        </button>
        <Link href="/tasks/1" className="p-2">
          <IArrowsOutSimple className="size-4 text-metal-600 lg:size-5 dark:text-metal-300" />
        </Link>
        <button className="p-2" onClick={() => onOpenChange(false)}>
          <IconX className="size-4 text-metal-600 lg:size-5 dark:text-metal-300" />
        </button>
      </div>
      <div className="!mb-8 space-y-3">
        <div className="flex items-start justify-start gap-x-3">
          <div className="flex size-10 items-center justify-center rounded-full bg-metal-50 dark:bg-metal-800">
            <Image src="/images/emoji/briefcase.svg" alt="briefcase" width={24} height={24} />
          </div>
          <div className="space-y-1.5">
            <ModalTitle className="text-body-2 font-medium text-metal-900 lg:text-heading-6">
              Create Wireframes - User Profile Page
            </ModalTitle>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="flex items-center text-metal-400 dark:text-metal-300">
                    <div className="flex size-5 items-center justify-center rounded-full bg-[#F5F8FF] dark:bg-[#460683]">
                      <Image src="/images/logo/figma.svg" alt="figma" height={13} width={13} />
                    </div>
                    Figma Design System
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbDivider />
                <BreadcrumbPage className="text-metal-400 dark:text-metal-300">
                  <div className="flex size-5 items-center justify-center rounded-full bg-metal-50 dark:bg-metal-800">
                    <Image src="/images/emoji/briefcase.svg" alt="figma" height={13} width={13} />
                  </div>
                  Create Wireframes - User Profile Page
                </BreadcrumbPage>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex flex-col items-start gap-y-2 sm:flex-row sm:gap-x-24 sm:gap-y-0 lg:items-center">
          <div className="flex items-center gap-x-4">
            <p className="text-body-3 font-medium text-metal-900 dark:text-white">Assignee</p>
            <AvatarGroup>
              <Avatar className="size-8">
                <AvatarImage src="/images/avatar/avatar-1.png" alt="avatar-1" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar className="size-8">
                <AvatarImage src="/images/avatar/avatar-2.png" alt="avatar-2" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar className="size-8">
                <AvatarImage src="/images/avatar/avatar-3.png" alt="avatar-3" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar className="size-8">
                <AvatarImage src="/images/avatar/avatar-5.png" alt="avatar-5" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </AvatarGroup>
          </div>
          <div className="flex items-center gap-x-4">
            <p className="text-body-3 font-medium text-metal-900 dark:text-white">Priority</p>
            <span className="flex items-center gap-x-1 rounded-full bg-error-25 px-1.5 text-body-5 font-medium text-error-500 dark:bg-error-500/10 dark:text-error-500">
              <IFlag weight="fill" />
              High
            </span>
          </div>
        </div>
        <div className="flex flex-col items-start gap-y-2 sm:flex-row sm:items-center sm:gap-x-24 sm:gap-y-0">
          <div className="flex items-center gap-x-4">
            <p className="text-body-3 font-medium text-metal-900 dark:text-white">Created date</p>
            <span className="flex items-center gap-1 rounded-full border border-metal-200 bg-metal-25 px-1.5 text-body-4 font-medium text-metal-600 dark:border-metal-700 dark:bg-metal-500/10 dark:text-metal-300">
              02 Jul - 2024 <ICalendarBlank />
            </span>
          </div>
          <div className="flex items-center gap-x-4">
            <p className="text-body-3 font-medium text-metal-900 dark:text-white">Due date</p>
            <span className="flex items-center gap-1 rounded-full border border-metal-200 bg-metal-25 px-1.5 text-body-4 font-medium text-metal-600 dark:border-metal-700 dark:bg-metal-500/10 dark:text-metal-300">
              16 Jul - 2024 <ICalendarBlank />
            </span>
          </div>
        </div>
      </div>
      <Divider className="!my-6" />
      <div className="!mb-8 max-w-[740px] space-y-4">
        <p className="text-body-2 font-medium text-metal-900 dark:text-white">Description</p>
        <ModalDescription className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
          This foundational phase focuses on outlining the key components and functionalities that the profile page will
          encompass, such as the user’s personal information, profile picture, activity feed, settings, and interactive
          elements like buttons and navigation links. The wireframes serve as a blueprint, providing a clear visual
          guide for the design and development teams to understand the spatial arrangement and user flow. It ensures
          that all essential elements are included and optimally positioned before advancing to the more detailed design
          stages, thereby facilitating a user-centric and functional profile page. The wireframes will be iteratively
          reviewed and refined based on feedback to align with user needs and project goals.
        </ModalDescription>
      </div>
      <div className="flex flex-col gap-y-2.5 space-x-0 md:flex-row md:space-x-3 lg:gap-y-0">
        <div className="flex w-full items-center justify-between rounded-xl border border-metal-100 px-2.5 py-2 md:w-[230px] dark:border-metal-800">
          <div className="flex items-center gap-x-3">
            <Image src="/images/logo/pdf.svg" alt="pdf" height={32} width={32} />
            <div>
              <p className="line-clamp-1 text-body-4 font-medium text-metal-900 dark:text-white">
                Connecting your tech.pdf
              </p>
              <p className="text-body-5 font-normal text-metal-600 dark:text-metal-300">4.3 MB</p>
            </div>
          </div>
          <div>
            <button>
              <IDownloadSimple size={16} className="text-metal-600 dark:text-metal-300" />
            </button>
          </div>
        </div>
        <div className="flex w-full items-center justify-between rounded-xl border border-metal-100 px-2.5 py-2 md:w-[230px] dark:border-metal-800">
          <div className="flex items-center gap-x-3">
            <Image src="/images/logo/pdf.svg" alt="pdf" height={32} width={32} />
            <div>
              <p className="line-clamp-1 text-body-4 font-medium text-metal-900 dark:text-white">
                Connecting your tech.pdf
              </p>
              <p className="text-body-5 font-normal text-metal-600 dark:text-metal-300">4.3 MB</p>
            </div>
          </div>
          <div>
            <button>
              <IDownloadSimple size={16} className="text-metal-600 dark:text-metal-300" />
            </button>
          </div>
        </div>
        <div className="flex w-full items-center justify-between rounded-xl border border-metal-100 px-2.5 py-2 md:w-[230px] dark:border-metal-800">
          <div className="flex items-center gap-x-3">
            <Image src="/images/logo/pdf.svg" alt="pdf" height={32} width={32} />
            <div>
              <p className="line-clamp-1 text-body-4 font-medium text-metal-900 dark:text-white">
                Connecting your tech.pdf
              </p>
              <p className="text-body-5 font-normal text-metal-600 dark:text-metal-300">4.3 MB</p>
            </div>
          </div>
          <div>
            <button>
              <IDownloadSimple size={16} className="text-metal-600 dark:text-metal-300" />
            </button>
          </div>
        </div>
      </div>
      <Divider className="!my-6" />
      <div>
        <Tabs defaultValue="item-1">
          <TabsList className="max-w-max rounded-lg bg-metal-50 p-1 dark:bg-metal-800">
            <TabsItem
              value="item-1"
              className="h-9 w-[140px] data-[state=active]:bg-white data-[state=inactive]:bg-transparent dark:border-metal-800 dark:text-white dark:data-[state=active]:bg-metal-900 dark:data-[state=inactive]:bg-transparent">
              Subtask
            </TabsItem>
            <TabsItem
              value="item-2"
              className="h-9 w-[140px] data-[state=active]:bg-white data-[state=inactive]:bg-transparent dark:border-metal-800 dark:text-white dark:data-[state=active]:bg-metal-900 dark:data-[state=inactive]:bg-transparent">
              Activity
            </TabsItem>
          </TabsList>

          <TabsContent value="item-1" className="mt-6 w-full space-y-3">
            <div className="flex items-center justify-between rounded-xl border border-metal-100 p-3 dark:border-metal-800">
              <div className="flex items-center gap-x-2">
                <Checkbox className="border-metal-200 dark:border-metal-500" id="subtask" />
                <Label htmlFor="subtask" className="text-body-3 font-medium text-metal-900">
                  Project management dashboard
                </Label>
              </div>
              <div className="flex items-center gap-x-8">
                <Avatar className="size-8">
                  <AvatarImage src="/images/avatar/avatar-1.png" />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>

                <div className="flex items-center gap-x-3">
                  <span className="flex items-center gap-x-1 rounded-full bg-error-25 px-1.5 text-body-5 font-medium text-error-500 dark:bg-error-500/10 dark:text-error-500">
                    Today <ICalendarBlank />
                  </span>
                  <button>
                    <IDotsThreeOutlineVertical
                      weight="fill"
                      className="size-4 text-metal-600 lg:size-5 dark:text-metal-300"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-metal-100 p-3 dark:border-metal-800">
              <div className="flex items-center gap-x-2">
                <Checkbox className="border-metal-200 dark:border-metal-500" id="subtask-2" />
                <Label htmlFor="subtask-2" className="text-body-3 font-medium text-metal-900">
                  Fix errors
                </Label>
              </div>
              <div className="flex items-center gap-x-8">
                <Avatar className="size-8">
                  <AvatarImage src="/images/avatar/avatar-2.png" />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>

                <div className="flex items-center gap-x-3">
                  <span className="flex items-center gap-x-1 rounded-full bg-primary-50 px-1.5 text-body-5 font-medium text-primary-500 dark:bg-primary-500/10 dark:text-primary-500">
                    Tomorrow <ICalendarBlank />
                  </span>

                  <button>
                    <IDotsThreeOutlineVertical
                      weight="fill"
                      className="size-4 text-metal-600 lg:size-5 dark:text-metal-300"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-metal-100 p-3 dark:border-metal-800">
              <div className="flex items-center gap-x-2">
                <Checkbox className="border-metal-200 dark:border-metal-500" id="subtask-3" />
                <Label htmlFor="subtask-3" className="text-body-3 font-medium text-metal-900">
                  Meeting with dev. team
                </Label>
              </div>
              <div className="flex items-center gap-x-8">
                <Avatar className="size-8">
                  <AvatarImage src="/images/avatar/avatar-1.png" />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>

                <div className="flex items-center gap-x-3">
                  <span className="flex items-center gap-x-1 rounded-full bg-metal-25 px-1.5 text-body-5 font-medium text-metal-500 dark:bg-metal-800/70 dark:text-metal-300">
                    16 Jul <ICalendarBlank />
                  </span>
                  <button>
                    <IDotsThreeOutlineVertical
                      weight="fill"
                      className="size-4 text-metal-600 lg:size-5 dark:text-metal-300"
                    />
                  </button>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="item-2" className="relative mt-6 w-full space-y-10">
            <div className="flex items-start gap-x-3">
              <div>
                <Avatar>
                  <AvatarImage src="/images/avatar/avatar-1.png" />
                </Avatar>
              </div>
              <div className="space-y-0.5">
                <p className="text-body-3 font-medium text-metal-900 dark:text-white">Ralph Edwards</p>
                <p className="flex items-center gap-x-2.5">
                  <span className="text-body-4 font-normal text-metal-600 dark:text-metal-300">Created this task</span>
                  <span className="text-body-4 font-normal text-metal-900 dark:text-white">22 July - 5:24 PM</span>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-x-3">
              <div>
                <Avatar>
                  <AvatarImage src="/images/avatar/avatar-2.png" />
                </Avatar>
              </div>
              <div className="space-y-2">
                <div className="space-y-0.5">
                  <p className="text-body-3 font-medium text-metal-900 dark:text-white">Ralph Edwards</p>
                  <p className="flex items-center gap-x-2.5">
                    <span className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
                      Attached 2 pdf files
                    </span>
                    <span className="text-body-4 font-normal text-metal-900 dark:text-white">22 July - 5:24 PM</span>
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex w-[330px] items-center justify-between gap-x-3 rounded-xl border border-metal-100 px-2.5 py-2 dark:border-metal-800">
                    <div className="flex items-center gap-x-3">
                      <Image src="/images/logo/pdf.svg" alt="pdf" height={32} width={32} />
                      <div>
                        <p className="line-clamp-1 text-body-4 font-medium text-metal-900 dark:text-white">
                          Connecting your tech.pdf
                        </p>
                        <p className="text-body-5 font-normal text-metal-600 dark:text-metal-300">4.3 MB</p>
                      </div>
                    </div>
                    <div>
                      <button>
                        <IDownloadSimple size={16} className="text-metal-600 dark:text-metal-300" />
                      </button>
                    </div>
                  </div>
                  <div className="flex w-[330px] items-center justify-between gap-x-3 rounded-xl border border-metal-100 px-2.5 py-2 dark:border-metal-800">
                    <div className="flex items-center gap-x-3">
                      <Image src="/images/logo/pdf.svg" alt="pdf" height={32} width={32} />
                      <div>
                        <p className="line-clamp-1 text-body-4 font-medium text-metal-900 dark:text-white">
                          Connecting your tech.pdf
                        </p>
                        <p className="text-body-5 font-normal text-metal-600 dark:text-metal-300">4.3 MB</p>
                      </div>
                    </div>
                    <div>
                      <button>
                        <IDownloadSimple size={16} className="text-metal-600 dark:text-metal-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-x-3">
              <div>
                <Avatar>
                  <AvatarImage src="/images/avatar/avatar-3.png" />
                </Avatar>
              </div>
              <div className="space-y-2">
                <div className="space-y-0.5">
                  <p className="text-body-3 font-medium text-metal-900 dark:text-white">Ralph Edwards</p>
                  <p className="flex items-center gap-x-2.5">
                    <span className="text-body-4 font-normal text-metal-600 dark:text-metal-300">Comment</span>
                    <span className="text-body-4 font-normal text-metal-900 dark:text-white">22 July - 5:24 PM</span>
                  </p>
                </div>
                <div className="max-w-[550px] space-y-3 text-body-4 font-normal text-metal-600 dark:text-metal-300">
                  <p>
                    Great work on the initial wireframes for the User Profile Page! I appreciate the clean layout and
                    attention to detail. I have a couple of suggestions:
                  </p>
                  <ol className="list-outside list-decimal pl-4">
                    <li>
                      Consider adding a section for user bio or about me, as it could enhance the personalization aspect
                      of the profile.
                    </li>
                    <li>
                      It might be useful to include a notification area or recent activity feed to keep users informed
                      of their interactions.
                    </li>
                  </ol>
                  <p>
                    Overall, it’s a solid start, and I’m excited to see how it evolves. Let me know if you need any
                    further feedback or assistance!
                  </p>
                </div>
              </div>
            </div>
            <div className="sticky bottom-0 max-w-[524px] bg-white dark:bg-metal-900">
              <form>
                <Textarea placeholder="Add your comment" />
              </form>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}

export default TaskContent
