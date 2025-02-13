'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { IMoon, ISun } from '../Icons/Icons'

const ThemeConfigure = () => {
  const [mount, setMount] = useState(false)
  const { setTheme, theme } = useTheme()

  useEffect(() => {
    setMount(true)

    return () => {
      setMount(false)
    }
  }, [])

  if (!mount) return null

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="flex size-10 items-center justify-center rounded-full bg-metal-50 dark:bg-metal-800">
      {theme === 'dark' ? <IMoon size={18} className="text-white" /> : <ISun size={18} className="text-metal-600" />}
    </button>
  )
}

export default ThemeConfigure
