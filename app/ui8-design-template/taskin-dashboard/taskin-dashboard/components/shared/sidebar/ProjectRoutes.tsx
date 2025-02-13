'use client'
import { motion } from 'framer-motion'
import { cn } from 'keep-react/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ICaretDown } from '../../Icons/Icons'

const ProjectRoutes = () => {
  const [seeMoreProject, setSeeMoreProject] = useState(false)
  const pathname = usePathname()

  const projects = [
    { id: 1, name: 'Figma Design System', icon: '/images/logo/figma.svg', path: '/projects/1/overview' },
    { id: 2, name: 'Keep React', icon: '/images/logo/react.svg', path: '/projects/2/overview' },
    { id: 3, name: 'StaticMania', icon: '/images/logo/status.svg', path: '/projects/3/overview' },
    { id: 4, name: 'Nuxt.js Project', icon: '/images/logo/crossbin.svg', path: '/projects/4/overview' },
    { id: 5, name: 'Node.js Backend', icon: '/images/logo/staticmania.svg', path: '/projects/5/overview' },
  ]

  const isActive = (id: number) => {
    const projectId = pathname.split('/')[2]

    if (`/projects/${projectId}` === `/projects/${id}`) {
      return true
    } else {
      return false
    }
  }

  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <p className="px-3 text-body-5 font-medium text-metal-400 dark:text-metal-300">Projects</p>
      </div>
      <motion.ul
        initial={{ height: '125px' }}
        animate={{ height: seeMoreProject ? 'auto' : '125px' }}
        transition={{ duration: 0.3 }}
        className="flex flex-col gap-y-1.5 overflow-hidden">
        {projects.map((project) => (
          <Link
            data-state={isActive(project.id)}
            key={project.id}
            href={project.path}
            className="flex h-9 items-center gap-3 rounded-full px-3 py-2 text-body-4 font-medium text-metal-600 transition-all duration-300 hover:bg-white data-[state=true]:bg-white dark:text-metal-300 dark:hover:bg-[#D9E9FF12] dark:data-[state=true]:bg-[#D9E9FF12]">
            <span className="flex size-5 items-center justify-center rounded-full bg-white">
              <Image src={project.icon} height={12} width={12} alt={project.name} />
            </span>
            <span className="line-clamp-1">{project.name}</span>
          </Link>
        ))}
      </motion.ul>
      <button
        onClick={() => setSeeMoreProject(!seeMoreProject)}
        className="mt-2 flex h-7 w-full items-center justify-center gap-1 rounded-lg bg-metal-900/5 px-2 py-1 text-body-5 font-medium text-metal-600 transition-all duration-300 hover:bg-metal-900/10 dark:bg-[#D9E9FF12] dark:text-metal-300 dark:hover:bg-[#D9E9FF24]/10">
        <span>See {seeMoreProject ? 'less' : 'all'}</span>
        <span>
          <ICaretDown className={cn('transition-all duration-300', seeMoreProject ? 'rotate-180' : '')} size="14" />
        </span>
      </button>
    </div>
  )
}

export default ProjectRoutes
