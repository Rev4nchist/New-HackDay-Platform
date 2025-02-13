import { FC, ReactNode } from 'react'
import NewProject from '../dashboard/home/NewProject'
import MobileSidebar from './sidebar/MobileSidebar'
import ThemeConfigure from './ThemeConfigure'
import UserAccountDropdown from './UserAccountDropdown'

interface PageHeaderProps {
  children?: ReactNode
}

const PageHeader: FC<PageHeaderProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-between rounded-t-none border-b border-b-metal-100 bg-white px-4 py-3 xl:rounded-t-2xl xl:py-3.5 dark:border-b-metal-800 dark:bg-metal-900">
      <div className="flex items-center gap-2">
        <MobileSidebar />
        {children}
      </div>
      <div className="flex items-center gap-2">
        <ThemeConfigure />
        <NewProject />
        <UserAccountDropdown />
      </div>
    </div>
  )
}

export default PageHeader
