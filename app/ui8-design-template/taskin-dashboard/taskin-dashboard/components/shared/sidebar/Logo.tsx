'use client'
import { ICaretUpDown, IPlus } from '@/components/Icons/Icons'
import { useLogoContext } from '@/context/LogoContext'
import { Button, Divider, Dropdown, DropdownAction, DropdownContent } from 'keep-react'
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  const { project, setProject } = useLogoContext()
  return (
    <div className="flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <Image src={project.logo} alt="logo" width={28} height={28} style={{ maxWidth: '100%', height: 'auto' }} />
        <p className="text-body-3 font-medium text-metal-900 dark:text-white">{project.projectName}</p>
      </Link>
      <Dropdown>
        <DropdownAction asChild>
          <button>
            <ICaretUpDown className="size-4" />
          </button>
        </DropdownAction>
        <DropdownContent
          align="end"
          className="w-[180px] space-y-1 rounded-xl border-metal-100 bg-white p-2 shadow-2xLarge dark:divide-metal-800 dark:border-metal-800">
          <button
            onClick={() => setProject({ projectName: 'Starblow', logo: '/images/logo/star-blow.svg' })}
            className="flex w-full cursor-pointer items-center gap-x-2 rounded-lg px-3 py-2 hover:bg-metal-50 dark:hover:bg-metal-800">
            <Image
              src="/images/logo/star-blow.svg"
              width={20}
              height={20}
              alt="logo"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <p className="text-body-4 font-medium text-metal-600 dark:text-white">Starblow</p>
          </button>
          <Divider />
          <button
            onClick={() => setProject({ projectName: 'Crossbin', logo: '/images/logo/crossbin.svg' })}
            className="flex w-full cursor-pointer items-center gap-x-2 rounded-lg px-3 py-2 hover:bg-metal-50 dark:hover:bg-metal-800">
            <Image
              src="/images/logo/crossbin.svg"
              width={20}
              height={20}
              alt="logo"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <p className="text-body-4 font-medium text-metal-600 dark:text-white">Crossbin</p>
          </button>
          <Divider />
          <button
            onClick={() => setProject({ projectName: 'Roundbe', logo: '/images/logo/roundbe.svg' })}
            className="flex w-full cursor-pointer items-center gap-x-2 rounded-lg px-3 py-2 hover:bg-metal-50 dark:hover:bg-metal-800">
            <Image
              src="/images/logo/roundbe.svg"
              width={20}
              height={20}
              alt="logo"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <p className="text-body-4 font-medium text-metal-600 dark:text-white">Roundbe</p>
          </button>
          <Button className="w-full gap-1" size="sm" color="secondary" variant="softBg">
            <IPlus size={16} /> Add workspace
          </Button>
        </DropdownContent>
      </Dropdown>
    </div>
  )
}

export default Logo
