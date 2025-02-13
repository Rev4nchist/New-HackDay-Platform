import MessageInbox from '@/components/dashboard/message/MessageInbox'
import MessageSidebar from '@/components/dashboard/message/MessageSidebar'
import { IMagnifyingGlass } from '@/components/Icons/Icons'
import PageHeader from '@/components/shared/PageHeader'
import SettingsDropdown from '@/components/shared/SettingsDropdown'
import { Avatar, AvatarImage, Button } from 'keep-react'

const page = () => {
  return (
    <div className="mx-auto min-h-[calc(100vh-32px)] overflow-hidden rounded-2xl bg-metal-25 dark:bg-metal-900">
      <PageHeader>
        <p className="text-body-3 font-medium text-metal-900 lg:text-body-1 dark:text-white">Message</p>
      </PageHeader>
      <div className="flex items-center justify-between border-b border-b-metal-100 px-5 py-2.5 dark:border-b-metal-800">
        <div className="flex items-center gap-2">
          <Avatar className="size-6">
            <AvatarImage className="size-6" src="/images/avatar/avatar-1.png" />
          </Avatar>
          <p className="hidden text-body-3 font-medium text-metal-900 md:block dark:text-white">Darlene Robertson</p>
        </div>
        <div className="relative z-20 flex items-center">
          <Button
            variant="link"
            color="secondary"
            size="sm"
            className="gap-1 text-metal-600 dark:text-metal-300 dark:hover:text-metal-300">
            <IMagnifyingGlass size={14} className="text-metal-600 dark:text-metal-300" />
            Search message
          </Button>
          <SettingsDropdown />
        </div>
      </div>
      <div className="grid grid-cols-12 items-start">
        <MessageInbox />
        <MessageSidebar />
      </div>
    </div>
  )
}

export default page
