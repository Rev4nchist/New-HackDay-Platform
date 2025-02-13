'use client'

import { LogoContext } from '@/context/LogoContext'
import { ReactNode, useState } from 'react'

const LogoProvider = ({ children }: { children: ReactNode }) => {
  const [project, setProject] = useState({
    logo: '/images/logo/star-blow.svg',
    projectName: 'TaskIn',
  })

  return <LogoContext.Provider value={{ project, setProject }}>{children}</LogoContext.Provider>
}

export default LogoProvider
