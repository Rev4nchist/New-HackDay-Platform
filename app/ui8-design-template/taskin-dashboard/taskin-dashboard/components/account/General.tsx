'use client'
import { Label, Switch } from 'keep-react'
import { FC, useState } from 'react'

type SwitchId = 'v1' | 'v2' | 'v3' | 'v4' | 'v5'

export interface GeneralProps {
  activeTab: number
}

const General: FC<GeneralProps> = ({ activeTab }) => {
  const [switchStates, setSwitchStates] = useState({
    v1: true,
    v2: false,
    v3: true,
    v4: true,
    v5: true,
  })

  const handleSwitchChange = (id: SwitchId) => {
    setSwitchStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }))
  }
  return (
    <div data-state={activeTab === 1} className="hidden space-y-8 px-8 py-5 data-[state=true]:block lg:space-y-12">
      <div className="space-y-4">
        <p className="text-body-4 font-medium text-metal-900 dark:text-white">About Desktop</p>
        <div>
          <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">App version: 2.1.4</p>
          <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">System: darwin 14.6.0 (arm64)</p>
        </div>
      </div>
      <div className="space-y-4">
        <p className="text-body-4 font-medium text-metal-900 dark:text-white">Global keyboard shortcuts</p>
        <div className="flex items-start gap-x-3">
          <Switch id="v1" checked={switchStates.v1} onCheckedChange={() => handleSwitchChange('v1')} />
          <div className="-mt-1.5 space-y-0.5">
            <Label
              htmlFor="v1"
              data-state={switchStates.v1}
              className="text-body-4 font-medium text-metal-600 data-[state=true]:text-metal-900 dark:text-metal-300 dark:data-[state=true]:text-white">
              Enable global keyboard shortcuts
            </Label>
            <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
              Create a task from anywhere with
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <p className="text-body-4 font-medium text-metal-900 dark:text-white">Tray app settings</p>
        <div className="flex items-start gap-x-3">
          <Switch
            id="v2"
            defaultChecked={false}
            checked={switchStates.v2}
            onCheckedChange={() => handleSwitchChange('v2')}
          />
          <div className="-mt-1.5 space-y-0.5">
            <Label
              htmlFor="v2"
              data-state={switchStates.v2}
              className="text-body-4 font-medium text-metal-600 data-[state=true]:text-metal-900 dark:text-metal-300 dark:data-[state=true]:text-white">
              Enable app icon
            </Label>
            <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
              Show the icon in the menu bar (you must restart for changes to take effect)
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <p className="text-body-4 font-medium text-metal-900 dark:text-white">Pomodoro Timer</p>
        <div className="flex items-start gap-x-3">
          <Switch id="v3" checked={switchStates.v3} onCheckedChange={() => handleSwitchChange('v3')} />
          <div className="-mt-1.5 space-y-0.5">
            <Label
              htmlFor="v3"
              data-state={switchStates.v3}
              className="text-body-4 font-medium text-metal-600 data-[state=true]:text-metal-900 dark:text-metal-300 dark:data-[state=true]:text-white">
              Enable persistent pomodoro Ul
            </Label>
            <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
              Keep a floating desktop reminder of your pomodoro session
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-3">
          <Switch id="v4" checked={switchStates.v4} onCheckedChange={() => handleSwitchChange('v4')} />
          <div className="-mt-1.5 space-y-0.5">
            <Label
              htmlFor="v4"
              data-state={switchStates.v4}
              className="text-body-4 font-medium text-metal-600 data-[state=true]:text-metal-900 dark:text-metal-300 dark:data-[state=true]:text-white">
              Pause notifications
            </Label>
            <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
              Pomodoro sessions pause notifications by default
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-3">
          <Switch id="v5" checked={switchStates.v5} onCheckedChange={() => handleSwitchChange('v5')} />
          <div className="-mt-1.5 space-y-0.5">
            <Label
              htmlFor="v5"
              data-state={switchStates.v5}
              className="text-body-4 font-medium text-metal-600 data-[state=true]:text-metal-900 dark:text-metal-300 dark:data-[state=true]:text-white">
              Play sound
            </Label>
            <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
              Play a sound upon timer completion
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default General
