import { Avatar, AvatarFallback, AvatarImage } from 'keep-react'
import Image from 'next/image'

const OtherMessage = ({ message }: { message: string }) => {
  return (
    <div className="flex items-end gap-2">
      <Avatar className="mb-9 size-10">
        <AvatarImage src="/images/avatar/avatar-3.png" />
        <AvatarFallback className="text-body-4 font-normal text-metal-900 dark:text-white">PM</AvatarFallback>
      </Avatar>
      <div className="space-y-2.5">
        <div className="max-w-[273px] rounded-e-xl rounded-t-xl border border-metal-100 bg-white p-4 dark:border-metal-800 dark:bg-metal-900">
          <p className="text-body-4 font-normal text-metal-900 dark:text-white">{message}</p>
        </div>
        <div className="flex items-center gap-2.5">
          <p className="text-body-5 font-medium text-metal-300">2:30 PM</p>
          <button className="flex items-center gap-1 rounded-md border border-metal-100 bg-metal-25 px-1.5 py-0.5 text-body-4 font-medium text-metal-600 dark:border-metal-700 dark:bg-metal-800 dark:text-metal-300">
            <Image src="/images/emoji/heart.svg" height={12} width={12} alt="heart" /> 3
          </button>
        </div>
      </div>
    </div>
  )
}

export default OtherMessage
