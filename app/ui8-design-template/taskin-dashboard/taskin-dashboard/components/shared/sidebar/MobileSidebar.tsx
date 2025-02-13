'use client'
import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage, Drawer, DrawerAction, DrawerContent } from 'keep-react'
import { cn } from 'keep-react/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import {
  IBell,
  ICaretDown,
  ICheckCircle,
  IconX,
  IHouseLine,
  IInfo,
  IList,
  ISparkle,
  IUserCirclePlus,
} from '../../Icons/Icons'
import Search from '../../dashboard/home/Search'

const MobileSidebar = () => {
  const [open, setOpen] = useState(false)
  const [seeMoreUser, setSeeMoreUser] = useState(false)
  const [seeMoreProject, setSeeMoreProject] = useState(false)
  const pathname = usePathname()
  const users = [
    { id: 1, name: 'Arlene McCoy', img: '/images/avatar/avatar-1.png', path: '/messages/1' },
    { id: 2, name: 'Kathryn Murphy', img: '/images/avatar/avatar-2.png', path: '/messages/2' },
    { id: 3, name: 'Darlene Robertson', img: '/images/avatar/avatar-3.png', path: '/messages/3' },
    { id: 4, name: 'Linda Byrd', img: '/images/avatar/avatar-4.png', path: '/messages/4' },
    { id: 5, name: 'Madison Carr', img: '/images/avatar/avatar-5.png', path: '/messages/5' },
  ]
  const projects = [
    { id: 1, name: 'Figma Design System', icon: '/images/logo/figma.svg', path: '/projects/1/overview' },
    { id: 2, name: 'Keep React', icon: '/images/logo/react.svg', path: '/projects/2/overview' },
    { id: 3, name: 'StaticMania', icon: '/images/logo/status.svg', path: '/projects/3/overview' },
    { id: 4, name: 'Nuxt.js Project', icon: '/images/logo/crossbin.svg', path: '/projects/4/overview' },
    { id: 5, name: 'Node.js Backend', icon: '/images/logo/staticmania.svg', path: '/projects/5/overview' },
  ]
  const routes = [
    { id: 1, name: 'Home', icon: <IHouseLine size={20} />, path: '/' },
    { id: 2, name: 'My Tasks', icon: <ICheckCircle size={20} />, path: '/tasks?tab=boards' },
    { id: 3, name: 'Notification', icon: <IBell size={20} />, path: '/notification' },
  ]

  return (
    <Drawer open={open} onOpenChange={setOpen} showCloseIcon={false}>
      <DrawerAction asChild>
        <button className="block xl:hidden">
          <IList size={24} />
        </button>
      </DrawerAction>
      <DrawerContent position="left" className="rounded-none p-6">
        <aside className="space-y-5">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo/star-blow.svg"
                alt="logo"
                width={28}
                height={28}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              <p className="text-body-3 font-medium text-metal-900 dark:text-white">TaskIn</p>
            </Link>
            <button onClick={() => setOpen(false)} className="rounded-full bg-metal-50 p-2 dark:bg-metal-800">
              <IconX className="size-4 text-metal-600 dark:text-metal-300" />
            </button>
          </div>
          <div id="scroll-bar" className="h-full space-y-6 overflow-y-auto">
            <ul className="flex flex-col gap-y-1.5">
              {routes.map((route) => (
                <Link
                  data-active={pathname === route.path}
                  key={route.id}
                  href={route.path}
                  className="flex h-9 items-center gap-3 rounded-full px-3 py-2 text-body-4 font-medium text-metal-600 transition-all duration-300 hover:bg-white data-[active=true]:bg-white dark:text-metal-300 dark:hover:bg-[#D9E9FF12] dark:data-[active=true]:bg-[#D9E9FF12]">
                  <span>{route.icon}</span>
                  <span>{route.name}</span>
                </Link>
              ))}
              <Search />
            </ul>
            <div>
              <div className="mb-1 flex items-center justify-between">
                <p className="px-3 text-body-5 font-medium text-metal-400 dark:text-metal-300">Projects</p>
              </div>
              <motion.ul
                initial={{ height: '125px' }}
                animate={{ height: seeMoreProject ? 'auto' : '125px' }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-y-1.5 overflow-hidden">
                {projects.map((project) => (
                  <Link
                    data-active={pathname === project.path}
                    key={project.id}
                    href={project.path}
                    className="flex h-9 items-center gap-3 rounded-full px-3 py-2 text-body-4 font-medium text-metal-600 transition-all duration-300 hover:bg-white data-[active=true]:bg-white dark:text-metal-300 dark:hover:bg-[#D9E9FF12] dark:data-[active=true]:bg-[#D9E9FF12]">
                    <span className="flex size-5 items-center justify-center rounded-full bg-white">
                      <Image src={project.icon} height={12} width={12} alt={project.name} />
                    </span>
                    <span className="line-clamp-1">{project.name}</span>
                  </Link>
                ))}
              </motion.ul>
              <button
                onClick={() => setSeeMoreProject(!seeMoreProject)}
                className="mt-2 flex h-7 w-full items-center justify-center gap-1 rounded-lg bg-metal-900/5 px-2 py-1 text-body-5 font-medium text-metal-600 transition-all duration-300 hover:bg-metal-900/10 dark:bg-[#D9E9FF12] dark:text-metal-300 dark:hover:bg-[#D9E9FF24]/10">
                <span>See {seeMoreProject ? 'less' : 'all'}</span>
                <span>
                  <ICaretDown
                    className={cn('transition-all duration-300', seeMoreProject ? 'rotate-180' : '')}
                    size="14"
                  />
                </span>
              </button>
            </div>
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
                  <ICaretDown
                    className={cn('transition-all duration-300', seeMoreUser ? 'rotate-180' : '')}
                    size="14"
                  />
                </span>
              </button>
            </div>
            <ul className="flex flex-col gap-y-1.5">
              <Link
                href="/"
                className="flex h-9 items-center gap-3 rounded-full px-3 py-2 text-body-4 font-medium text-metal-600 transition-all duration-300 hover:bg-white data-[active=true]:bg-white dark:text-metal-300 dark:hover:bg-[#D9E9FF12] dark:data-[active=true]:bg-[#D9E9FF12]">
                <span>
                  <ISparkle size={20} />
                </span>
                <span>Upgrade</span>
              </Link>
              <Link
                href="/"
                className="flex h-9 items-center gap-3 rounded-full px-3 py-2 text-body-4 font-medium text-metal-600 transition-all duration-300 hover:bg-white data-[active=true]:bg-white dark:text-metal-300 dark:hover:bg-[#D9E9FF12] dark:data-[active=true]:bg-[#D9E9FF12]">
                <span>
                  <IUserCirclePlus size={20} />
                </span>
                <span>Add Member</span>
              </Link>

              <Link
                href="/"
                className="flex h-9 items-center gap-3 rounded-full px-3 py-2 text-body-4 font-medium text-metal-600 transition-all duration-300 hover:bg-white data-[active=true]:bg-white dark:text-metal-300 dark:hover:bg-[#D9E9FF12] dark:data-[active=true]:bg-[#D9E9FF12]">
                <span>
                  <IInfo size={20} />
                </span>
                <span>Help</span>
              </Link>
            </ul>
          </div>
        </aside>
      </DrawerContent>
    </Drawer>
  )
}

export default MobileSidebar
