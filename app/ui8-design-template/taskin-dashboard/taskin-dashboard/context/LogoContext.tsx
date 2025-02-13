'use client'
import { createContext, Dispatch, SetStateAction, useContext } from 'react'

type LogoContextProps = {
  project: {
    logo: string
    projectName: string
  }
  setProject: Dispatch<
    SetStateAction<{
      logo: string
      projectName: string
    }>
  >
}

export const LogoContext = createContext<LogoContextProps | undefined>(undefined)

export function useLogoContext(): LogoContextProps {
  const context = useContext(LogoContext)
  if (!context) {
    throw new Error('useLogoContext should be used within the LogoContext provider!')
  }
  return context
}
