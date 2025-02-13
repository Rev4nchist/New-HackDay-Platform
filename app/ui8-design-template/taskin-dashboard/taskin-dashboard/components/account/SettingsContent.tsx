'use client'
import { useState } from 'react'
import Apps from './Apps'
import Company from './Company'
import Display from './Display'
import General from './General'
import Hacks from './Hacks'
import Notifications from './Notifications'
import Profile from './Profile'

const SettingsContent = () => {
  const [activeTab, setActiveTab] = useState(1)
  const settingsTab = [
    { id: 1, title: 'General' },
    { id: 2, title: 'Profile' },
    { id: 3, title: 'Notifications' },
    { id: 4, title: 'Company' },
    { id: 5, title: 'Display' },
    { id: 6, title: 'Apps' },
    { id: 7, title: 'Hacks' },
  ]

  return (
    <div className="!mt-0 grid h-[500px] grid-cols-12 items-start divide-x divide-metal-100 laptop:h-[calc(800px-136px)] dark:divide-metal-800">
      <div className="col-span-3 h-full">
        <div className="space-y-0.5 py-3 pl-4 pr-5">
          {settingsTab.map((item) => (
            <button
              onClick={() => setActiveTab(item.id)}
              data-state={activeTab === item.id}
              className="w-full rounded-[20px] px-3 py-2 text-left text-body-4 font-medium text-metal-600 data-[state=true]:bg-metal-50 dark:text-metal-300 dark:data-[state=true]:bg-metal-800"
              key={item.id}>
              {item.title}
            </button>
          ))}
        </div>
      </div>
      <div id="scroll-bar" className="col-span-9 h-full overflow-auto">
        <General activeTab={activeTab} />
        <Profile activeTab={activeTab} />
        <Notifications activeTab={activeTab} />
        <Company activeTab={activeTab} />
        <Display activeTab={activeTab} />
        <Apps activeTab={activeTab} />
        <Hacks activeTab={activeTab} />
      </div>
    </div>
  )
}

export default SettingsContent
