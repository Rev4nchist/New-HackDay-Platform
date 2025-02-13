import { IconProps } from 'phosphor-react'
import { ForwardRefExoticComponent, RefAttributes } from 'react'

export interface USER_CATEGORY {
  id: number
  title: string
  description: string
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
  active?: boolean
}

export interface ICONS {
  id: number
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
}
export interface EMOJIS {
  id: number
  img: string
}

export interface TabActiveProps {
  activeTab: number | string
}

export interface TaskTabs {
  id: number
  title: string
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
  href: string
}

export interface ITask {
  id: string
  icon: string
  title: string
  visibility: number
  project: string
  deadline: string
  priority: string
  team: {
    id: number
    img: string
    name: string
  }[]
}
