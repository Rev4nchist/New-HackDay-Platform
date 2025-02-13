import { ICaretDown, IMagnifyingGlass } from '@/components/Icons/Icons'
import PageHeader from '@/components/shared/PageHeader'
import {
  Avatar,
  AvatarGroup,
  AvatarImage,
  Button,
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownGroup,
  DropdownItem,
  Input,
  InputIcon,
  LineProgress,
  LineProgressBar,
  LineProgressText,
} from 'keep-react'
import Image from 'next/image'
import Link from 'next/link'

const members = [
  { id: 1, img: '/images/avatar/avatar-1.png', name: 'Team 1' },
  { id: 2, img: '/images/avatar/avatar-2.png', name: 'Team 2' },
  { id: 3, img: '/images/avatar/avatar-3.png', name: 'Team 3' },
  { id: 4, img: '/images/avatar/avatar-4.png', name: 'Team 4' },
  { id: 5, img: '/images/avatar/avatar-5.png', name: 'Team 5' },
]
const projects = [
  {
    id: 1,
    img: '/images/logo/figma-design.svg',
    title: 'Figma Design System',
    status: 'In Progress',
    dateLine: '25 July, 2024',
    progress: 60,
    members,
  },
  {
    id: 2,
    img: '/images/logo/keep-react.svg',
    title: 'Keep React',
    status: 'In Progress',
    dateLine: '25 July, 2024',
    progress: 50,
    members,
  },
  {
    id: 3,
    img: '/images/logo/crossbin.svg',
    title: 'Nuxt.js Project',
    status: 'In Progress',
    dateLine: '30 August, 2024',
    progress: 70,
    members,
  },
  {
    id: 4,
    img: '/images/logo/google.svg',
    title: 'Angular Dashboard',
    status: 'Completed',
    dateLine: '15 June, 2024',
    progress: 100,
    members,
  },
  {
    id: 5,
    img: '/images/logo/facebook.svg',
    title: 'Flutter Mobile App',
    status: 'In Progress',
    dateLine: '10 September, 2024',
    progress: 40,
    members,
  },
  {
    id: 6,
    img: '/images/logo/star-blow.svg',
    title: 'Python API Development',
    status: 'In Progress',
    dateLine: '5 October, 2024',
    progress: 55,
    members,
  },
  {
    id: 7,
    img: '/images/logo/roundbe-web.svg',
    title: 'JavaScript Refactor',
    status: 'In Progress',
    dateLine: '20 September, 2024',
    progress: 30,
    members,
  },
  {
    id: 8,
    img: '/images/logo/staticmania.svg',
    title: 'SASS Styling',
    status: 'Completed',
    dateLine: '1 August, 2024',
    progress: 100,
    members,
  },
  {
    id: 9,
    img: '/images/logo/status.svg',
    title: 'Node.js Backend',
    status: 'In Progress',
    dateLine: '28 October, 2024',
    progress: 65,
    members,
  },
  {
    id: 10,
    img: '/images/logo/figma-design.svg',
    title: 'AWS Infrastructure',
    status: 'In Progress',
    dateLine: '15 November, 2024',
    progress: 45,
    members,
  },
]
const page = () => {
  return (
    <div className="mx-auto h-[calc(100vh-32px)] overflow-hidden rounded-2xl bg-metal-25 dark:bg-metal-900">
      <PageHeader>
        <p className="text-body-3 font-medium text-metal-900 lg:text-body-1 dark:text-white">Project</p>
      </PageHeader>
      <div className="flex items-center justify-between border-b border-b-metal-100 px-6 py-3 dark:border-b-metal-800">
        <fieldset className="relative hidden flex-1 md:block">
          <Input placeholder="Search project" className="ps-11" />
          <InputIcon>
            <IMagnifyingGlass size={20} color="#AFBACA" />
          </InputIcon>
        </fieldset>
        <div className="flex items-center justify-center md:hidden">
          <button>
            <IMagnifyingGlass size={16} className="text-metal-600 dark:text-metal-300" />
          </button>
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-1">
          <Dropdown>
            <DropdownAction asChild>
              <Button variant="link" color="secondary" className="gap-1 dark:text-metal-300 dark:hover:text-white">
                Owner
                <ICaretDown className="size-4 text-metal-600 dark:text-metal-300" />
              </Button>
            </DropdownAction>
            <DropdownContent
              align="end"
              className="w-[250px] rounded-2xl border border-metal-50 p-2 dark:border-metal-800/50 dark:bg-metal-900">
              <form>
                <fieldset className="relative">
                  <Input
                    placeholder="Search by name"
                    className="h-10 rounded-none border-0 border-b border-b-metal-100 px-3 py-2.5 ps-11 focus:outline-none focus-visible:ring-0"
                  />
                  <InputIcon>
                    <IMagnifyingGlass className="size-4 text-metal-600 dark:text-metal-300" />
                  </InputIcon>
                </fieldset>
              </form>
              <DropdownGroup className="pt-2">
                <DropdownItem className="mb-0 rounded-xl px-3 py-2 dark:hover:bg-metal-800/30">
                  <Avatar className="size-6">
                    <AvatarImage className="size-6" src="/images/avatar/avatar-1.png" />
                  </Avatar>
                  <p>Zakir Hossen</p>
                </DropdownItem>
                <DropdownItem className="mb-0 rounded-xl px-3 py-2 dark:hover:bg-metal-800/30">
                  <Avatar className="size-6">
                    <AvatarImage className="size-6" src="/images/avatar/avatar-2.png" />
                  </Avatar>
                  <p>Jak Downey</p>
                </DropdownItem>
                <DropdownItem className="mb-0 rounded-xl px-3 py-2 dark:hover:bg-metal-800/30">
                  <Avatar className="size-6">
                    <AvatarImage className="size-6" src="/images/avatar/avatar-3.png" />
                  </Avatar>
                  <p>Kristin Watson</p>
                </DropdownItem>
                <DropdownItem className="mb-0 rounded-xl px-3 py-2 dark:hover:bg-metal-800/30">
                  <Avatar className="size-6">
                    <AvatarImage className="size-6" src="/images/avatar/avatar-4.png" />
                  </Avatar>
                  <p>Ronald Richards</p>
                </DropdownItem>
                <DropdownItem className="mb-0 rounded-xl px-3 py-2 dark:hover:bg-metal-800/30">
                  <Avatar className="size-6">
                    <AvatarImage className="size-6" src="/images/avatar/avatar-5.png" />
                  </Avatar>
                  <p>Ralph Edwards</p>
                </DropdownItem>
              </DropdownGroup>
            </DropdownContent>
          </Dropdown>
          <Dropdown>
            <DropdownAction asChild>
              <Button variant="link" color="secondary" className="gap-1 dark:text-metal-300 dark:hover:text-white">
                Member
                <ICaretDown className="size-4 text-metal-600 dark:text-metal-300" />
              </Button>
            </DropdownAction>
            <DropdownContent
              align="end"
              className="w-[250px] rounded-2xl border border-metal-50 p-2 dark:border-metal-800/50 dark:bg-metal-900">
              <form>
                <fieldset className="relative">
                  <Input
                    placeholder="Search by name"
                    className="h-10 rounded-none border-0 border-b border-b-metal-100 px-3 py-2.5 ps-11 focus:outline-none focus-visible:ring-0"
                  />
                  <InputIcon>
                    <IMagnifyingGlass className="size-4 text-metal-600 dark:text-metal-300" />
                  </InputIcon>
                </fieldset>
              </form>
              <DropdownGroup className="pt-2">
                <DropdownItem className="mb-0 rounded-xl px-3 py-2 dark:hover:bg-metal-800/30">
                  <Avatar className="size-6">
                    <AvatarImage className="size-6" src="/images/avatar/avatar-1.png" />
                  </Avatar>
                  <p>Zakir Hossen</p>
                </DropdownItem>
                <DropdownItem className="mb-0 rounded-xl px-3 py-2 dark:hover:bg-metal-800/30">
                  <Avatar className="size-6">
                    <AvatarImage className="size-6" src="/images/avatar/avatar-2.png" />
                  </Avatar>
                  <p>Jak Downey</p>
                </DropdownItem>
                <DropdownItem className="mb-0 rounded-xl px-3 py-2 dark:hover:bg-metal-800/30">
                  <Avatar className="size-6">
                    <AvatarImage className="size-6" src="/images/avatar/avatar-3.png" />
                  </Avatar>
                  <p>Kristin Watson</p>
                </DropdownItem>
                <DropdownItem className="mb-0 rounded-xl px-3 py-2 dark:hover:bg-metal-800/30">
                  <Avatar className="size-6">
                    <AvatarImage className="size-6" src="/images/avatar/avatar-4.png" />
                  </Avatar>
                  <p>Ronald Richards</p>
                </DropdownItem>
                <DropdownItem className="mb-0 rounded-xl px-3 py-2 dark:hover:bg-metal-800/30">
                  <Avatar className="size-6">
                    <AvatarImage className="size-6" src="/images/avatar/avatar-5.png" />
                  </Avatar>
                  <p>Ralph Edwards</p>
                </DropdownItem>
              </DropdownGroup>
            </DropdownContent>
          </Dropdown>
          <Dropdown>
            <DropdownAction asChild>
              <Button variant="link" color="secondary" className="gap-1 dark:text-metal-300 dark:hover:text-white">
                Status
                <ICaretDown className="size-4 text-metal-600 dark:text-metal-300" />
              </Button>
            </DropdownAction>
            <DropdownContent
              align="end"
              className="w-[157px] border border-metal-100 p-2 shadow-2xLarge dark:border-metal-800">
              <DropdownGroup>
                <DropdownItem className="mb-0 rounded-xl px-3 py-2 dark:hover:bg-metal-800/30">Active</DropdownItem>
                <DropdownItem className="mb-0 rounded-xl px-3 py-2 dark:hover:bg-metal-800/30">Completed</DropdownItem>
                <DropdownItem className="mb-0 rounded-xl px-3 py-2 dark:hover:bg-metal-800/30">Archived</DropdownItem>
              </DropdownGroup>
            </DropdownContent>
          </Dropdown>
        </div>
      </div>
      <div
        id="scroll-bar"
        className="grid h-[calc(100vh-150px)] grid-cols-12 gap-4 divide-metal-100 overflow-auto px-6 py-4 lg:h-auto lg:gap-0 lg:divide-y dark:divide-metal-800">
        {projects.map((item) => (
          <div
            key={item.id}
            className="col-span-12 flex flex-col items-start justify-between gap-x-5 gap-y-2 rounded-lg border border-metal-100 px-6 py-5 sm:col-span-6 lg:col-span-12 lg:flex-row lg:items-center lg:gap-y-0 lg:rounded-none lg:border-0 lg:px-0 dark:border-metal-800">
            <div className="flex w-full max-w-[523px] items-center gap-2.5">
              <Image src={item.img} height={24} width={24} alt="figma" />
              <Link
                href={`/projects/${item.id}/overview`}
                className="text-body-3 font-medium text-metal-600 dark:text-white">
                {item.title}
              </Link>
            </div>
            <div className="flex w-full max-w-[105px] items-center gap-1.5">
              <p className="text-body-5 font-normal text-metal-400 dark:text-metal-600">Status</p>
              <p className="text-body-5 font-medium text-metal-600 dark:text-metal-300">{item.status}</p>
            </div>
            <div className="flex w-full max-w-[180px] items-center gap-1.5">
              <p className="text-body-5 font-normal text-metal-400 dark:text-metal-600">Date line</p>
              <p className="text-body-5 font-medium text-metal-600 dark:text-metal-300">{item.dateLine}</p>
            </div>
            <div className="w-full lg:max-w-[194px]">
              <LineProgress progress={item.progress}>
                <LineProgressBar className="bg-gradient-1" lineBackground="bg-white border border-[#CFA1FB] h-3" />
                <LineProgressText className="text-body-5 font-medium text-metal-600 dark:text-metal-300">
                  {item.progress}%
                </LineProgressText>
              </LineProgress>
            </div>
            <div>
              <AvatarGroup className="-space-x-2">
                {members.map((member) => (
                  <Avatar key={member.id} className="size-6">
                    <AvatarImage className="size-6" src={member.img} />
                  </Avatar>
                ))}
                <div className="bg-gradient-10 relative z-10 flex size-6 items-center justify-center rounded-full text-body-5 font-medium text-white">
                  9
                </div>
              </AvatarGroup>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page
