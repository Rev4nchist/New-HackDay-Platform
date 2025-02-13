'use client'
import { IconX, IPlus } from '@/components/Icons/Icons'
import { Button, Modal, ModalAction, ModalContent, ModalTitle } from 'keep-react'
import { useState } from 'react'
import NewProjectContent from './NewProjectContent'

const NewProject = () => {
  const [open, setOpen] = useState(false)
  return (
    <Modal showCloseIcon={false} open={open} onOpenChange={setOpen}>
      <ModalAction asChild>
        <Button radius="full" className="hidden gap-1 pr-6 lg:flex">
          <IPlus className="size-5 text-white" />
          New Project
        </Button>
      </ModalAction>
      <ModalAction asChild>
        <Button radius="full" className="flex gap-1 pr-5 lg:hidden" size="sm">
          <IPlus className="size-4 text-white" />
          New Project
        </Button>
      </ModalAction>
      <ModalContent className="flex w-full max-w-[809px] flex-col items-start justify-between overflow-auto rounded-2xl p-0">
        <div className="flex w-full items-center justify-between border-b border-b-metal-100 px-6 py-4 dark:border-b-metal-800">
          <ModalTitle className="text-body-1 font-medium text-metal-900">New Project</ModalTitle>
          <button onClick={() => setOpen(false)} className="rounded-full bg-metal-50 p-2 dark:bg-metal-800">
            <IconX className="size-4 text-metal-600 dark:text-metal-300" />
          </button>
        </div>
        <NewProjectContent />
        <div className="flex w-full items-center justify-between border-t border-t-metal-100 px-6 py-3 dark:border-t-metal-800">
          <Button onClick={() => setOpen(false)} variant="softBg" color="secondary">
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)}>Update</Button>
        </div>
      </ModalContent>
    </Modal>
  )
}

export default NewProject
