'use client'
import { ICaretLeft, IGear, IList } from '@/components/Icons/Icons'
import {
  Button,
  Drawer,
  DrawerAction,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  Dropdown,
  DropdownAction,
  DropdownContent,
} from 'keep-react'
import { useState } from 'react'
import AccountSettingsContent from './AccountSettingsContent'

const AccountSettings = () => {
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
    <Drawer showCloseIcon={false}>
      <DrawerAction asChild>
        <button className="mb-0 flex w-full cursor-pointer select-none items-center gap-2 rounded-lg bg-transparent p-2.5 text-body-4 font-medium text-metal-600 outline-none transition-all duration-300 hover:bg-metal-50 focus:bg-metal-50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:text-white dark:hover:bg-metal-800/30 dark:focus:bg-metal-800">
          <IGear size={20} />
          <span>Settings</span>
        </button>
      </DrawerAction>

      <DrawerContent position="right" className="w-full rounded-none bg-white p-0 sm:max-w-[1024px] lg:hidden">
        <div className="flex items-center justify-between border-b border-b-metal-100 px-6 py-4">
          <DrawerClose asChild>
            <div className="flex cursor-pointer items-center gap-x-1">
              <ICaretLeft />
              <DrawerTitle className="text-body-3 font-medium text-metal-900">Settings</DrawerTitle>
            </div>
          </DrawerClose>
          <Dropdown>
            <DropdownAction asChild>
              <button>
                <IList size={20} className="text-metal-600 dark:text-metal-300" />
              </button>
            </DropdownAction>

            <DropdownContent className="flex flex-col">
              {settingsTab.map((item) => (
                <button
                  onClick={() => setActiveTab(item.id)}
                  data-state={activeTab === item.id}
                  className="rounded-[20px] px-3 py-2 text-left text-body-4 font-medium text-metal-700 data-[state=true]:bg-metal-50"
                  key={item.id}>
                  {item.title}
                </button>
              ))}
            </DropdownContent>
          </Dropdown>
        </div>
        <AccountSettingsContent activeTab={activeTab} />
        <div className="flex w-full items-center justify-between border-t border-t-metal-100 px-6 py-3">
          <DrawerClose asChild>
            <Button variant="softBg" color="secondary">
              Cancel
            </Button>
          </DrawerClose>
          <Button>Update</Button>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default AccountSettings
