'use client'
import { TabActiveProps } from '@/interfaces'
import { Label, Switch } from 'keep-react'
import Link from 'next/link'
import { FC, useState } from 'react'
type SwitchId = 'sv1' | 'sv2' | 'sv3' | 'sv4'

const Hacks: FC<TabActiveProps> = ({ activeTab }) => {
  const [switchStates, setSwitchStates] = useState({
    sv1: true,
    sv2: false,
    sv3: false,
    sv4: true,
  })

  const handleSwitchChange = (id: SwitchId) => {
    setSwitchStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }))
  }
  return (
    <div data-state={activeTab === 7} className="hidden space-y-8 p-6 data-[state=true]:block">
      <p className="text-body-3 font-medium text-metal-900 dark:text-white">
        Hacks are experimental features that we’ve been tinkering with. They are not supported features and may change,
        break, or disappear at any time.
      </p>

      <div className="space-y-5">
        <div className="flex items-start gap-x-3">
          <Switch id="sv1" checked={switchStates.sv1} onCheckedChange={() => handleSwitchChange('sv1')} />
          <div className="-mt-1 space-y-0.5">
            <Label
              htmlFor="sv1"
              data-state={switchStates.sv1}
              className="text-body-4 font-medium text-metal-600 data-[state=true]:text-metal-900 dark:data-[state=true]:text-white">
              Extra delight
            </Label>
            <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
              Adds additional celebrations and delightful surprises to the product experience.{' '}
              <Link href="#" className="text-primary-500">
                Share feedback
              </Link>
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-3">
          <Switch id="sv2" checked={switchStates.sv2} onCheckedChange={() => handleSwitchChange('sv2')} />
          <div className="-mt-1 space-y-0.5">
            <Label
              htmlFor="sv2"
              data-state={switchStates.sv2}
              className="text-body-4 font-medium text-metal-600 data-[state=true]:text-metal-900 dark:data-[state=true]:text-white">
              Recurring tasks in the last section of My tasks
            </Label>
            <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
              Makes recurring tasks always reappear in the last section of My tasks when you complete them instead of
              the default column.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-3">
          <Switch id="sv3" checked={switchStates.sv3} onCheckedChange={() => handleSwitchChange('sv3')} />
          <div className="-mt-1 space-y-0.5">
            <Label
              htmlFor="sv3"
              data-state={switchStates.sv3}
              className="text-body-4 font-medium text-metal-600 data-[state=true]:text-metal-900 dark:data-[state=true]:text-white">
              Disable notifications for tasks starting & due today
            </Label>
            <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
              Stop receiving notifications in your inbox for tasks starting or due today.{' '}
              <Link href="#" className="text-primary-500">
                Share feedback
              </Link>
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-3">
          <Switch id="sv4" checked={switchStates.sv4} onCheckedChange={() => handleSwitchChange('sv4')} />
          <div className="-mt-1 space-y-0.5">
            <Label
              htmlFor="sv4"
              data-state={switchStates.sv4}
              className="text-body-4 font-medium text-metal-600 data-[state=true]:text-metal-900 dark:data-[state=true]:text-white">
              Show homepage on the web
            </Label>
            <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
              Displays homepage instead of the web app when you visit from a desktop browser.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hacks
