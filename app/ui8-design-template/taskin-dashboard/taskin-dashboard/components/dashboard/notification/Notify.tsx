'use client'
import { IArchive, IBookmarkSimple, IDotsThree, IFolder } from '@/components/Icons/Icons'
import FilterDropdown from '@/components/shared/FilterDropdown'
import SettingsDropdown from '@/components/shared/SettingsDropdown'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Breadcrumb,
  BreadcrumbDivider,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  Label,
  Switch,
} from 'keep-react'
import Image from 'next/image'
import { useState } from 'react'

const notifications = [
  {
    id: 1,
    name: 'Zakir Hossen',
    title: 'moved this task from "To Do" to "In Progress"',
    date: '18 Aug',
    time: '10:30 AM',
    projectName: 'Starblow',
    eventName: 'Conduct User Testing - New Feature Rollout',
    avatar: '/images/avatar/avatar-1.png',
    isRead: true,
  },
  {
    id: 2,
    name: 'Courtney Henry',
    title: 'updated the status to "Completed"',
    date: '12 Jul',
    time: '3:34 PM',
    projectName: 'Acme Corp',
    eventName: 'Exclusive Sale Notification',
    avatar: '/images/avatar/avatar-2.png',
    isRead: true,
  },
  {
    id: 3,
    name: 'Darrell Steward',
    title: 'assigned you a new task',
    date: '12 Jul',
    time: '3:34 PM',
    projectName: 'Design Contest',
    eventName: 'Submission Review',
    avatar: '/images/avatar/avatar-3.png',
    isRead: true,
  },
  {
    id: 4,
    name: 'Guy Hawkins',
    title: 'mentioned you in a comment',
    date: '12 Jul',
    time: '3:34 PM',
    projectName: 'Website Redesign',
    eventName: 'Initial Mockups',
    avatar: '/images/avatar/avatar-4.png',
    isRead: true,
  },
  {
    id: 5,
    name: 'Robert Fox',
    title: 'moved this task to "In Review"',
    date: '12 Jul',
    time: '3:34 PM',
    projectName: 'Marketing Campaign',
    eventName: 'Content Approval',
    avatar: '/images/avatar/avatar-5.png',
    isRead: true,
  },
  {
    id: 6,
    name: 'Annette Black',
    title: 'set the priority to "High"',
    date: '14 Sep',
    time: '2:45 PM',
    projectName: 'Product Launch',
    eventName: 'Kick-off Meeting',
    avatar: '/images/avatar/avatar-1.png',
    isRead: false,
  },
  {
    id: 7,
    name: 'Jenny Wilson',
    title: 'added you to a new project',
    date: '15 Sep',
    time: '9:20 AM',
    projectName: 'Brand Strategy',
    eventName: 'Initial Planning',
    avatar: '/images/avatar/avatar-2.png',
    isRead: false,
  },
  {
    id: 8,
    name: 'Jacob Jones',
    title: 'changed the deadline to tomorrow',
    date: '16 Sep',
    time: '1:10 PM',
    projectName: 'Ad Campaign',
    eventName: 'Deadline Update',
    avatar: '/images/avatar/avatar-3.png',
    isRead: false,
  },
  {
    id: 9,
    name: 'Arlene McCoy',
    title: 'left feedback on your document',
    date: '17 Sep',
    time: '4:05 PM',
    projectName: 'Project Documentation',
    eventName: 'Feedback Review',
    avatar: '/images/avatar/avatar-4.png',
    isRead: false,
  },
  {
    id: 10,
    name: 'Cody Fisher',
    title: 'tagged you in a task comment',
    date: '18 Sep',
    time: '11:30 AM',
    projectName: 'User Research',
    eventName: 'Survey Analysis',
    avatar: '/images/avatar/avatar-5.png',
    isRead: false,
  },
]

const Notify = () => {
  const [notifyArr, setNotifyArr] = useState(notifications.filter((item) => item.isRead === false))

  const handleChanged = (checked: boolean) => {
    if (checked) {
      setNotifyArr(notifications.filter((item) => item.isRead === true))
    } else {
      setNotifyArr(notifications.filter((item) => item.isRead === false))
    }
  }

  return (
    <>
      <div className="flex items-center justify-between border-b border-b-metal-100 px-4 py-2 dark:border-b-metal-800">
        <div className="flex items-center gap-2">
          <Label htmlFor="data">Unread only</Label>
          <Switch id="data" onCheckedChange={handleChanged} />
        </div>
        <div className="flex items-center gap-x-1">
          <FilterDropdown />
          <SettingsDropdown />
        </div>
      </div>
      <div className="px-8 py-2">
        <ul className="divide-y divide-metal-100 border-metal-100 dark:divide-metal-800 dark:border-metal-800">
          {notifyArr.map((item) => (
            <li key={item.id} className="space-y-3 py-5">
              <div className="flex flex-row items-center justify-between">
                <Breadcrumb className="line-clamp-1 flex items-center gap-2 px-0">
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/notification" className="flex items-center">
                      <Image src="/images/logo/figma.svg" height={14} width={14} alt="figma" />
                      <span className="hidden text-body-5 font-normal text-metal-600 md:flex dark:text-metal-300">
                        {item.projectName}
                      </span>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbDivider />
                  <BreadcrumbItem>
                    <BreadcrumbPage>
                      <IFolder className="size-3.5 text-metal-600 dark:text-metal-300" />
                      <span className="hidden text-body-5 font-normal text-metal-600 md:flex dark:text-metal-300">
                        {item.eventName}
                      </span>
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </Breadcrumb>
                <p className="text-body-5 font-normal text-metal-400 dark:text-metal-300">
                  {item.date} - {item.time}
                </p>
              </div>
              <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center md:gap-0">
                <div className="flex items-center gap-3">
                  <Avatar className="size-6">
                    <AvatarImage src={item.avatar} />
                    <AvatarFallback className="text-body-5 font-normal">KR</AvatarFallback>
                  </Avatar>
                  <p className="text-body-4 font-medium text-metal-600 md:text-body-3 dark:text-metal-300">
                    <span className="text-metal-900 dark:text-white">{item.name} </span>
                    <span>{item.title}</span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button>
                    <IArchive color="#8897AE" size={20} />
                  </button>
                  <button>
                    <IBookmarkSimple color="#8897AE" size={20} />
                  </button>
                  <button>
                    <IDotsThree color="#8897AE" size={20} />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Notify
