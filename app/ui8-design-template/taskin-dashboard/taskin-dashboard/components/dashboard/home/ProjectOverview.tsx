import { ICaretRight } from '@/components/Icons/Icons'
import ProjectDropdown from '@/components/shared/ProjectDropdown'
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
  LineProgress,
  LineProgressBar,
  LineProgressText,
} from 'keep-react'
import { cn } from 'keep-react/utils'
import Image from 'next/image'
import Link from 'next/link'

const ProjectOverview = () => {
  const data = [
    {
      id: 1,
      title: 'Figma Design System',
      status: 'In Progress',
      dateLine: '25 July, 2024',
      img: '/images/logo/figma-design.svg',
      progress: 50,
      background: 'bg-[#F5F8FF] dark:bg-[#460683]',
      task: {
        total: 10,
        completed: 5,
      },
      teams: [
        { id: 1, img: '/images/avatar/avatar-1.png', name: 'ABC' },
        { id: 2, img: '/images/avatar/avatar-2.png', name: 'DFA 2' },
        { id: 3, img: '/images/avatar/avatar-3.png', name: 'EFG 3' },
        { id: 4, img: '/images/avatar/avatar-1.png', name: 'MGJ 3' },
      ],
    },
    {
      id: 2,
      title: 'Keep React ',
      status: 'Completed',
      dateLine: '10 August, 2024',
      img: '/images/logo/react.svg',
      progress: 100,
      background: 'bg-metal-50 dark:bg-[#4382ff26]',
      task: {
        total: 20,
        completed: 20,
      },
      teams: [
        { id: 1, img: '/images/avatar/avatar-1.png', name: 'KHI 1' },
        { id: 2, img: '/images/avatar/avatar-2.png', name: 'KLA 2' },
        { id: 3, img: '/images/avatar/avatar-3.png', name: 'MJE 3' },
        { id: 4, img: '/images/avatar/avatar-1.png', name: 'UIR 3' },
      ],
    },
    {
      id: 3,
      title: 'StaticMania',
      status: 'In Progress',
      dateLine: '25 September, 2024',
      img: '/images/logo/staticmania.svg',
      progress: 55,
      background: 'bg-success-50 dark:bg-[#012C16]',
      task: {
        total: 15,
        completed: 8,
      },
      teams: [
        { id: 1, img: '/images/avatar/avatar-1.png', name: 'QUW 1' },
        { id: 2, img: '/images/avatar/avatar-2.png', name: 'QAL 2' },
        { id: 3, img: '/images/avatar/avatar-3.png', name: 'FGF 3' },
        { id: 4, img: '/images/avatar/avatar-1.png', name: 'ERE 3' },
      ],
    },
    {
      id: 4,
      title: 'Roundbe website',
      status: 'In Progress',
      dateLine: '13 October, 2024',
      img: '/images/logo/roundbe-web.svg',
      progress: 67,
      background: 'bg-warning-50 dark:bg-[#362C07]',
      task: {
        total: 10,
        completed: 6,
      },
      teams: [
        { id: 1, img: '/images/avatar/avatar-1.png', name: 'SER 1' },
        { id: 2, img: '/images/avatar/avatar-2.png', name: 'NEW 2' },
        { id: 3, img: '/images/avatar/avatar-3.png', name: 'SED 3' },
        { id: 4, img: '/images/avatar/avatar-1.png', name: 'IUY 3' },
      ],
    },
  ]
  return (
    <div className="grid grid-cols-12 gap-3 lg:gap-5">
      <div className="col-span-12 flex items-center justify-between">
        <p className="text-body-4 font-medium text-metal-600 lg:text-body-3 dark:text-metal-300">Project Overview</p>
        <Link
          href="/projects"
          className="group flex items-center gap-1 text-body-4 font-medium text-metal-600 transition-colors duration-200 dark:text-metal-300 dark:hover:text-white">
          See All
          <ICaretRight
            size={14}
            className="text-metal-600 dark:text-metal-300 dark:hover:text-white dark:group-hover:text-white"
          />
        </Link>
      </div>
      {data.map((item) => (
        <div
          key={item.id}
          className="col-span-12 rounded-xl border border-metal-100 bg-white p-4 md:col-span-6 xl:col-span-6 dark:border-metal-800 dark:bg-metal-900">
          <div className="flex items-center justify-between">
            <Link href={`/projects/${item.id}/overview`} className="flex items-center gap-2">
              <div className={cn('flex size-6 items-center justify-center rounded-full', item.background)}>
                <Image src={item.img} alt={item.title} width={16} height={16} />
              </div>
              <p className="text-body-4 font-medium text-metal-600 lg:text-body-3 dark:text-white">{item.title}</p>
            </Link>
            <div className="relative z-50">
              <ProjectDropdown />
            </div>
          </div>
          <div className="space-y-1 py-5">
            <p className="text-body-5 font-medium text-metal-300">
              Status <span className="font-semibold text-metal-600 dark:text-metal-300">{item.status}</span>
            </p>
            <p className="text-body-5 font-medium text-metal-300">
              Date line <span className="font-semibold text-metal-600 dark:text-metal-300">{item.dateLine}</span>
            </p>
          </div>
          <div className="mb-2.5">
            <LineProgress progress={item.progress}>
              <LineProgressBar
                className="bg-gradient-1 m-0.5 h-2"
                lineBackground="bg-white border border-[#CFA1FB] h-3 flex items-center"
              />
              <LineProgressText className="text-body-5 font-medium text-metal-600 dark:text-metal-300">
                {item.progress}%
              </LineProgressText>
            </LineProgress>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-body-5 font-normal text-metal-300">
              Completed task
              <span className="font-semibold text-metal-600 dark:text-white">
                {'  '}
                {item.task.completed}/{item.task.total}
              </span>
            </p>
            <AvatarGroup className="-space-x-1 *:ring-white">
              {item.teams.map((member) => (
                <Avatar key={member.id} className="size-6">
                  <AvatarImage src={member.img} />
                  <AvatarFallback className="text-body-5">{member.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
              ))}
            </AvatarGroup>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectOverview
