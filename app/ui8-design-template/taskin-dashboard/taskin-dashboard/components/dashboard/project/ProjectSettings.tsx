'use client'
import { IconX, IGear } from '@/components/Icons/Icons'
import { Button, Modal, ModalAction, ModalContent, ModalTitle } from 'keep-react'
import { useState } from 'react'
import ProjectSettingsContent from './ProjectSettingsContent'

const ProjectSettings = () => {
  const [open, setOpen] = useState(false)
  return (
    <Modal showCloseIcon={false} open={open} onOpenChange={setOpen}>
      <ModalAction asChild>
        <Button variant="link" color="secondary" size="sm" className="gap-0.5">
          <IGear className="size-5 text-metal-600 laptop:size-4 dark:text-metal-300" />
          <span className="hidden text-metal-600 laptop:block dark:text-metal-300">Settings</span>
        </Button>
      </ModalAction>
      <ModalContent className="w-full max-w-[800px] space-y-0 rounded-[20px] bg-white p-0 dark:bg-metal-900">
        <div className="flex items-center justify-between border-b border-b-metal-100 px-6 py-4 dark:border-b-metal-800">
          <ModalTitle className="text-body-1 font-medium text-metal-900">Project setting</ModalTitle>
          <button onClick={() => setOpen(false)} className="rounded-full bg-metal-50 p-2 dark:bg-metal-800">
            <IconX className="size-4 text-metal-600 dark:text-metal-300" />
          </button>
        </div>
        <ProjectSettingsContent />
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

export default ProjectSettings
