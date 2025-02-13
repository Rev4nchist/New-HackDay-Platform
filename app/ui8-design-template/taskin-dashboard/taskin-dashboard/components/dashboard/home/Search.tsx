'use client'
import {
  IArrowRight,
  ICheckCircle,
  IClipboardText,
  ICommand,
  IKeyReturn,
  IMagnifyingGlass,
  IUser,
} from '@/components/Icons/Icons'
import {
  Avatar,
  AvatarGroup,
  AvatarImage,
  Badge,
  Button,
  Divider,
  Input,
  InputIcon,
  Modal,
  ModalAction,
  ModalContent,
  Tabs,
  TabsContent,
  TabsItem,
  TabsList,
} from 'keep-react'
import Image from 'next/image'
import { FC, ReactNode, useEffect, useState } from 'react'

interface Props {
  children?: ReactNode
}

const Search: FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return
        }

        e.preventDefault()
        setOpen && setOpen((open) => !open)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <Modal open={open} onOpenChange={setOpen} showCloseIcon={false}>
      <ModalAction asChild>
        {children ?? (
          <button className="flex h-9 items-center justify-between rounded-full px-3 py-2 text-body-4 font-medium text-metal-600 transition-all duration-300 hover:bg-white dark:text-metal-300 dark:hover:bg-[#D9E9FF12]">
            <span className="flex items-center gap-3">
              <IMagnifyingGlass size={20} />
              Search
            </span>
            <span className="flex items-center rounded-full bg-metal-25 px-1.5 py-0.5 text-body-5 font-normal text-metal-300 dark:bg-metal-800">
              <ICommand className="size-3.5" />K
            </span>
          </button>
        )}
      </ModalAction>
      <ModalContent className="max-w-[765px] space-y-4 bg-transparent dark:bg-transparent">
        <fieldset className="relative max-w-full">
          <Input placeholder="Search here" className="rounded-xl ps-11" />
          <InputIcon className="flex justify-between">
            <IMagnifyingGlass size={19} color="#AFBACA" />
          </InputIcon>
        </fieldset>

        <div className="space-y-3 rounded-2xl bg-white p-3 dark:bg-metal-900">
          <Tabs defaultValue="1">
            <TabsList className="rounded-2xl bg-metal-25 p-1.5 dark:bg-metal-800">
              <TabsItem
                value="1"
                className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md dark:data-[state=active]:bg-metal-900">
                <ICheckCircle size={20} />
                Tasks
              </TabsItem>
              <TabsItem
                value="2"
                className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md dark:data-[state=active]:bg-metal-900">
                <IClipboardText size={20} />
                Projects
              </TabsItem>
              <TabsItem
                value="3"
                className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md dark:data-[state=active]:bg-metal-900">
                <IUser size={20} />
                People
              </TabsItem>
            </TabsList>
            <TabsContent value="1" className="h-[350px] p-4">
              <div className="flex items-start gap-2">
                <div className="flex size-7 items-center justify-center rounded-full bg-metal-25 dark:bg-metal-800">
                  <Image src="/images/emoji/briefcase.svg" height={18} width={18} alt="briefcase" />
                </div>
                <div className="space-y-2">
                  <p className="text-body-4 font-medium text-metal-600 lg:text-body-3 dark:text-white">
                    Create Wireframes - User Profile Page
                  </p>
                  <Badge color="secondary" variant="border">
                    <Image src="/images/logo/figma.svg" height={12} width={12} alt="figma" />
                    Figma Design System
                  </Badge>
                </div>
              </div>
              <Divider className="my-4 block" />
              <div className="flex items-start gap-2">
                <div className="flex size-7 items-center justify-center rounded-full bg-metal-25 dark:bg-metal-800">
                  <Image src="/images/emoji/pencil.svg" height={18} width={18} alt="pencil" />
                </div>
                <div className="space-y-2">
                  <p className="text-body-4 font-medium text-metal-600 lg:text-body-3 dark:text-white">
                    Account Dashboard Wireframe
                  </p>
                  <Badge color="secondary" variant="border">
                    <Image src="/images/logo/figma.svg" height={12} width={12} alt="figma" />
                    Figma Design System
                  </Badge>
                </div>
              </div>
              <Divider className="my-4 block" />
              <div className="flex items-start gap-2">
                <div className="flex size-7 items-center justify-center rounded-full bg-metal-25 dark:bg-metal-800">
                  <Image src="/images/emoji/waning-crescent-moon.svg" height={18} width={18} alt="pencil" />
                </div>
                <div className="space-y-2">
                  <p className="text-body-4 font-medium text-metal-600 lg:text-body-3 dark:text-white">
                    Implement Dark Mode - Mobile Application
                  </p>
                  <Badge color="secondary" variant="border">
                    <Image src="/images/logo/figma.svg" height={12} width={12} alt="figma" />
                    Figma Design System
                  </Badge>
                </div>
              </div>
              <Divider className="my-4 block" />
              <div className="flex items-start gap-2">
                <div className="flex size-7 items-center justify-center rounded-full bg-metal-25 dark:bg-metal-800">
                  <Image src="/images/emoji/pencil.svg" height={18} width={18} alt="pencil" />
                </div>
                <div className="space-y-2">
                  <p className="text-body-4 font-medium text-metal-600 lg:text-body-3 dark:text-white">
                    Create Wireframes - User Profile Page
                  </p>
                  <Badge color="secondary" variant="border">
                    <Image src="/images/logo/figma.svg" height={12} width={12} alt="figma" />
                    Figma Design System
                  </Badge>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="2" className="h-[350px] p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex size-7 items-center justify-center rounded-full bg-metal-25 dark:bg-metal-800">
                    <Image src="/images/logo/figma.svg" height={18} width={18} alt="figma" />
                  </div>
                  <p className="text-body-4 font-medium text-metal-600 lg:text-body-3 dark:text-white">
                    Figma Design System{' '}
                  </p>
                </div>
                <div>
                  <AvatarGroup>
                    <Avatar className="size-6">
                      <AvatarImage className="size-6" src="/images/avatar/avatar-1.png" />
                    </Avatar>
                    <Avatar className="size-6">
                      <AvatarImage className="size-6" src="/images/avatar/avatar-2.png" />
                    </Avatar>
                    <Avatar className="size-6">
                      <AvatarImage className="size-6" src="/images/avatar/avatar-3.png" />
                    </Avatar>
                    <Avatar className="size-6">
                      <AvatarImage className="size-6" src="/images/avatar/avatar-4.png" />
                    </Avatar>
                  </AvatarGroup>
                </div>
              </div>
              <Divider className="my-4 block" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex size-7 items-center justify-center rounded-full bg-metal-25 dark:bg-metal-800">
                    <Image src="/images/logo/react.svg" height={18} width={18} alt="react" />
                  </div>
                  <p className="text-body-4 font-medium text-metal-600 lg:text-body-3 dark:text-white">Keep React</p>
                </div>
                <div>
                  <AvatarGroup>
                    <Avatar className="size-6">
                      <AvatarImage className="size-6" src="/images/avatar/avatar-1.png" />
                    </Avatar>
                    <Avatar className="size-6">
                      <AvatarImage className="size-6" src="/images/avatar/avatar-2.png" />
                    </Avatar>
                    <Avatar className="size-6">
                      <AvatarImage className="size-6" src="/images/avatar/avatar-3.png" />
                    </Avatar>
                    <Avatar className="size-6">
                      <AvatarImage className="size-6" src="/images/avatar/avatar-4.png" />
                    </Avatar>
                    <Avatar className="size-6">
                      <AvatarImage className="size-6" src="/images/avatar/avatar-5.png" />
                    </Avatar>
                  </AvatarGroup>
                </div>
              </div>
              <Divider className="my-4 block" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex size-7 items-center justify-center rounded-full bg-metal-25 dark:bg-metal-800">
                    <Image src="/images/logo/staticmania.svg" height={18} width={18} alt="figma" />
                  </div>
                  <p className="text-body-4 font-medium text-metal-600 lg:text-body-3 dark:text-white">Static Mania</p>
                </div>
                <div>
                  <AvatarGroup>
                    <Avatar className="size-6">
                      <AvatarImage className="size-6" src="/images/avatar/avatar-1.png" />
                    </Avatar>
                    <Avatar className="size-6">
                      <AvatarImage className="size-6" src="/images/avatar/avatar-2.png" />
                    </Avatar>
                    <Avatar className="size-6">
                      <AvatarImage className="size-6" src="/images/avatar/avatar-3.png" />
                    </Avatar>
                    <Avatar className="size-6">
                      <AvatarImage className="size-6" src="/images/avatar/avatar-4.png" />
                    </Avatar>
                  </AvatarGroup>
                </div>
              </div>
              <Divider className="my-4 block" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex size-7 items-center justify-center rounded-full bg-metal-25 dark:bg-metal-800">
                    <Image src="/images/logo/roundbe-web.svg" height={18} width={18} alt="figma" />
                  </div>
                  <p className="text-body-4 font-medium text-metal-600 lg:text-body-3 dark:text-white">
                    Redesign badoo wesite
                  </p>
                </div>
                <div>
                  <AvatarGroup>
                    <Avatar className="size-6">
                      <AvatarImage className="size-6" src="/images/avatar/avatar-1.png" />
                    </Avatar>
                    <Avatar className="size-6">
                      <AvatarImage className="size-6" src="/images/avatar/avatar-2.png" />
                    </Avatar>
                    <Avatar className="size-6">
                      <AvatarImage className="size-6" src="/images/avatar/avatar-3.png" />
                    </Avatar>
                    <Avatar className="size-6">
                      <AvatarImage className="size-6" src="/images/avatar/avatar-4.png" />
                    </Avatar>
                    <Avatar className="size-6">
                      <AvatarImage className="size-6" src="/images/avatar/avatar-5.png" />
                    </Avatar>
                  </AvatarGroup>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="3" className="h-[350px] p-4">
              <div className="flex items-start gap-2">
                <Avatar className="size-8">
                  <AvatarImage className="size-8" src="/images/avatar/avatar-1.png" />
                </Avatar>
                <div className="space-y-0.5">
                  <p className="text-body-3 font-medium text-metal-900 dark:text-white">Zakir Hossen</p>
                  <p className="text-body-4 font-normal text-metal-400 dark:text-metal-300">
                    Product Designer . ronald_richa@gmail.com
                  </p>
                </div>
              </div>
              <Divider className="my-4 block" />
              <div className="flex items-start gap-2">
                <Avatar className="size-8">
                  <AvatarImage className="size-8" src="/images/avatar/avatar-2.png" />
                </Avatar>
                <div className="space-y-0.5">
                  <p className="text-body-3 font-medium text-metal-900 dark:text-white">Ronald Richards</p>
                  <p className="text-body-4 font-normal text-metal-400 dark:text-metal-300">
                    Dev. Lead . ronald_richa@gmail.com
                  </p>
                </div>
              </div>
              <Divider className="my-4 block" />
              <div className="flex items-start gap-2">
                <Avatar className="size-8">
                  <AvatarImage className="size-8" src="/images/avatar/avatar-3.png" />
                </Avatar>
                <div className="space-y-0.5">
                  <p className="text-body-3 font-medium text-metal-900 dark:text-white">Dianne Russell</p>
                  <p className="text-body-4 font-normal text-metal-400 dark:text-metal-300">
                    Project Manager . ronald_richa@gmail.com
                  </p>
                </div>
              </div>
              <Divider className="my-4 block" />
              <div className="flex items-start gap-2">
                <Avatar className="size-8">
                  <AvatarImage className="size-8" src="/images/avatar/avatar-4.png" />
                </Avatar>
                <div className="space-y-0.5">
                  <p className="text-body-3 font-medium text-metal-900 dark:text-white">Ralph Edwards</p>
                  <p className="text-body-4 font-normal text-metal-400 dark:text-metal-300">
                    Head of Design . ronald_richa@gmail.com
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          <div className="flex items-center gap-2 px-4 py-1.5">
            <Badge color="secondary" variant="border" className="gap-1">
              <IKeyReturn size={16} weight="fill" />
              Return
            </Badge>

            <Button color="secondary" variant="link" className="gap-1">
              to view all results <IArrowRight color="#AFBACA" size={16} />
            </Button>
          </div>
        </div>
      </ModalContent>
    </Modal>
  )
}

export default Search
