'use client'
import { Button, Dropdown, DropdownAction, DropdownContent } from 'keep-react'
import { cn } from 'keep-react/utils'
import { useState } from 'react'
import { ICalendarBlank, ICheckCircle, IFunnelSimple, IPlus, IUser } from '../Icons/Icons'

const FilterDropdown = () => {
  const [selected, setSelected] = useState<number[]>([])
  const data = [
    {
      id: 1,
      title: 'Incomplete Tasks',
      icon: <ICheckCircle className="size-4" weight="bold" />,
    },
    {
      id: 2,
      title: 'Completed Tasks',
      icon: <ICheckCircle className="size-4" weight="bold" />,
    },
    {
      id: 3,
      title: 'Just My Tasks',
      icon: <IUser className="size-4" weight="bold" />,
    },
    {
      id: 4,
      title: 'Due This Week',
      icon: <ICalendarBlank className="size-4" weight="bold" />,
    },
    {
      id: 5,
      title: 'Due This Month',
      icon: <ICalendarBlank className="size-4" weight="bold" />,
    },
  ]

  const handleSelect = (id: number) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id))
    } else {
      setSelected([...selected, id])
    }
  }

  return (
    <Dropdown>
      <DropdownAction asChild>
        <Button variant="link" color="secondary" className="gap-1">
          <IFunnelSimple className="size-5 text-metal-600 laptop:size-4 dark:text-metal-300" />
          <span className="hidden text-metal-600 laptop:block dark:text-metal-300">Filter</span>
        </Button>
      </DropdownAction>
      <DropdownContent
        align="end"
        className="w-[350px] rounded-xl border border-metal-100 p-4 shadow-2xLarge md:w-[478px] dark:border-metal-800">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-body-3 font-medium text-metal-900 dark:text-white">Filters</p>
            <Button onClick={() => setSelected([])} variant="link" color="secondary">
              Clear
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {data.map((item) => (
              <button
                onClick={() => handleSelect(item.id)}
                key={item.id}
                className={cn(
                  'flex items-center gap-1 rounded-full border border-metal-300 px-2.5 py-1.5 text-body-4 font-medium text-metal-600 dark:border-metal-800 dark:text-metal-300',
                  selected.includes(item.id) && 'border-metal-900 bg-metal-900 text-white dark:bg-metal-800',
                )}>
                {item.icon}
                {item.title}
              </button>
            ))}
          </div>
          <Button variant="softBg" size="sm" color="secondary" className="gap-1.5">
            <IPlus size={16} />
            Add Filter
          </Button>
        </div>
      </DropdownContent>
    </Dropdown>
  )
}

export default FilterDropdown
