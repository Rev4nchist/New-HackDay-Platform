'use client'
import { v4 as uuidv4 } from 'uuid'

import { ICaretUp } from '@/components/Icons/Icons'
import { ITask } from '@/interfaces'
import { Accordion, AccordionAction, AccordionContent, AccordionIcon, AccordionItem, Badge } from 'keep-react'
import Image from 'next/image'
import TaskItem from '../dashboard/task/TaskItem'

const taskList: ITask[] = [
  {
    id: uuidv4(),
    icon: '/images/emoji/briefcase.svg',
    title: 'Create Wireframes - User Profile Page',
    visibility: 6,
    project: 'Figma Design System',
    deadline: '25 July',
    priority: 'Medium',
    team: [
      { id: 1, img: '/images/avatar/avatar-1.png', name: 'ABC' },
      { id: 2, img: '/images/avatar/avatar-2.png', name: 'DFA 2' },
      { id: 3, img: '/images/avatar/avatar-3.png', name: 'EFG 3' },
      { id: 4, img: '/images/avatar/avatar-4.png', name: 'MGJ 3' },
      { id: 5, img: '/images/avatar/avatar-5.png', name: 'MGJ 3' },
    ],
  },
  {
    id: uuidv4(),
    icon: '/images/emoji/artist-palette.svg',
    title: 'Update Color Palette - Brand Refresh',
    visibility: 6,
    project: 'Figma Design System',
    deadline: '25 July',
    priority: 'Medium',
    team: [
      { id: 1, img: '/images/avatar/avatar-1.png', name: 'ABC' },
      { id: 2, img: '/images/avatar/avatar-2.png', name: 'DFA 2' },
      { id: 3, img: '/images/avatar/avatar-3.png', name: 'EFG 3' },
      { id: 4, img: '/images/avatar/avatar-4.png', name: 'MGJ 3' },
      { id: 5, img: '/images/avatar/avatar-5.png', name: 'MGJ 3' },
    ],
  },
  {
    id: uuidv4(),
    icon: '/images/emoji/waning-crescent-moon.svg',
    title: 'Implement Dark Mode - Mobile Application',
    visibility: 6,
    project: 'Figma Design System',
    deadline: '25 July',
    priority: 'Medium',
    team: [
      { id: 1, img: '/images/avatar/avatar-1.png', name: 'ABC' },
      { id: 2, img: '/images/avatar/avatar-2.png', name: 'DFA 2' },
      { id: 3, img: '/images/avatar/avatar-3.png', name: 'EFG 3' },
      { id: 4, img: '/images/avatar/avatar-4.png', name: 'MGJ 3' },
      { id: 5, img: '/images/avatar/avatar-5.png', name: 'MGJ 3' },
    ],
  },
]
const TaskListView = () => {
  return (
    <>
      <div className="hidden w-full items-center justify-between overflow-auto px-6 py-2.5 text-body-5 font-medium text-metal-600 md:flex dark:text-metal-300">
        <p className="w-full laptop:w-[420px]">Tasks</p>
        <p className="w-full laptop:w-[100px]">Task visibility</p>
        <p className="w-full laptop:w-[115px]">Project</p>
        <p className="w-full laptop:w-[115px]">Deadline</p>
        <p className="w-full laptop:w-[115px]">Priority</p>
        <p className="w-full laptop:w-[115px]">Team</p>
      </div>
      <div id="scroll-bar" className="mx-4 h-screen space-y-5 overflow-auto py-5 md:py-0 xl:h-[calc(100vh-220px)]">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="rounded-xl bg-white dark:border dark:border-metal-800 dark:bg-metal-900">
          <AccordionItem
            value="item-1"
            className="border-metal-50 hover:bg-white data-[state=open]:bg-white dark:border-metal-800/50">
            <AccordionAction className="[&[data-state=open]>div>span]:rotate-180">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Image src="/images/emoji/exploding-head.svg" alt="exploding-head" width={24} height={24} />
                  <p>To Do</p>
                  <Badge color="secondary" variant="base">
                    3
                  </Badge>
                </div>
                <AccordionIcon>
                  <ICaretUp className="size-4" />
                </AccordionIcon>
              </div>
            </AccordionAction>
            <AccordionContent className="divide-y divide-metal-100 lg:divide-y-0 dark:divide-metal-800">
              {[...taskList].map((task: ITask) => (
                <TaskItem key={task.id} task={task} />
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          type="single"
          collapsible
          className="rounded-xl bg-white dark:border dark:border-metal-800 dark:bg-metal-900">
          <AccordionItem
            value="item-1"
            className="border-metal-50 hover:bg-white data-[state=open]:bg-white dark:border-metal-800/50">
            <AccordionAction className="[&[data-state=open]>div>span]:rotate-180">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Image
                    src="/images/emoji/woman-lifting-weights.svg"
                    alt="woman-lifting-weights"
                    width={24}
                    height={24}
                  />
                  <p>Doing</p>
                  <Badge color="secondary" variant="base">
                    4
                  </Badge>
                </div>
                <AccordionIcon>
                  <ICaretUp />
                </AccordionIcon>
              </div>
            </AccordionAction>
            <AccordionContent className="divide-y divide-metal-100 lg:divide-y-0 dark:divide-metal-800">
              {[...taskList].map((task: ITask) => (
                <TaskItem key={task.id} task={task} />
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="rounded-xl bg-white dark:border dark:border-metal-800 dark:bg-metal-900">
          <AccordionItem
            value="item-1"
            className="border-metal-50 hover:bg-white data-[state=open]:bg-white dark:border-metal-800/50">
            <AccordionAction className="[&[data-state=open]>div>span]:rotate-180">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Image src="/images/emoji/eyes.svg" alt="eyes" width={24} height={24} />
                  <p>In review</p>
                  <Badge color="secondary" variant="base">
                    2
                  </Badge>
                </div>
                <AccordionIcon>
                  <ICaretUp />
                </AccordionIcon>
              </div>
            </AccordionAction>
            <AccordionContent className="divide-y divide-metal-100 lg:divide-y-0 dark:divide-metal-800">
              {[...taskList].map((task: ITask) => (
                <TaskItem key={task.id} task={task} />
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          type="single"
          collapsible
          className="rounded-xl bg-white dark:border dark:border-metal-800 dark:bg-metal-900">
          <AccordionItem
            value="item-1"
            className="border-metal-50 hover:bg-white data-[state=open]:bg-white dark:border-metal-800/50">
            <AccordionAction className="[&[data-state=open]>div>span]:rotate-180">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Image src="/images/emoji/completed.svg" alt="eyes" width={24} height={24} /> Done
                  <Badge color="secondary" variant="base">
                    2
                  </Badge>
                </div>
                <AccordionIcon>
                  <ICaretUp />
                </AccordionIcon>
              </div>
            </AccordionAction>
            <AccordionContent className="divide-y divide-metal-100 lg:divide-y-0 dark:divide-metal-800">
              {[...taskList].map((task: ITask) => (
                <TaskItem key={task.id} task={task} />
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  )
}

export default TaskListView
