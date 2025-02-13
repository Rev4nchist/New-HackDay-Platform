'use client'
import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from 'keep-react'
import { cn } from 'keep-react/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ICaretDown } from '../../Icons/Icons'

const UserRoutes = () => {
  const [seeMoreUser, setSeeMoreUser] = useState(false)

  const pathname = usePathname()
  const users = [
    { id: 1, name: 'Arlene McCoy', img: '/images/avatar/avatar-1.png', path: '/messages/user-1' },
    { id: 2, name: 'Kathryn Murphy', img: '/images/avatar/avatar-2.png', path: '/messages/user-2' },
    { id: 3, name: 'Darlene Robertson', img: '/images/avatar/avatar-3.png', path: '/messages/user-3' },
    { id: 4, name: 'Linda Byrd', img: '/images/avatar/avatar-4.png', path: '/messages/user-4' },
    { id: 5, name: 'Madison Carr', img: '/images/avatar/avatar-5.png', path: '/messages/user-5' },
  ]

  return (
    <div className="space-y-1.5">
      <p className="px-3 text-body-5 font-medium text-metal-400 dark:text-metal-300">Messages</p>
      <motion.ul
        initial={{ height: '128px' }}
        animate={{ height: seeMoreUser ? 'auto' : '128px' }}
        transition={{ duration: 0.3 }}
        className="flex flex-col gap-y-1.5 overflow-hidden">
        {users.map((user) => (
          <Link
            data-active={pathname === user.path}
            key={user.id}
            href={user.path}
            className="flex h-9 items-center gap-3 rounded-full px-3 py-2 text-body-4 font-medium text-metal-600 transition-all duration-300 hover:bg-white data-[active=true]:bg-white dark:text-metal-300 dark:hover:bg-[#D9E9FF12] dark:data-[active=true]:bg-[#D9E9FF12]">
            <Avatar className="size-5">
              <AvatarImage src={user.img} />
              <AvatarFallback className="text-body-5 font-medium">{user.name.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <span>{user.name}</span>
          </Link>
        ))}
      </motion.ul>
      <button
        onClick={() => setSeeMoreUser(!seeMoreUser)}
        className="mt-2 flex h-7 w-full items-center justify-center gap-1 rounded-lg bg-metal-900/5 px-2 py-1 text-body-5 font-medium text-metal-600 transition-all duration-300 hover:bg-metal-900/10 dark:bg-[#D9E9FF12] dark:text-metal-300 dark:hover:bg-[#D9E9FF24]/10">
        <span>See {seeMoreUser ? 'less' : 'all'}</span>
        <span>
          <ICaretDown className={cn('transition-all duration-300', seeMoreUser ? 'rotate-180' : '')} size="14" />
        </span>
      </button>
    </div>
  )
}

export default UserRoutes
