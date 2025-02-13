'use client'
import { taskTabs } from '@/data/data'
import { motion } from 'framer-motion'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

const TaskTabs = () => {
  const [activeTab, setActiveTab] = useState(taskTabs[0].id)
  const url = useSearchParams().get('tab')
  const router = useRouter()
  const handleRouteChange = (url: string) => {
    router.push(`/tasks?tab=${url}`)
  }

  return (
    <div className="hidden items-center p-2 md:flex md:rounded-2xl md:bg-metal-50 dark:md:bg-metal-800">
      {taskTabs.map((tab) => (
        <button
          data-state={tab.href === url}
          onClick={() => {
            setActiveTab(tab.id)
            handleRouteChange(tab.href)
          }}
          key={tab.id}
          className="relative h-9 rounded-xl px-3 py-1.5 text-body-4 font-medium text-metal-600 laptop:pl-3 laptop:pr-4 dark:text-metal-300">
          {activeTab === tab.id && (
            <motion.div
              layoutId="pill-tab"
              transition={{ type: 'spring', duration: 0.4, damping: 20, stiffness: 200 }}
              className="absolute inset-0 rounded-xl bg-white shadow-md dark:bg-metal-900"></motion.div>
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

export default TaskTabs
