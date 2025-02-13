'use client'
import { ICaretDown, IMagnifyingGlass, IPlus } from '@/components/Icons/Icons'
import UploadImage from '@/components/shared/UploadImage'
import { emojis, Icons } from '@/data/data'
import { teams } from '@/data/users'
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
  InputIcon,
  Label,
  Tabs,
  TabsContent,
  TabsItem,
  TabsList,
} from 'keep-react'
import { cn } from 'keep-react/utils'
import Image from 'next/image'
import { useState } from 'react'

const NewProjectContent = () => {
  const [selectedIcon, setSelectedIcon] = useState<number>(0)
  const [selectedEmoji, setSelectedEmoji] = useState<number>(0)

  return (
    <div className="laptop::h-[577px] grid h-[500px] w-full grid-cols-12 justify-between overflow-auto">
      <div className="col-span-12 space-y-6 px-6 py-3 lg:col-span-6 lg:border-r lg:border-dashed lg:border-r-metal-100 lg:py-5 dark:lg:border-r-metal-800">
        <form>
          <fieldset className="space-y-1">
            <Label htmlFor="name">Project name*</Label>
            <Input id="name" placeholder="Project name" type="text" />
          </fieldset>
        </form>
        <div className="space-y-4">
          <p className="text-body-4 font-medium text-metal-900 dark:text-white">Team</p>
          <div className="space-y-5">
            <div className="mt-4 space-y-6">
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
                        className="gap-1 text-body-4 font-medium text-metal-600 dark:text-metal-300">
                        {team.position} <ICaretDown size={14} className="text-metal-600 dark:text-metal-300" />
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
            <Button className="gap-1.5" variant="softBg" color="secondary">
              <IPlus /> Add team member
            </Button>
          </div>
        </div>
      </div>
      <div className="col-span-12 px-6 py-3 lg:col-span-6 lg:py-5">
        <Tabs defaultValue="1" className="w-full">
          <TabsList className="h-10 rounded-xl bg-metal-900/5 p-1.5 dark:bg-metal-800">
            <TabsItem
              value="1"
              className="h-8 data-[state=active]:bg-white dark:focus-visible:ring-metal-900 dark:focus-visible:ring-offset-0 dark:data-[state=active]:bg-metal-900 dark:data-[state=inactive]:bg-transparent">
              Upload logo
            </TabsItem>
            <TabsItem
              value="2"
              className="h-8 data-[state=active]:bg-white dark:focus-visible:ring-metal-900 dark:focus-visible:ring-offset-0 dark:data-[state=active]:bg-metal-900 dark:data-[state=inactive]:bg-transparent">
              Icon
            </TabsItem>
            <TabsItem
              value="3"
              className="h-8 data-[state=active]:bg-white dark:focus-visible:ring-metal-900 dark:focus-visible:ring-offset-0 dark:data-[state=active]:bg-metal-900 dark:data-[state=inactive]:bg-transparent">
              Emoji
            </TabsItem>
          </TabsList>
          <div className="mt-6">
            <TabsContent value="1">
              <UploadImage></UploadImage>
            </TabsContent>
            <TabsContent value="2">
              <div className="space-y-4">
                <fieldset className="relative">
                  <Input placeholder="Search icons" className="ps-11" />
                  <InputIcon>
                    <IMagnifyingGlass size={20} className="text-metal-600 dark:text-metal-300" />
                  </InputIcon>
                </fieldset>

                <div className="grid grid-cols-12 items-start justify-between gap-2.5">
                  {Icons.map(({ id, Icon }) => (
                    <button
                      data-state={selectedEmoji === id}
                      onClick={() => setSelectedEmoji(id)}
                      key={id}
                      className={cn(
                        'col-span-1 flex items-center justify-center rounded-lg border p-1 transition-all duration-300 data-[state=false]:border-metal-100 data-[state=true]:border-metal-300 data-[state=true]:bg-metal-25 data-[state=false]:text-metal-600 lg:col-span-2 lg:p-3 dark:data-[state=true]:border-metal-800 data-[state=false]:dark:border-metal-800 dark:data-[state=true]:bg-metal-800 dark:data-[state=false]:text-metal-300',
                      )}>
                      <Icon className="size-4 lg:size-6" />
                    </button>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="3">
              <div className="space-y-4">
                <fieldset className="relative">
                  <Input placeholder="Search icons" className="ps-11" />
                  <InputIcon>
                    <IMagnifyingGlass size={20} className="text-metal-600 dark:text-metal-300" />
                  </InputIcon>
                </fieldset>

                <div className="grid grid-cols-12 items-start justify-between gap-2.5">
                  {emojis.map(({ id, img }) => (
                    <button
                      data-state={selectedIcon === id}
                      onClick={() => setSelectedIcon(id)}
                      key={id}
                      className={cn(
                        'col-span-1 flex items-center justify-center rounded-lg border p-1 transition-all duration-300 data-[state=false]:border-metal-100 data-[state=true]:border-metal-300 data-[state=true]:bg-metal-25 data-[state=false]:text-metal-600 lg:col-span-2 lg:p-3 dark:data-[state=true]:border-metal-800 data-[state=false]:dark:border-metal-800 dark:data-[state=true]:bg-metal-800 dark:data-[state=false]:text-metal-300',
                      )}>
                      <Image src={img} height={24} width={24} alt="emoji" className="hidden lg:block" />
                      <Image src={img} height={16} width={16} alt="emoji" className="block lg:hidden" />
                    </button>
                  ))}
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  )
}

export default NewProjectContent
