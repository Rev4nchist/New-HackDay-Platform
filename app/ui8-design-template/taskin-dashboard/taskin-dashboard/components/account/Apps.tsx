import { ICaretRight, IMagnifyingGlass } from '@/components/Icons/Icons'
import { apps } from '@/data/apps'
import { TabActiveProps } from '@/interfaces'
import { Button, Input, InputIcon, Switch } from 'keep-react'
import Image from 'next/image'
import { ChangeEvent, FC, useState } from 'react'

const Apps: FC<TabActiveProps> = ({ activeTab }) => {
  const [searchResult, setSearchResult] = useState(apps)

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    const value = target.value
    if (value) {
      const result = apps.filter((app) => app.name.toLowerCase().includes(value.toLowerCase()))
      setSearchResult(result)
    } else {
      setSearchResult(apps)
    }
  }
  return (
    <div data-state={activeTab === 6} className="hidden space-y-4 p-6 data-[state=true]:block">
      <form>
        <fieldset className="relative w-full">
          <Input placeholder="Search anything" onChange={(e) => handleSearch(e)} className="ps-11" />
          <InputIcon>
            <IMagnifyingGlass size={20} className="text-metal-600 dark:text-metal-300" />
          </InputIcon>
        </fieldset>
      </form>
      <div className="grid grid-cols-12 gap-5">
        {searchResult.map((app) => (
          <div
            key={app.id}
            className="col-span-12 space-y-5 rounded-xl border border-metal-100 bg-white p-4 lg:col-span-6 dark:border-metal-800 dark:bg-metal-900">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-metal-50 dark:bg-metal-800">
                  <Image src={app.img} alt={app.name} height={24} width={24} />
                </div>
                <p className="text-body-3 font-medium text-metal-900 dark:text-white">{app.name}</p>
              </div>
              <Switch defaultChecked={app.active} />
            </div>
            <div>
              <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">{app.description}</p>
            </div>
            <div>
              <Button color="secondary" variant="outline" className="gap-1">
                Learn More <ICaretRight size={18} className="text-metal-600 dark:text-metal-300" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Apps
