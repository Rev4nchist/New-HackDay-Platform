'use client'
import { Dropdown, DropdownAction, DropdownContent, DropdownItem } from 'keep-react'
import { FC, useState } from 'react'
import { ICaretDown } from '../Icons/Icons'

export interface IDayFilterDropdown {
  filterTitle?: string
}

const DayFilterDropdown: FC<IDayFilterDropdown> = ({ filterTitle }) => {
  const [title, setTitle] = useState(filterTitle)
  return (
    <Dropdown>
      <DropdownAction asChild>
        <button className="flex items-center gap-1 text-body-4 font-medium text-metal-600 dark:text-metal-300 dark:hover:text-white">
          {title} <ICaretDown size={16} />
        </button>
      </DropdownAction>
      <DropdownContent
        align="end"
        className="w-[145px] space-y-0 rounded-xl border border-metal-100 bg-white px-2.5 py-2 shadow-2xLarge dark:border-metal-800">
        <DropdownItem onClick={() => setTitle('Today')} className="mb-0 p-0 px-2.5 py-2">
          Today
        </DropdownItem>
        <DropdownItem onClick={() => setTitle('This Week')} className="p-0 px-2.5 py-2">
          This Week
        </DropdownItem>
        <DropdownItem onClick={() => setTitle('This month')} className="p-0 px-2.5 py-2">
          This month
        </DropdownItem>
        <DropdownItem onClick={() => setTitle('All task')} className="p-0 px-2.5 py-2">
          All task
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  )
}

export default DayFilterDropdown
