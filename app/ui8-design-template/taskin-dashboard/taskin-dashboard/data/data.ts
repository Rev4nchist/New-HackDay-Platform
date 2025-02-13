'use client'
import { EMOJIS, ICONS, TaskTabs, USER_CATEGORY } from '@/interfaces'
import {
  Activity,
  AddressBook,
  Airplane,
  AirplaneInFlight,
  Alarm,
  AndroidLogo,
  AngularLogo,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Bell,
  Book,
  Bookmark,
  Briefcase,
  Calendar,
  CalendarBlank,
  Camera,
  ChartPie,
  Chat,
  ChatCenteredText,
  Check,
  CheckCircle,
  ClipboardText,
  Cloud,
  Code,
  Coffee,
  Compass,
  Cube,
  Desktop,
  Diamond,
  DiscordLogo,
  Eye,
  FacebookLogo,
  File,
  FileText,
  Fingerprint,
  Fire,
  Flag,
  HighlighterCircle,
  Horse,
  HouseLine,
  ListDashes,
  Rows,
} from 'phosphor-react'

export const Icons: ICONS[] = [
  { id: 1, Icon: HouseLine },
  { id: 2, Icon: HighlighterCircle },
  { id: 3, Icon: Horse },
  { id: 4, Icon: AddressBook },
  { id: 5, Icon: Activity },
  { id: 6, Icon: Airplane },
  { id: 7, Icon: AirplaneInFlight },
  { id: 8, Icon: Alarm },
  { id: 9, Icon: AndroidLogo },
  { id: 10, Icon: AngularLogo },
  { id: 11, Icon: ArrowLeft },
  { id: 12, Icon: ArrowRight },
  { id: 13, Icon: ArrowUp },
  { id: 14, Icon: ArrowDown },
  { id: 15, Icon: Bell },
  { id: 16, Icon: Book },
  { id: 17, Icon: Bookmark },
  { id: 18, Icon: Briefcase },
  { id: 19, Icon: Calendar },
  { id: 20, Icon: Camera },
  { id: 21, Icon: Chat },
  { id: 22, Icon: Check },
  { id: 23, Icon: ClipboardText },
  { id: 24, Icon: Cloud },
  { id: 25, Icon: Code },
  { id: 26, Icon: Coffee },
  { id: 27, Icon: Compass },
  { id: 28, Icon: Cube },
  { id: 29, Icon: Desktop },
  { id: 30, Icon: Diamond },
  { id: 31, Icon: DiscordLogo },
  { id: 32, Icon: Eye },
  { id: 33, Icon: FacebookLogo },
  { id: 34, Icon: Fingerprint },
  { id: 35, Icon: Fire },
  { id: 36, Icon: Flag },
]

export const emojis: EMOJIS[] = [
  {
    id: 1,
    img: '/images/emoji/artist-palette.svg',
  },
  {
    id: 2,
    img: '/images/emoji/beaming-face-with-smiling-eyes.svg',
  },
  {
    id: 3,
    img: '/images/emoji/briefcase.svg',
  },
  {
    id: 4,
    img: '/images/emoji/calendar.svg',
  },
  {
    id: 5,
    img: '/images/emoji/clipboard.svg',
  },
  {
    id: 6,
    img: '/images/emoji/desktop-computer.svg',
  },
  {
    id: 7,
    img: '/images/emoji/face-blowing-a-kiss.svg',
  },
  {
    id: 8,
    img: '/images/emoji/file-folder.svg',
  },
  {
    id: 9,
    img: '/images/emoji/gear.svg',
  },
  {
    id: 10,
    img: '/images/emoji/grinning-face-with-big-eyes.svg',
  },
  {
    id: 11,
    img: '/images/emoji/grinning-face-with-smiling-eyes.svg',
  },
  {
    id: 12,
    img: '/images/emoji/grinning-face-with-sweat.svg',
  },
  {
    id: 13,
    img: '/images/emoji/grinning-face.svg',
  },
  {
    id: 14,
    img: '/images/emoji/grinning-squinting-face.svg',
  },
  {
    id: 15,
    img: '/images/emoji/kissing-face.svg',
  },
  {
    id: 16,
    img: '/images/emoji/laptop.svg',
  },
  {
    id: 17,
    img: '/images/emoji/left-pointing-magnifying-glass.svg',
  },
  {
    id: 18,
    img: '/images/emoji/memo.svg',
  },
  {
    id: 19,
    img: '/images/emoji/mobile-phone.svg',
  },
  {
    id: 20,
    img: '/images/emoji/open-mailbox-with-raised-flag.svg',
  },
  {
    id: 21,
    img: '/images/emoji/paintbrush.svg',
  },
  {
    id: 22,
    img: '/images/emoji/paperclip.svg',
  },
  {
    id: 23,
    img: '/images/emoji/pencil.svg',
  },
  {
    id: 24,
    img: '/images/emoji/pushpin.svg',
  },
  {
    id: 25,
    img: '/images/emoji/rolling-on-the-floor-laughing.svg',
  },
  {
    id: 26,
    img: '/images/emoji/slightly-smiling-face.svg',
  },
  {
    id: 27,
    img: '/images/emoji/smiling-face-with-halo.svg',
  },
  {
    id: 28,
    img: '/images/emoji/smiling-face-with-heart-eyes.svg',
  },
  {
    id: 29,
    img: '/images/emoji/smiling-face-with-hearts.svg',
  },
  {
    id: 30,
    img: '/images/emoji/smiling-face-with-smiling-eyes.svg',
  },
  {
    id: 31,
    img: '/images/emoji/star-struck.svg',
  },
  {
    id: 32,
    img: '/images/emoji/straight-ruler.svg',
  },
  {
    id: 33,
    img: '/images/emoji/triangle-ruler.svg',
  },
  {
    id: 34,
    img: '/images/emoji/upside-down-face.svg',
  },
  {
    id: 35,
    img: '/images/emoji/winking-face.svg',
  },
]

export const userCategory: USER_CATEGORY[] = [
  {
    id: 1,
    title: 'Project and process management',
    description: 'Plan projects, coordinate tasks, and hit deadlines',
    Icon: ClipboardText,
    active: true,
  },
  {
    id: 2,
    title: 'Personal task management',
    description: 'Organize to-dos and plan out my work day',
    Icon: CheckCircle,
    active: false,
  },
  {
    id: 3,
    title: 'Portfolio and workload management',
    description: 'Monitor status and team-member workload across multiple projects',
    Icon: ChartPie,
    active: false,
  },
]

export const projectTabs: TaskTabs[] = [
  {
    id: 1,
    title: 'Overview',
    Icon: FileText,
    href: 'overview',
  },
  {
    id: 2,
    title: 'Board',
    Icon: Rows,
    href: 'boards',
  },
  {
    id: 3,
    title: 'List',
    Icon: ListDashes,
    href: 'lists',
  },
  {
    id: 4,
    title: 'Calender',
    Icon: CalendarBlank,
    href: 'calender',
  },
  {
    id: 5,
    title: 'Message',
    Icon: ChatCenteredText,
    href: 'message',
  },
  {
    id: 6,
    title: 'Files',
    Icon: File,
    href: 'files',
  },
]
export const taskTabs: TaskTabs[] = [
  {
    id: 1,
    title: 'Board',
    Icon: Rows,
    href: 'boards',
  },
  {
    id: 2,
    title: 'List',
    Icon: ListDashes,
    href: 'lists',
  },
  {
    id: 3,
    title: 'Calender',
    Icon: CalendarBlank,
    href: 'calender',
  },
]
