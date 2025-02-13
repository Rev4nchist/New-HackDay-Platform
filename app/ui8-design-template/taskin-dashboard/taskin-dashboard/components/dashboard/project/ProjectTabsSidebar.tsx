'use client'
import { IList } from '@/components/Icons/Icons'
import { projectTabs } from '@/data/data'
import { Drawer, DrawerAction, DrawerContent } from 'keep-react'
import Link from 'next/link'
import { FC } from 'react'

interface Props {
  projectId: string
  contentRef: string
}

const ProjectTabsSidebar: FC<Props> = ({ projectId, contentRef }) => {
  return (
    <Drawer>
      <DrawerAction asChild>
        <button>
          <IList size={20} className="text-metal-600 dark:text-metal-300" />
        </button>
      </DrawerAction>
      <DrawerContent position="left" className="w-1/2 rounded-r-none">
        <ul className="mt-4 flex flex-col gap-y-2.5">
          {projectTabs.map((tab) => (
            <Link
              data-state={tab.href === contentRef}
              href={`/projects/${projectId}/${tab.href}`}
              key={tab.id}
              className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-body-3 font-medium text-metal-600 transition-all duration-300 hover:bg-metal-50 data-[state=true]:bg-metal-50">
              <tab.Icon size={20} className="text-metal-600 dark:text-metal-300" />
              <span>{tab.title}</span>
            </Link>
          ))}
        </ul>
      </DrawerContent>
    </Drawer>
  )
}

export default ProjectTabsSidebar
