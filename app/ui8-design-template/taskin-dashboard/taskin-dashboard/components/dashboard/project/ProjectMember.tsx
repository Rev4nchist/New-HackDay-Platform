import { IPlus } from '@/components/Icons/Icons'
import { users } from '@/data/users'
import { Avatar, AvatarFallback, AvatarImage } from 'keep-react'

const ProjectMember = () => {
  return (
    <div className="space-y-4">
      <p className="text-body-1 font-medium text-metal-900 dark:text-white">Members</p>
      <div className="grid grid-cols-12 items-start gap-y-8 lg:gap-x-14">
        {users.map((user) => (
          <div key={user.id} className="col-span-12 lg:col-span-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-x-3">
                <Avatar className="size-10">
                  <AvatarImage className="size-10" src={user.avatar} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="-mt-0.5">
                  <p className="text-body-4 font-medium text-metal-600 dark:text-white">{user.name}</p>
                  <p className="text-body-5 font-normal text-metal-400 dark:text-metal-300">{user.position}</p>
                </div>
              </div>
              <div>
                {user.id === 1 ? (
                  <span className="rounded-full bg-primary-50 px-1.5 text-body-5 font-medium text-primary-500 dark:bg-primary-500/10 dark:text-primary-500">
                    {user.status}
                  </span>
                ) : (
                  <span className="rounded-full bg-metal-25 px-1.5 text-body-5 font-medium text-metal-500 dark:bg-metal-800/70 dark:text-metal-300">
                    {user.status}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
        <div className="col-span-12 items-start lg:col-span-6">
          <button className="flex items-center gap-x-3 text-body-4 font-medium text-metal-900">
            <span className="flex size-8 items-center justify-center rounded-full bg-metal-50">
              <IPlus className="size-5 text-metal-600 dark:text-metal-300" />
            </span>
            Add team member
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectMember
