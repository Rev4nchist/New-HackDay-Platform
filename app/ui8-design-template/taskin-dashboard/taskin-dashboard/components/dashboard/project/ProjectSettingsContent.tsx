'use client'
import { ICalendarBlank, ICaretDown, ICopy, IFolder, ILink, ITrash } from '@/components/Icons/Icons'
import UploadImage from '@/components/shared/UploadImage'
import { teams } from '@/data/users'
import { format } from 'date-fns'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DatePicker,
  Divider,
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownGroup,
  DropdownItem,
  Input,
  Label,
  Popover,
  PopoverAction,
  PopoverContent,
  Select,
  SelectAction,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectValue,
  Textarea,
  toast,
} from 'keep-react'
import { useState } from 'react'

const ProjectSettingsContent = () => {
  const [date, setDate] = useState<Date>()
  const [activeTab, setActiveTab] = useState<number>(1)

  const tabs = [
    { id: 1, title: 'Project details' },
    { id: 2, title: 'Team & permissions' },
    { id: 3, title: 'Others' },
  ]

  return (
    <div
      id="scroll-bar"
      className="grid h-[500px] grid-cols-12 divide-x divide-metal-100 overflow-auto laptop:h-[630px] dark:divide-metal-800">
      <div className="col-span-12 flex flex-row p-3 lg:col-span-3 lg:flex-col">
        {tabs.map((tab) => (
          <button
            onClick={() => setActiveTab(tab.id)}
            key={tab.id}
            data-active={activeTab === tab.id}
            className="h-9 w-full rounded-[20px] px-3 py-2 text-center text-body-4 font-medium text-metal-600 data-[active=true]:bg-metal-50 data-[active=true]:text-metal-600 lg:text-left dark:text-metal-300 dark:data-[active=true]:bg-metal-800 dark:data-[active=true]:text-white">
            {tab.title}
          </button>
        ))}
      </div>
      <div className="col-span-12 px-6 py-5 lg:col-span-9">
        <form
          data-active={activeTab === 1}
          className="space-y-6 data-[active=true]:block data-[active=false]:hidden lg:space-y-10">
          <div className="space-y-5">
            <div className="flex items-center justify-between gap-x-6">
              <fieldset className="w-full">
                <Label htmlFor="project-name" className="mb-2 block text-body-4 font-medium">
                  Project name
                </Label>
                <Input className="block w-full" id="project-name" type="text" placeholder="Project name" />
              </fieldset>
              <fieldset className="w-full">
                <Label htmlFor="project-team" className="mb-2 block text-body-4 font-medium">
                  Select Team
                </Label>
                <Select>
                  <SelectAction className="w-full">
                    <SelectValue placeholder="Choose one" />
                  </SelectAction>
                  <SelectContent className="w-full border dark:border dark:border-metal-800 dark:bg-metal-900">
                    <SelectGroup>
                      <SelectItem value="manager">Manager</SelectItem>
                      <SelectItem value="executive">Executive</SelectItem>
                      <SelectItem value="director">Director</SelectItem>
                      <SelectItem value="tm">Individual contributor</SelectItem>
                      <SelectItem value="swe">Software Engineer</SelectItem>
                      <SelectItem value="mm">Marketing Manager</SelectItem>
                      <SelectItem value="wd">Web Developer</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </fieldset>
            </div>
            <div className="flex items-center justify-between gap-x-6">
              <fieldset className="w-full">
                <Label htmlFor="deadline" className="mb-2 block text-body-4 font-medium">
                  Deadline
                </Label>
                <Popover>
                  <PopoverAction asChild>
                    <Button
                      color="secondary"
                      size="lg"
                      className="w-full justify-between gap-2.5 border border-metal-100 text-body-4"
                      variant="outline">
                      {date ? format(date ?? new Date(), 'PPP') : <span>Select Your Date</span>}

                      <ICalendarBlank size={16} className="text-metal-600 dark:text-metal-300" />
                    </Button>
                  </PopoverAction>
                  <PopoverContent align="start" className="max-w-min border-0">
                    <DatePicker mode="single" selected={date} onSelect={setDate} showOutsideDays={true} />
                  </PopoverContent>
                </Popover>
              </fieldset>
              <fieldset className="w-full">
                <p className="mb-2 block cursor-pointer select-none text-body-4 font-medium text-metal-600 dark:text-metal-300">
                  Project owner
                </p>
                <div className="flex items-center gap-2.5 rounded-lg border border-metal-100 bg-metal-25 px-2 py-2.5 dark:border-metal-800 dark:bg-metal-800">
                  <Avatar className="size-6">
                    <AvatarImage src="/images/avatar/avatar-1.png" />
                    <AvatarFallback>Z</AvatarFallback>
                  </Avatar>
                  <p className="text-body-4 font-medium text-metal-600 dark:text-metal-300">Zakir Hossen</p>
                </div>
              </fieldset>
            </div>
          </div>
          <UploadImage />
          <div>
            <fieldset>
              <Label htmlFor="description" className="mb-2 block text-body-4 font-medium">
                Project description
              </Label>
              <Textarea id="description" placeholder="Write about project" rows={6} />
            </fieldset>
          </div>
        </form>
        <div data-active={activeTab === 2} className="data-[active=true]:block data-[active=false]:hidden">
          <p className="text-body-3 font-medium text-metal-900 dark:text-white">Team members</p>
          <div className="mt-4 space-y-6">
            {teams.map((team) => (
              <div key={team.id} className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={team.img} />
                  </Avatar>
                  <div>
                    <p className="text-body-4 font-medium text-metal-600 dark:text-white">{team.member.name}</p>
                    <p className="text-body-5 font-normal text-metal-300 dark:text-metal-300">{team.member.role}</p>
                  </div>
                </div>
                <Dropdown>
                  <DropdownAction asChild>
                    <Button
                      variant="link"
                      color="secondary"
                      size="sm"
                      className="gap-1 text-body-5 font-medium dark:text-white dark:hover:text-metal-300">
                      {team.position} <ICaretDown size={14} />
                    </Button>
                  </DropdownAction>
                  <DropdownContent
                    align="end"
                    className="w-[170px] border border-metal-100 p-3.5 shadow-2xLarge dark:border-metal-800">
                    <DropdownGroup className="space-y-0.5">
                      {team.positions.map((item) => (
                        <DropdownItem
                          key={item}
                          className="mb-0 flex cursor-pointer select-none items-center gap-2 rounded-lg bg-transparent p-2.5 text-body-4 font-medium text-metal-600 outline-none transition-all duration-300 hover:bg-metal-50 focus:bg-metal-50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:text-white dark:hover:bg-metal-800/30 dark:focus:bg-metal-800">
                          {item}
                        </DropdownItem>
                      ))}
                    </DropdownGroup>
                  </DropdownContent>
                </Dropdown>
              </div>
            ))}
          </div>
          <Divider className="my-5 block" />
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-body-3 font-medium text-metal-900 dark:text-white">Add team members</p>
              <Button
                onClick={() => toast.success('Copied')}
                variant="softBg"
                color="secondary"
                size="sm"
                className="gap-1 text-body-5 font-medium">
                <ILink size={14} className="text-metal-600 dark:text-metal-300" />
                Copy project link
              </Button>
            </div>
            <div className="flex items-start gap-2">
              <Input className="flex-1" placeholder="Invite user by email" />
              <Button className="h-full">Invite</Button>
            </div>
          </div>
        </div>
        <div
          data-active={activeTab === 3}
          className="h-full flex-col justify-between data-[active=true]:flex data-[active=false]:hidden">
          <div className="space-y-8">
            <div className="space-y-2.5">
              <p className="text-body-3 font-medium text-metal-900 dark:text-white">Import</p>
              <div className="space-x-2.5">
                <Button variant="outline" color="secondary">
                  CSV
                </Button>
                <Button variant="outline" color="secondary">
                  Email
                </Button>
              </div>
            </div>
            <div className="space-y-2.5">
              <p className="text-body-3 font-medium text-metal-900 dark:text-white">Export/Print</p>
              <div className="space-x-2.5">
                <Button variant="outline" color="secondary">
                  Sync to calendar...
                </Button>
                <Button variant="outline" color="secondary">
                  CSV
                </Button>
                <Button variant="outline" color="secondary">
                  JSON
                </Button>
                <Button variant="outline" color="secondary">
                  Print
                </Button>
              </div>
            </div>
            <div className="space-y-2.5">
              <p className="text-body-3 font-medium text-metal-900 dark:text-white">Others</p>
              <div className="space-x-2.5">
                <Button variant="outline" color="secondary" className="gap-1">
                  <ILink size={18} className="text-metal-600 dark:text-metal-300" /> Copy project link
                </Button>
                <Button variant="outline" color="secondary" className="gap-1">
                  <ICopy size={18} className="text-metal-600 dark:text-metal-300" />
                  Duplicate
                </Button>
                <Button variant="outline" color="secondary" className="gap-1">
                  <IFolder size={18} className="text-metal-600 dark:text-metal-300" />
                  Archive
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <Button color="error" variant="outline" className="gap-1">
              <ITrash size={18} />
              Delete this project
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectSettingsContent
