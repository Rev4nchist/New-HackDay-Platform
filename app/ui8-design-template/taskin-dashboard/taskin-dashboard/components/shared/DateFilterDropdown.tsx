import { ICalendarBlank, ICaretDown, IClock, IThumbsUp, IUser } from '@/components/Icons/Icons'
import { Button, Dropdown, DropdownAction, DropdownContent, DropdownItem } from 'keep-react'

const DateFilterDropdown = () => {
  return (
    <Dropdown>
      <DropdownAction asChild>
        <Button variant="link" color="secondary" className="gap-1">
          Date
          <ICaretDown size={14} className="text-metal-600 dark:text-metal-300" />
        </Button>
      </DropdownAction>
      <DropdownContent
        align="end"
        className="w-[190px] space-y-0.5 rounded-xl border border-metal-50 bg-white p-3.5 shadow-2xLarge dark:border-metal-800/50 dark:bg-metal-900">
        <DropdownItem className="mb-0 flex cursor-pointer select-none items-center gap-2 rounded-lg bg-transparent p-2.5 text-body-4 font-medium text-metal-600 outline-none transition-all duration-300 hover:bg-metal-50 focus:bg-metal-50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:text-white dark:hover:bg-metal-800/30 dark:focus:bg-metal-800">
          <ICalendarBlank size={20} />
          <p>Due date</p>
        </DropdownItem>
        <DropdownItem className="mb-0 flex cursor-pointer select-none items-center gap-2 rounded-lg bg-transparent p-2.5 text-body-4 font-medium text-metal-600 outline-none transition-all duration-300 hover:bg-metal-50 focus:bg-metal-50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:text-white dark:hover:bg-metal-800/30 dark:focus:bg-metal-800">
          <IUser size={20} />
          <p>Assignee</p>
        </DropdownItem>
        <DropdownItem className="mb-0 flex cursor-pointer select-none items-center gap-2 rounded-lg bg-transparent p-2.5 text-body-4 font-medium text-metal-600 outline-none transition-all duration-300 hover:bg-metal-50 focus:bg-metal-50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:text-white dark:hover:bg-metal-800/30 dark:focus:bg-metal-800">
          <IClock size={20} />
          <p>Created on</p>
        </DropdownItem>
        <DropdownItem className="mb-0 flex cursor-pointer select-none items-center gap-2 rounded-lg bg-transparent p-2.5 text-body-4 font-medium text-metal-600 outline-none transition-all duration-300 hover:bg-metal-50 focus:bg-metal-50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:text-white dark:hover:bg-metal-800/30 dark:focus:bg-metal-800">
          <IClock size={20} />
          <p>Completed on</p>
        </DropdownItem>
        <DropdownItem className="mb-0 flex cursor-pointer select-none items-center gap-2 rounded-lg bg-transparent p-2.5 text-body-4 font-medium text-metal-600 outline-none transition-all duration-300 hover:bg-metal-50 focus:bg-metal-50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:text-white dark:hover:bg-metal-800/30 dark:focus:bg-metal-800">
          <IThumbsUp size={20} />
          <p>Likes</p>
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  )
}

export default DateFilterDropdown
