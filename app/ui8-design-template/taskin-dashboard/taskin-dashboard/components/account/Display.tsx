import { TabActiveProps } from '@/interfaces'
import { Checkbox, Label, Select, SelectAction, SelectContent, SelectGroup, SelectItem, SelectValue } from 'keep-react'
import { FC } from 'react'

const Display: FC<TabActiveProps> = ({ activeTab }) => {
  return (
    <div data-state={activeTab === 5} className="hidden px-6 py-5 data-[state=true]:block">
      <form className="space-y-12">
        <div className="space-y-5">
          <div className="flex items-center justify-between space-x-8">
            <fieldset className="w-full">
              <Label htmlFor="theme" className="mb-2 block text-body-4 font-medium">
                Theme
              </Label>
              <Select>
                <SelectAction className="w-full">
                  <SelectValue id="theme" placeholder="Choose one" />
                </SelectAction>
                <SelectContent className="w-full dark:border-metal-800">
                  <SelectGroup>
                    <SelectItem value="manager">Sync with system settings</SelectItem>
                    <SelectItem value="executive">Dark</SelectItem>
                    <SelectItem value="Light">Light</SelectItem>
                    <SelectItem value="custom">Custom</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </fieldset>
            <fieldset className="w-full">
              <Label htmlFor="sidebar" className="mb-2 block text-body-4 font-medium">
                Sidebar & topbar color
              </Label>
              <Select>
                <SelectAction className="w-full">
                  <SelectValue id="sidebar" placeholder="Choose one" />
                </SelectAction>
                <SelectContent className="w-full dark:border-metal-800">
                  <SelectGroup>
                    <SelectItem value="primary">Primary</SelectItem>
                    <SelectItem value="secondary">Secondary</SelectItem>
                    <SelectItem value="success">Success</SelectItem>
                    <SelectItem value="warning">Warning</SelectItem>
                    <SelectItem value="error">Error</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </fieldset>
          </div>
          <div className="flex items-center justify-between space-x-8">
            <fieldset className="w-full">
              <Label htmlFor="lang" className="mb-2 block text-body-4 font-medium">
                Language
              </Label>
              <Select>
                <SelectAction className="w-full">
                  <SelectValue id="lang" placeholder="Choose one" />
                </SelectAction>
                <SelectContent className="w-full dark:border-metal-800">
                  <SelectGroup>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="bn">Bangla</SelectItem>
                    <SelectItem value="sp">Spanish</SelectItem>
                    <SelectItem value="ab">Arabic</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </fieldset>
            <fieldset className="w-full">
              <Label htmlFor="day" className="mb-2 block text-body-4 font-medium">
                First day of the week
              </Label>
              <Select>
                <SelectAction className="w-full">
                  <SelectValue id="day" placeholder="Choose one" />
                </SelectAction>
                <SelectContent className="w-full dark:border-metal-800">
                  <SelectGroup>
                    <SelectItem value="sunday">Sunday</SelectItem>
                    <SelectItem value="monday">Monday</SelectItem>
                    <SelectItem value="tuesday">Tuesday</SelectItem>
                    <SelectItem value="wednesday">Wednesday</SelectItem>
                    <SelectItem value="thursday">Thursday</SelectItem>
                    <SelectItem value="friday">Friday</SelectItem>
                    <SelectItem value="saturday">Saturday</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </fieldset>
          </div>

          <fieldset className="w-full">
            <Label htmlFor="duration" className="mb-2 block text-body-4 font-medium">
              Pop-up notification duration
            </Label>
            <Select>
              <SelectAction className="w-full">
                <SelectValue id="duration" placeholder="Choose one" />
              </SelectAction>
              <SelectContent className="w-full dark:border-metal-800">
                <SelectGroup>
                  <SelectItem defaultChecked value="15">
                    15 seconds (default)
                  </SelectItem>
                  <SelectItem value="30">30 seconds</SelectItem>
                  <SelectItem value="45">45 seconds</SelectItem>
                  <SelectItem value="60">1 minute</SelectItem>
                  <SelectItem value="90">1.5 minutes</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </fieldset>
        </div>
        <div className="space-y-4">
          <p className="text-body-4 font-medium text-metal-900 dark:text-white">Advanced options</p>
          <fieldset className="space-y-4">
            <div className="flex items-center gap-x-1.5">
              <Checkbox className="border-metal-200 dark:border-metal-500" id="numbers" />
              <Label htmlFor="numbers" className="text-body-3 font-medium text-metal-900">
                Show row numbers
              </Label>
            </div>
            <div className="flex items-center gap-x-1.5">
              <Checkbox className="border-metal-200 dark:border-metal-500" id="compact" />
              <Label htmlFor="compact" className="text-body-3 font-medium text-metal-900">
                Enable compact mode
              </Label>
            </div>
            <div className="flex items-center gap-x-1.5">
              <Checkbox className="border-metal-200 dark:border-metal-500" id="blind" />
              <Label htmlFor="blind" className="text-body-3 font-medium text-metal-900">
                Enable color blind friendly mode (protanopia and deuteranopia)
              </Label>
            </div>
            <div className="flex items-center gap-x-1.5">
              <Checkbox className="border-metal-200 dark:border-metal-500" id="occasional" defaultChecked={true} />
              <Label htmlFor="occasional" className="text-body-3 font-medium text-metal-900">
                Show occasional celebration
              </Label>
            </div>
          </fieldset>
        </div>
      </form>
    </div>
  )
}

export default Display
