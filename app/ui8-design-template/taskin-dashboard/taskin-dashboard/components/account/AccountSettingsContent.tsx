'use client'
import Apps from './Apps'
import Company from './Company'
import Display from './Display'
import General from './General'
import Hacks from './Hacks'
import Notifications from './Notifications'
import Profile from './Profile'

const AccountSettingsContent = ({ activeTab }: { activeTab: number }) => {
  return (
    <div className="grid grid-cols-12 items-start divide-y divide-metal-100">
      <div id="scroll-bar" className="col-span-12 h-[calc(100vh-120px)] overflow-auto">
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

export default AccountSettingsContent
