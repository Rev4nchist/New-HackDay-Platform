'use client'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownItem,
  Modal,
  ModalAction,
  ModalContent,
  ModalTitle,
} from 'keep-react'
import Link from 'next/link'
import { useState } from 'react'
import { IconX, IGear, IPlusCircle, ISignOut } from '../Icons/Icons'
import AccountSettings from '../account/AccountSettings'
import SettingsContent from '../account/SettingsContent'

const UserAccountDropdown = () => {
  const [open, setOpen] = useState(false)
  return (
    <Dropdown modal={true}>
      <DropdownAction asChild>
        <Avatar className="size-9 cursor-pointer select-none lg:size-10">
          <AvatarImage src="/images/avatar/avatar-3.png" />
          <AvatarFallback>WJ</AvatarFallback>
        </Avatar>
      </DropdownAction>
      <DropdownContent
        align="end"
        className="w-[240px] space-y-0.5 rounded-xl border border-metal-100 bg-white p-3.5 shadow-2xLarge dark:border-metal-800">
        <DropdownItem className="mb-0 rounded-lg p-2.5 dark:hover:bg-metal-800/30">
          <Avatar className="size-6">
            <AvatarImage className="size-6" src="/images/avatar/avatar-3.png" />
          </Avatar>
          <p>William Jack</p>
        </DropdownItem>

        <DropdownItem className="mb-0 rounded-lg p-2.5 dark:hover:bg-metal-800/30">
          <IPlusCircle size={20} />
          <p>Add new account</p>
        </DropdownItem>

        <div className="hidden lg:block">
          <Modal showCloseIcon={false} open={open} onOpenChange={setOpen}>
            <ModalAction asChild>
              <button className="mb-0 flex w-full cursor-pointer select-none items-center gap-2 rounded-lg bg-transparent p-2.5 text-body-4 font-medium text-metal-600 outline-none transition-all duration-300 hover:bg-metal-50 focus:bg-metal-50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:text-white dark:hover:bg-metal-800/30 dark:focus:bg-metal-800">
                <IGear size={20} />
                <p>Settings</p>
              </button>
            </ModalAction>

            <ModalContent id="scroll-bar" className="max-w-[1000px] overflow-auto rounded-[20px] bg-white p-0">
              <div className="flex items-center justify-between border-b border-b-metal-100 px-6 py-4 dark:border-b-metal-800">
                <ModalTitle className="text-body-1 font-medium text-metal-900">Setting</ModalTitle>
                <button onClick={() => setOpen(false)} className="rounded-full bg-metal-50 p-2 dark:bg-metal-800">
                  <IconX className="size-4 text-metal-600 dark:text-metal-300" />
                </button>
              </div>
              <SettingsContent />
              <div className="!mt-0 flex items-center justify-between border-t border-t-metal-100 px-6 py-4 dark:border-t-metal-800">
                <Button onClick={() => setOpen(false)} color="secondary" variant="softBg">
                  Cancel
                </Button>
                <Button onClick={() => setOpen(false)}>Update</Button>
              </div>
            </ModalContent>
          </Modal>
        </div>

        <div className="block lg:hidden">
          <AccountSettings />
        </div>

        <Link
          href="/login"
          className="mb-0 flex w-full cursor-pointer select-none items-center gap-2 rounded-lg bg-transparent p-2.5 text-body-4 font-medium text-error-500 outline-none transition-all duration-300 hover:bg-error-25 focus:bg-error-25 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:text-error-500 dark:hover:bg-error-800/10 dark:focus:bg-error-800/10">
          <ISignOut size={20} />
          <span>Logout</span>
        </Link>
      </DropdownContent>
    </Dropdown>
  )
}

export default UserAccountDropdown
