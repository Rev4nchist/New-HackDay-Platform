import LogoProvider from '@/provider/LogoProvider'
import { Divider } from 'keep-react'
import Link from 'next/link'
import { IInfo, ISparkle, IUserCirclePlus } from '../../Icons/Icons'
import Logo from './Logo'
import PageRoutes from './PageRoutes'
import ProjectRoutes from './ProjectRoutes'
import UserRoutes from './UserRoutes'

const LargeSidebar = () => {
  return (
    <aside className="fixed z-50 hidden h-full w-[250px] space-y-6 bg-metal-100 px-4 pb-8 pt-6 xl:block dark:bg-[#31373F]">
      <LogoProvider>
        <Logo />
      </LogoProvider>
      <div id="scroll-bar" className="h-full space-y-6 overflow-y-auto">
        <PageRoutes />
        <Divider className="border-t-metal-900/5 dark:border-t-metal-700" />
        <ProjectRoutes />
        <Divider className="border-t-metal-900/5 dark:border-t-metal-700" />
        <UserRoutes />
        <Divider className="border-t-metal-900/5 dark:border-t-metal-700" />
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
  )
}

export default LargeSidebar
