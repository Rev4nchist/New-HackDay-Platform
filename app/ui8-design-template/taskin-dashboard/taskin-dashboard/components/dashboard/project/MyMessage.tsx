import { Avatar, AvatarFallback, AvatarImage } from 'keep-react'

const MyMessage = ({ message }: { message: string }) => {
  return (
    <div className="flex items-end justify-end gap-2">
      <div className="space-y-1.5">
        <div className="max-w-[308px] rounded-t-xl rounded-bl-xl bg-primary-600 p-4">
          <p className="text-body-4 font-normal text-white">{message}</p>
        </div>
        <div className="flex items-center justify-end gap-2.5">
          <p className="text-body-5 font-medium text-metal-300">2:30 PM</p>
        </div>
      </div>
      <Avatar className="mb-8 size-10">
        <AvatarImage src="/images/avatar/avatar-5.png" />
        <AvatarFallback className="text-body-4 font-normal text-metal-900 dark:text-white">PM</AvatarFallback>
      </Avatar>
    </div>
  )
}

export default MyMessage
