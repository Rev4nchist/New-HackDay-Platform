import { Dropdown, DropdownAction, DropdownContent, DropdownItem } from 'keep-react'
import { IDotsThree } from '../Icons/Icons'

const ProjectDropdown = () => {
  return (
    <Dropdown>
      <DropdownAction asChild>
        <button>
          <IDotsThree size={20} />
        </button>
      </DropdownAction>
      <DropdownContent
        align="end"
        className="w-[160px] space-y-0 rounded-xl border border-metal-100 bg-white px-2.5 py-2 shadow-2xLarge dark:border-metal-800">
        <DropdownItem className="mb-0 p-0 px-2.5 py-2">Edit</DropdownItem>
        <DropdownItem className="mb-0 p-0 px-2.5 py-2">Move</DropdownItem>
        <DropdownItem className="mb-0 p-0 px-2.5 py-2">Delete</DropdownItem>
      </DropdownContent>
    </Dropdown>
  )
}

export default ProjectDropdown
