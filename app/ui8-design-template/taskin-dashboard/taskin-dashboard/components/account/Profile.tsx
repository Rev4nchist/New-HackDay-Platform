import { IMapPinLine } from '@/components/Icons/Icons'
import { TabActiveProps } from '@/interfaces'
import { Avatar, AvatarImage, Button, Input, InputIcon, Label, Switch, Textarea } from 'keep-react'
import Image from 'next/image'
import { FC } from 'react'

const Profile: FC<TabActiveProps> = ({ activeTab }) => {
  return (
    <div data-state={activeTab === 2} className="hidden space-y-3 px-8 py-5 data-[state=true]:block lg:space-y-12">
      <div className="space-y-3 lg:space-y-4">
        <p className="text-body-4 font-medium text-metal-600 dark:text-metal-300">Profile photo</p>
        <div className="flex items-start gap-4">
          <div>
            <Avatar className="size-9">
              <AvatarImage className="size-9" src="/images/avatar/avatar-3.png" />
            </Avatar>
          </div>
          <div className="flex items-center gap-x-5">
            <div>
              <p className="text-body-4 font-medium text-metal-600 dark:text-metal-300">Upload project logo</p>
              <p className="pb-3 pt-1 text-body-5 font-normal text-metal-300 dark:text-metal-600">
                Min 600x600, PNG or JPEG
              </p>
            </div>
            <Button color="secondary" variant="outline">
              Update
            </Button>
          </div>
        </div>
      </div>
      <form className="space-y-3 lg:space-y-12">
        <div className="space-y-3 lg:space-y-5">
          <div className="flex items-center justify-between gap-x-6">
            <fieldset className="w-full">
              <Label htmlFor="fName" className="mb-2 block text-body-4 font-medium">
                Your full name*
              </Label>
              <Input className="block w-full" id="fName" type="text" placeholder="Name" />
            </fieldset>
            <fieldset className="w-full">
              <Label htmlFor="title" className="mb-2 block text-body-4 font-medium">
                Title*
              </Label>
              <Input className="block w-full" id="title" type="text" placeholder="Title" />
            </fieldset>
          </div>
          <div className="flex items-center justify-between gap-x-6">
            <fieldset className="w-full">
              <Label htmlFor="phNumber" className="mb-2 block text-body-4 font-medium">
                Phone Number
              </Label>
              <Input className="block w-full" id="phNumber" type="text" placeholder="(316) 000-000" />
            </fieldset>
            <fieldset className="w-full">
              <Label htmlFor="email" className="mb-2 block text-body-4 font-medium">
                Email
              </Label>
              <Input className="block w-full" id="email" type="email" placeholder="example@email.com" />
            </fieldset>
          </div>
          <div className="flex items-center justify-between">
            <fieldset className="w-full">
              <Label htmlFor="address" className="mb-2 block text-body-4 font-medium">
                Address
              </Label>
              <div className="relative">
                <Input className="block w-full ps-11" id="address" type="text" placeholder="Your address" />
                <InputIcon>
                  <IMapPinLine className="text-metal-600 dark:text-metal-300" size={20} />
                </InputIcon>
              </div>
            </fieldset>
          </div>
        </div>
        <div>
          <fieldset className="w-full">
            <Label htmlFor="about" className="mb-2 block text-body-4 font-medium">
              About me
            </Label>
            <Textarea className="block w-full" id="about" rows={5} placeholder="Name" />
          </fieldset>
        </div>
        <div className="flex items-center gap-x-3">
          <Switch id="v6" defaultChecked={false} />
          <Label htmlFor="v6" className="text-body-4 font-medium text-metal-600 dark:text-metal-300">
            Set out of office
          </Label>
        </div>
      </form>
      <div className="space-y-4">
        <p className="text-metal-4 font-medium text-metal-900 dark:text-white">Team</p>
        <div className="flex items-center gap-x-12">
          <div className="flex items-center gap-2.5">
            <Image src="/images/logo/main-logo.svg" width={100} height={20} alt="star" />
            <p className="text-body-5 font-normal text-metal-300 dark:text-metal-600">12 May, 2024</p>
          </div>
          <div className="flex items-center gap-2.5">
            <Image src="/images/logo/crossbin-main.svg" width={100} height={20} alt="crossbin" />
            <p className="text-body-5 font-normal text-metal-300 dark:text-metal-600">01 January, 2030</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
