'use client'
import { projectTabs } from '@/data/data'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const ProjectTabs = ({ projectId, contentRef }: { projectId: string; contentRef: string }) => {
  const [activeTab, setActiveTab] = useState(contentRef)
  const router = useRouter()

  const handleRouteChange = (projectId: string, url: string) => {
    router.push(`/projects/${projectId}/${url}`)
  }

  return (
    <div className="hidden items-center bg-metal-900/5 p-1.5 lg:flex lg:rounded-2xl dark:bg-metal-800">
      {projectTabs.map((tab) => (
        <button
          data-state={tab.href === contentRef}
          onClick={() => {
            setActiveTab(tab.href)
            handleRouteChange(projectId, tab.href)
          }}
          key={tab.id}
          className="relative h-9 px-3 py-1.5 text-body-4 font-medium text-metal-600 laptop:pl-3 laptop:pr-4 dark:text-metal-300">
          {activeTab === tab.href && (
            <motion.span
              layoutId="pill-tab"
              transition={{ type: 'spring', duration: 0.4, damping: 20, stiffness: 200 }}
              className="absolute inset-0 rounded-lg bg-white dark:bg-metal-900"
            />
          )}
          <span className="relative flex items-center gap-2">
            <tab.Icon size={20} className="text-metal-600 dark:text-metal-300" />
            <span>{tab.title}</span>
          </span>
        </button>
      ))}
    </div>
  )
}

export default ProjectTabs
