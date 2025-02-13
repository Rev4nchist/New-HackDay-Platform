'use client'
import Search from '@/components/dashboard/home/Search'
import { IBell, ICheckCircle, IHouseLine } from '@/components/Icons/Icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const PageRoutes = () => {
  const pathname = usePathname()
  const routes = [
    { id: 1, name: 'Home', icon: <IHouseLine size={20} />, path: '/' },
    { id: 2, name: 'My Tasks', icon: <ICheckCircle size={20} />, path: '/tasks' },
    { id: 3, name: 'Notification', icon: <IBell size={20} />, path: '/notification' },
  ]

  const isActive = (path: string) => {
    if (path === pathname || path.includes('/tasks?tab=')) {
      return true
    } else {
      return false
    }
  }

  return (
    <ul className="flex flex-col gap-y-1.5">
      {routes.map((route) => (
        <Link
          data-active={isActive(route.path)}
          key={route.id}
          href={route.path}
          className="flex h-9 items-center gap-3 rounded-full px-3 py-2 text-body-4 font-medium text-metal-600 transition-all duration-300 hover:bg-white data-[active=true]:bg-white dark:text-metal-300 dark:hover:bg-[#D9E9FF12] dark:data-[active=true]:bg-[#D9E9FF12]">
          <span>{route.icon}</span>
          <span>{route.name}</span>
        </Link>
      ))}
      <Search />
    </ul>
  )
}

export default PageRoutes
