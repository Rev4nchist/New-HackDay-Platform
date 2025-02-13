'use client'
import { cn } from 'keep-react/utils'
import { useSearchParams } from 'next/navigation'
import { ReactNode, Suspense } from 'react'

const TaskProvider = ({ children }: { children: ReactNode }) => {
  const route = useSearchParams().get('tab')
  return (
    <div
      className={cn(
        'mx-auto h-screen overflow-hidden rounded-none xl:h-[calc(100vh-32px)] xl:rounded-2xl dark:bg-metal-900',
        route === 'lists' ? 'bg-metal-25' : 'bg-white',
      )}>
      <Suspense>{children}</Suspense>
    </div>
  )
}

export default TaskProvider
