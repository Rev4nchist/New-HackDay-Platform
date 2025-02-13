'use client'
import { ICaretDown, ICaretRight, IPlus } from '@/components/Icons/Icons'
import { teams } from '@/data/users'
import { TabActiveProps } from '@/interfaces'
import {
  Avatar,
  AvatarImage,
  Button,
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownGroup,
  DropdownItem,
  Input,
  Label,
} from 'keep-react'
import Image from 'next/image'
import { FC, useState } from 'react'

const Company: FC<TabActiveProps> = ({ activeTab }) => {
  const [activeProject, setActiveProject] = useState(1)
  const projects = [
    { id: 1, title: 'Static Mania', img: '/images/logo/star-blow.svg' },
    { id: 2, title: 'Cuberlon', img: '/images/logo/crossbin.svg' },
    { id: 3, title: 'Dronneed', img: '/images/logo/dronneed.svg' },
    { id: 4, title: 'Rounden', img: '/images/logo/rounden.svg' },
  ]
  return (
    <div data-state={activeTab === 4} className="hidden h-[calc(100vh-120px)] data-[state=true]:block lg:h-full">
      <div className="grid h-full grid-cols-12 items-start divide-x divide-metal-100 dark:divide-metal-800">
        <div className="col-span-12 space-y-6 p-6 lg:col-span-4">
          <div className="space-y-1">
            <p className="text-body-4 font-medium text-metal-900 dark:text-white">Owner</p>
            <div className="space-y-1">
              {projects.slice(0, 2).map((project) => (
                <button
                  data-state={project.id === activeProject}
                  onClick={() => setActiveProject(project.id)}
                  key={project.id}
                  className="flex !w-full items-center justify-between rounded-[20px] px-3 py-2 data-[state=true]:bg-metal-50 dark:data-[state=true]:bg-metal-800">
                  <div className="flex items-center gap-2.5">
                    <Image src={project.img} alt={project.title} height={18} width={18} />
                    {project.title}
                  </div>
                  <ICaretRight size={16} className="text-metal-600 dark:text-metal-300" />
                </button>
              ))}

              <Button variant="softBg" color="secondary" className="w-full gap-x-1">
                <IPlus /> Add new account
              </Button>
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-body-4 font-medium text-metal-900 dark:text-white">Invited</p>
            <div className="space-y-1">
              {projects.slice(2).map((project) => (
                <button
                  data-state={project.id === activeProject}
                  onClick={() => setActiveProject(project.id)}
                  key={project.id}
                  className="flex !w-full items-center justify-between rounded-[20px] px-3 py-2 data-[state=true]:bg-metal-50 dark:data-[state=true]:bg-metal-800">
                  <div className="flex items-center gap-2.5">
                    <Image src={project.img} alt={project.title} height={18} width={18} />
                    {project.title}
                  </div>
                  <ICaretRight size={16} className="text-metal-600 dark:text-metal-300" />
                </button>
              ))}
            </div>
          </div>
        </div>
        <div id="scroll-bar" className="col-span-12 space-y-6 overflow-auto px-8 py-6 lg:col-span-8">
          <div className="space-y-4">
            <p className="text-body-4 font-medium text-metal-600 dark:text-metal-300">Profile photo</p>
            <div className="flex items-start gap-4">
              <div className="flex size-14 items-center justify-center rounded-full bg-metal-50 dark:bg-metal-800">
                <Image src="/images/logo/star-blow.svg" alt="profile" height={32} width={32} />
              </div>
              <div>
                <p className="text-body-3 font-medium text-metal-600 dark:text-metal-300">Upload project logo</p>
                <p className="pb-3 pt-1 text-body-4 font-normal text-metal-300 dark:text-metal-600">
                  Min 600x600, PNG or JPEG
                </p>
                <Button color="secondary" variant="outline">
                  Update
                </Button>
              </div>
            </div>
          </div>
          <form>
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-x-4">
                <fieldset className="w-full">
                  <Label htmlFor="cName" className="mb-2 block text-body-4 font-medium">
                    Company Name
                  </Label>
                  <Input className="block w-full" id="cName" type="text" placeholder="Company Name" />
                </fieldset>
                <fieldset className="w-full">
                  <Label htmlFor="username" className="mb-2 block text-body-4 font-medium">
                    User Name
                  </Label>
                  <Input className="block w-full" id="username" type="text" placeholder="@username" />
                </fieldset>
              </div>
              <div className="flex items-center justify-between gap-x-6">
                <fieldset className="w-full">
                  <Label htmlFor="emailAddress" className="mb-2 block text-body-4 font-medium">
                    Company Email Address
                  </Label>
                  <Input className="block w-full" id="emailAddress" type="email" placeholder="staticmania@email.com" />
                </fieldset>
                <fieldset className="w-full">
                  <Label htmlFor="Website" className="mb-2 block text-body-4 font-medium">
                    Website
                  </Label>
                  <Input className="block w-full" id="Website" type="text" placeholder="https://staticmania.com" />
                </fieldset>
              </div>
            </div>
          </form>
          <div className="space-y-3">
            <p className="text-body-3 font-medium text-metal-900 dark:text-white">Invite team members</p>
            <div className="flex items-stretch gap-3">
              <Input placeholder="Invite user by email" type="email" />
              <Button className="h-full">Send Invite</Button>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-body-3 font-medium text-metal-900 dark:text-white">Member</p>
            {teams.slice(0, 3).map((team) => (
              <div key={team.id} className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={team.img} />
                  </Avatar>
                  <div>
                    <p className="text-body-4 font-medium text-metal-600 dark:text-metal-300">{team.member.name}</p>
                    <p className="text-body-5 font-normal text-metal-300 dark:text-metal-600">{team.member.role}</p>
                  </div>
                </div>
                <Dropdown>
                  <DropdownAction asChild>
                    <Button
                      variant="link"
                      color="secondary"
                      size="sm"
                      className="gap-1 text-body-4 font-medium dark:text-metal-300 dark:hover:text-metal-300">
                      {team.position} <ICaretDown size={14} />
                    </Button>
                  </DropdownAction>
                  <DropdownContent
                    align="end"
                    className="w-[170px] border border-metal-100 p-3.5 shadow-2xLarge dark:border-metal-800">
                    <DropdownGroup className="space-y-0.5">
                      {team.positions.map((item, index) => (
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
        </div>
      </div>
    </div>
  )
}

export default Company
