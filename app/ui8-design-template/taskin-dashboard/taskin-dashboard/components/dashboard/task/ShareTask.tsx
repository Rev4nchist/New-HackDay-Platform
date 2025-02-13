'use client'
import { ICaretDown, IChatCentered, IconX, ICopy, IEye, IGlobe, IPen, ITrash } from '@/components/Icons/Icons'
import { teams } from '@/data/users'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Divider,
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownGroup,
  Input,
  Modal,
  ModalContent,
  ModalDescription,
  ModalTitle,
  Switch,
  toast,
} from 'keep-react'
import { FC } from 'react'

interface ShareTaskProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const ShareTask: FC<ShareTaskProps> = ({ open, onOpenChange }) => {
  return (
    <Modal open={open} onOpenChange={onOpenChange} showCloseIcon={false}>
      <ModalContent className="max-w-[460px] space-y-0 rounded-xl p-0">
        <button
          className="absolute right-4 top-4 rounded-full bg-metal-50 p-1.5 dark:bg-metal-800"
          onClick={() => onOpenChange(false)}>
          <IconX className="size-5 text-metal-600 dark:text-metal-300" />
        </button>
        <div className="space-y-1 px-4 py-5">
          <ModalTitle className="text-body-1 font-medium text-metal-900 dark:text-white">Share Project</ModalTitle>
          <ModalDescription className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
            Invite your team and collaborate on your project.
          </ModalDescription>
        </div>
        <Divider />
        <div className="space-y-3 px-4 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              <div className="flex size-12 items-center justify-center rounded-full bg-metal-50 dark:bg-metal-800">
                <IGlobe size={24} className="text-metal-600 dark:text-metal-300" />
              </div>
              <div className="space-y-0.5">
                <p className="text-body-3 font-medium text-metal-900 dark:text-white">Public access</p>
                <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
                  Anyone with the link can view
                </p>
              </div>
            </div>
            <Switch defaultChecked={true} />
          </div>
          <div className="flex items-center gap-x-3">
            <Input placeholder="app.atlas.com/projects/website" />
            <Button
              onClick={() => toast.success('Copied')}
              color="secondary"
              variant="outline"
              className="h-full gap-x-1 border-metal-200">
              <ICopy className="text-metal-600 dark:text-metal-300" size={18} /> Copy Link
            </Button>
          </div>
        </div>
        <Divider />
        <div className="space-y-3 px-4 py-5">
          <div className="space-y-3">
            <p className="text-body-3 font-medium text-metal-900 dark:text-white">Invite team members</p>
            <div className="flex items-center gap-x-3">
              <Input placeholder="Invite user by email" />
              <Button className="h-full">Send Invite</Button>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-body-3 font-medium text-metal-900 dark:text-white">Member</p>
            {teams.slice(0, 3).map((team) => (
              <div key={team.id} className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <Avatar className="size-8">
                    <AvatarImage src={team.img} />
                    <AvatarFallback>{team.member.name.slice(0, 1).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-body-4 font-medium text-metal-900 dark:text-white">{team.member.name}</p>
                    <p className="text-body-5 font-normal text-metal-600 dark:text-metal-300">{team.member.role}</p>
                  </div>
                </div>
                <Dropdown>
                  <DropdownAction asChild>
                    <button className="flex items-center gap-1 text-body-4 font-medium text-metal-600 dark:text-metal-300 dark:hover:text-metal-400">
                      {team.position} <ICaretDown size={14} />
                    </button>
                  </DropdownAction>
                  <DropdownContent
                    align="end"
                    className="w-[324px] border border-metal-100 p-0 shadow-2xLarge dark:border-metal-800">
                    <DropdownGroup className="divide-y-[1px] divide-metal-50 px-2 py-3 dark:divide-metal-800">
                      <div className="flex items-start gap-x-2 px-4 py-3">
                        <div>
                          <IPen className="text-metal-600 dark:text-white" size={24} />
                        </div>
                        <div className="-mt-0.5 space-y-1.5">
                          <p className="text-body-3 font-medium text-metal-600 dark:text-white">Editor</p>
                          <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
                            Can add, edit, and delete anything in the project.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-x-2 px-4 py-3">
                        <div>
                          <IChatCentered className="text-metal-600 dark:text-white" size={24} />
                        </div>
                        <div className="-mt-0.5 space-y-1.5">
                          <p className="text-body-3 font-medium text-metal-600 dark:text-white">Commenter</p>
                          <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
                            Can comment, but can't edit anything in the project.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-x-2 px-4 py-3">
                        <div>
                          <IEye className="text-metal-600 dark:text-white" size={24} />
                        </div>
                        <div className="-mt-0.5 space-y-1.5">
                          <p className="text-body-3 font-medium text-metal-600 dark:text-white">Viewer</p>
                          <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
                            Can view, but can't add comments or edit the project.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-x-2 px-4 py-3">
                        <div>
                          <ITrash color="#FF3838" size={24} />
                        </div>
                        <div className="-mt-0.5 space-y-1.5">
                          <p className="text-body-3 font-medium text-error-500">Remove</p>
                          <p className="text-body-4 font-normal text-error-500">Remove from project</p>
                        </div>
                      </div>
                    </DropdownGroup>
                  </DropdownContent>
                </Dropdown>
              </div>
            ))}
          </div>
        </div>
      </ModalContent>
    </Modal>
  )
}

export default ShareTask
