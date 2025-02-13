import { IDownloadSimple, IMagnifyingGlass } from '@/components/Icons/Icons'
import DateFilterDropdown from '@/components/shared/DateFilterDropdown'
import FileTypeDropdown from '@/components/shared/FileTypeDropdown'
import { TabActiveProps } from '@/interfaces'
import { Avatar, AvatarImage, Input, InputIcon } from 'keep-react'
import Image from 'next/image'
import { FC } from 'react'

const ProjectFiles: FC<TabActiveProps> = ({ activeTab }) => {
  return (
    <div data-content={activeTab} className="hidden data-[content=files]:block">
      <div className="flex items-center justify-between border-b border-b-metal-100 px-6 py-3 dark:border-b-metal-800">
        <div className="flex flex-1 items-center gap-x-6">
          <p className="text-body-1 font-medium text-metal-900 dark:text-white">Files</p>
          <form className="hidden flex-1 md:block">
            <fieldset className="relative w-full">
              <Input placeholder="Search Anything" className="ps-11" />
              <InputIcon>
                <IMagnifyingGlass size={20} className="text-metal-600 dark:text-metal-300" />
              </InputIcon>
            </fieldset>
          </form>
          <button className="block md:hidden">
            <IMagnifyingGlass size={20} className="text-metal-600 dark:text-metal-300" />
          </button>
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-3">
          <div className="relative z-20">
            <FileTypeDropdown />
          </div>
          <div className="relative z-20">
            <DateFilterDropdown />
          </div>
        </div>
      </div>
      <div id="scroll-bar" className="grid h-[calc(100vh-235px)] grid-cols-12 gap-y-10 overflow-y-auto p-6 lg:gap-x-12">
        <div className="col-span-12 space-y-10 lg:col-span-6 xl:col-span-4">
          <div className="space-y-4">
            <div className="flex items-center gap-x-2">
              <Avatar className="size-6">
                <AvatarImage className="size-6" src="/images/avatar/avatar-1.png" />
              </Avatar>
              <p className="text-body-3 font-medium text-metal-600 dark:text-metal-300">Darlene Robertson</p>
              <p className="text-body-5 font-normal text-metal-400 dark:text-metal-600">16 July 2024 - 3:32PM</p>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between rounded-xl border border-metal-100 px-2.5 py-2 dark:border-metal-800">
                <div className="flex items-center gap-x-3">
                  <div>
                    <Image alt="file" src="/images/logo/ai.svg" height={32} width={24} />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-body-4 font-medium text-metal-900 dark:text-white">Brand Logo .ai</p>
                    <p className="text-body-5 font-normal text-metal-600 dark:text-metal-300">4.2MB</p>
                  </div>
                </div>
                <div>
                  <button>
                    <IDownloadSimple size={16} className="text-metal-600 dark:text-metal-300" />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-metal-100 px-2.5 py-2 dark:border-metal-800">
                <div className="flex items-center gap-x-3">
                  <div>
                    <Image alt="file" src="/images/logo/pdf.svg" height={32} width={24} />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-body-4 font-medium text-metal-900 dark:text-white">Connecting your tech.pdf</p>
                    <p className="text-body-5 font-normal text-metal-600 dark:text-metal-300">4.2MB</p>
                  </div>
                </div>
                <div>
                  <button>
                    <IDownloadSimple size={16} className="text-metal-600 dark:text-metal-300" />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-metal-100 px-2.5 py-2 dark:border-metal-800">
                <div className="flex items-center gap-x-3">
                  <div>
                    <Image alt="file" src="/images/logo/excel.svg" height={32} width={24} />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-body-4 font-medium text-metal-900 dark:text-white">Brand sales.pdf</p>
                    <p className="text-body-5 font-normal text-metal-600 dark:text-metal-300">4.2MB</p>
                  </div>
                </div>
                <div>
                  <button>
                    <IDownloadSimple size={16} className="text-metal-600 dark:text-metal-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-x-2">
              <Avatar className="size-6">
                <AvatarImage className="size-6" src="/images/avatar/avatar-3.png" />
              </Avatar>
              <p className="text-body-3 font-medium text-metal-600 dark:text-metal-300">William Garcia</p>
              <p className="text-body-5 font-normal text-metal-400 dark:text-metal-600">22 March 2024 - 5:11PM</p>
            </div>
            <div className="space-y-1.5">
              <div className="w-full space-y-2 rounded-xl border border-metal-100 px-2.5 py-2 dark:border-metal-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-3">
                    <div>
                      <Image alt="file" src="/images/logo/ai.svg" height={32} width={24} />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-body-4 font-medium text-metal-900 dark:text-white">Brand Logo .ai</p>
                      <p className="text-body-5 font-normal text-metal-600 dark:text-metal-300">4.2MB</p>
                    </div>
                  </div>
                  <div>
                    <button>
                      <IDownloadSimple size={16} className="text-metal-600 dark:text-metal-300" />
                    </button>
                  </div>
                </div>
                <div className="relative h-[200px]">
                  <Image src="/images/files/file.png" alt="file" fill />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-x-2">
              <Avatar className="size-6">
                <AvatarImage className="size-6" src="/images/avatar/avatar-4.png" />
              </Avatar>
              <p className="text-body-3 font-medium text-metal-600 dark:text-metal-300">Natalie Smith</p>
              <p className="text-body-5 font-normal text-metal-400 dark:text-metal-600">11 April 2025 - 4:32PM</p>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between rounded-xl border border-metal-100 px-2.5 py-2 dark:border-metal-800">
                <div className="flex items-center gap-x-3">
                  <div>
                    <Image alt="file" src="/images/logo/excel.svg" height={32} width={24} />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-body-4 font-medium text-metal-900 dark:text-white">Brand sales.pdf</p>
                    <p className="text-body-5 font-normal text-metal-600 dark:text-metal-300">4.2MB</p>
                  </div>
                </div>
                <div>
                  <button>
                    <IDownloadSimple size={16} className="text-metal-600 dark:text-metal-300" />
                  </button>
                </div>
              </div>
              <div className="w-full space-y-2 rounded-xl border border-metal-100 px-2.5 py-2 dark:border-metal-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-3">
                    <div>
                      <Image alt="file" src="/images/logo/ai.svg" height={32} width={24} />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-body-4 font-medium text-metal-900 dark:text-white">Brand Logo .ai</p>
                      <p className="text-body-5 font-normal text-metal-600 dark:text-metal-300">4.2MB</p>
                    </div>
                  </div>
                  <div>
                    <button>
                      <IDownloadSimple size={16} className="text-metal-600 dark:text-metal-300" />
                    </button>
                  </div>
                </div>
                <div className="relative h-[200px]">
                  <Image src="/images/files/stack.png" alt="file" fill />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 space-y-10 lg:col-span-6 xl:col-span-4">
          <div className="space-y-4">
            <div className="flex items-center gap-x-2">
              <Avatar className="size-6">
                <AvatarImage className="size-6" src="/images/avatar/avatar-4.png" />
              </Avatar>
              <p className="text-body-3 font-medium text-metal-600 dark:text-metal-300">Natalie Smith</p>
              <p className="text-body-5 font-normal text-metal-400 dark:text-metal-600">11 April 2025 - 4:32PM</p>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between rounded-xl border border-metal-100 px-2.5 py-2 dark:border-metal-800">
                <div className="flex items-center gap-x-3">
                  <div>
                    <Image alt="file" src="/images/logo/excel.svg" height={32} width={24} />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-body-4 font-medium text-metal-900 dark:text-white">Brand sales.pdf</p>
                    <p className="text-body-5 font-normal text-metal-600 dark:text-metal-300">4.2MB</p>
                  </div>
                </div>
                <div>
                  <button>
                    <IDownloadSimple size={16} className="text-metal-600 dark:text-metal-300" />
                  </button>
                </div>
              </div>
              <div className="w-full space-y-2 rounded-xl border border-metal-100 px-2.5 py-2 dark:border-metal-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-3">
                    <div>
                      <Image alt="file" src="/images/logo/ai.svg" height={32} width={24} />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-body-4 font-medium text-metal-900 dark:text-white">Brand Logo .ai</p>
                      <p className="text-body-5 font-normal text-metal-600 dark:text-metal-300">4.2MB</p>
                    </div>
                  </div>
                  <div>
                    <button>
                      <IDownloadSimple size={16} className="text-metal-600 dark:text-metal-300" />
                    </button>
                  </div>
                </div>
                <div className="relative h-[200px]">
                  <Image src="/images/files/stack.png" alt="file" fill />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-x-2">
              <Avatar className="size-6">
                <AvatarImage className="size-6" src="/images/avatar/avatar-3.png" />
              </Avatar>
              <p className="text-body-3 font-medium text-metal-600 dark:text-metal-300">William Garcia</p>
              <p className="text-body-5 font-normal text-metal-400 dark:text-metal-600">22 March 2024 - 5:11PM</p>
            </div>
            <div className="space-y-1.5">
              <div className="w-full space-y-2 rounded-xl border border-metal-100 px-2.5 py-2 dark:border-metal-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-3">
                    <div>
                      <Image alt="file" src="/images/logo/ai.svg" height={32} width={24} />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-body-4 font-medium text-metal-900 dark:text-white">Brand Logo .ai</p>
                      <p className="text-body-5 font-normal text-metal-600 dark:text-metal-300">4.2MB</p>
                    </div>
                  </div>
                  <div>
                    <button>
                      <IDownloadSimple size={16} className="text-metal-600 dark:text-metal-300" />
                    </button>
                  </div>
                </div>
                <div className="relative h-[200px]">
                  <Image src="/images/files/file.png" alt="file" fill />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-x-2">
              <Avatar className="size-6">
                <AvatarImage className="size-6" src="/images/avatar/avatar-4.png" />
              </Avatar>
              <p className="text-body-3 font-medium text-metal-600 dark:text-metal-300">Natalie Smith</p>
              <p className="text-body-5 font-normal text-metal-400 dark:text-metal-600">11 April 2025 - 4:32PM</p>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between rounded-xl border border-metal-100 px-2.5 py-2 dark:border-metal-800">
                <div className="flex items-center gap-x-3">
                  <div>
                    <Image alt="file" src="/images/logo/excel.svg" height={32} width={24} />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-body-4 font-medium text-metal-900 dark:text-white">Brand sales.pdf</p>
                    <p className="text-body-5 font-normal text-metal-600 dark:text-metal-300">4.2MB</p>
                  </div>
                </div>
                <div>
                  <button>
                    <IDownloadSimple size={16} className="text-metal-600 dark:text-metal-300" />
                  </button>
                </div>
              </div>
              <div className="w-full space-y-2 rounded-xl border border-metal-100 px-2.5 py-2 dark:border-metal-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-3">
                    <div>
                      <Image alt="file" src="/images/logo/ai.svg" height={32} width={24} />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-body-4 font-medium text-metal-900 dark:text-white">Brand Logo .ai</p>
                      <p className="text-body-5 font-normal text-metal-600 dark:text-metal-300">4.2MB</p>
                    </div>
                  </div>
                  <div>
                    <button>
                      <IDownloadSimple size={16} className="text-metal-600 dark:text-metal-300" />
                    </button>
                  </div>
                </div>
                <div className="relative h-[200px]">
                  <Image src="/images/files/stack.png" alt="file" fill />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 space-y-10 lg:col-span-6 xl:col-span-4">
          <div className="space-y-4">
            <div className="flex items-center gap-x-2">
              <Avatar className="size-6">
                <AvatarImage className="size-6" src="/images/avatar/avatar-1.png" />
              </Avatar>
              <p className="text-body-3 font-medium text-metal-600 dark:text-metal-300">Darlene Robertson</p>
              <p className="text-body-5 font-normal text-metal-400 dark:text-metal-600">16 July 2024 - 3:32PM</p>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between rounded-xl border border-metal-100 px-2.5 py-2 dark:border-metal-800">
                <div className="flex items-center gap-x-3">
                  <div>
                    <Image alt="file" src="/images/logo/ai.svg" height={32} width={24} />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-body-4 font-medium text-metal-900 dark:text-white">Brand Logo .ai</p>
                    <p className="text-body-5 font-normal text-metal-600 dark:text-metal-300">4.2MB</p>
                  </div>
                </div>
                <div>
                  <button>
                    <IDownloadSimple size={16} className="text-metal-600 dark:text-metal-300" />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-metal-100 px-2.5 py-2 dark:border-metal-800">
                <div className="flex items-center gap-x-3">
                  <div>
                    <Image alt="file" src="/images/logo/pdf.svg" height={32} width={24} />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-body-4 font-medium text-metal-900 dark:text-white">Connecting your tech.pdf</p>
                    <p className="text-body-5 font-normal text-metal-600 dark:text-metal-300">4.2MB</p>
                  </div>
                </div>
                <div>
                  <button>
                    <IDownloadSimple size={16} className="text-metal-600 dark:text-metal-300" />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-metal-100 px-2.5 py-2 dark:border-metal-800">
                <div className="flex items-center gap-x-3">
                  <div>
                    <Image alt="file" src="/images/logo/excel.svg" height={32} width={24} />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-body-4 font-medium text-metal-900 dark:text-white">Brand sales.pdf</p>
                    <p className="text-body-5 font-normal text-metal-600 dark:text-metal-300">4.2MB</p>
                  </div>
                </div>
                <div>
                  <button>
                    <IDownloadSimple size={16} className="text-metal-600 dark:text-metal-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-x-2">
              <Avatar className="size-6">
                <AvatarImage className="size-6" src="/images/avatar/avatar-3.png" />
              </Avatar>
              <p className="text-body-3 font-medium text-metal-600 dark:text-metal-300">William Garcia</p>
              <p className="text-body-5 font-normal text-metal-400 dark:text-metal-600">22 March 2024 - 5:11PM</p>
            </div>
            <div className="space-y-1.5">
              <div className="w-full space-y-2 rounded-xl border border-metal-100 px-2.5 py-2 dark:border-metal-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-3">
                    <div>
                      <Image alt="file" src="/images/logo/ai.svg" height={32} width={24} />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-body-4 font-medium text-metal-900 dark:text-white">Brand Logo .ai</p>
                      <p className="text-body-5 font-normal text-metal-600 dark:text-metal-300">4.2MB</p>
                    </div>
                  </div>
                  <div>
                    <button>
                      <IDownloadSimple size={16} className="text-metal-600 dark:text-metal-300" />
                    </button>
                  </div>
                </div>
                <div className="relative h-[200px]">
                  <Image src="/images/files/file.png" alt="file" fill />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-x-2">
              <Avatar className="size-6">
                <AvatarImage className="size-6" src="/images/avatar/avatar-4.png" />
              </Avatar>
              <p className="text-body-3 font-medium text-metal-600 dark:text-metal-300">Natalie Smith</p>
              <p className="text-body-5 font-normal text-metal-400 dark:text-metal-600">11 April 2025 - 4:32PM</p>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between rounded-xl border border-metal-100 px-2.5 py-2 dark:border-metal-800">
                <div className="flex items-center gap-x-3">
                  <div>
                    <Image alt="file" src="/images/logo/excel.svg" height={32} width={24} />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-body-4 font-medium text-metal-900 dark:text-white">Brand sales.pdf</p>
                    <p className="text-body-5 font-normal text-metal-600 dark:text-metal-300">4.2MB</p>
                  </div>
                </div>
                <div>
                  <button>
                    <IDownloadSimple size={16} className="text-metal-600 dark:text-metal-300" />
                  </button>
                </div>
              </div>
              <div className="w-full space-y-2 rounded-xl border border-metal-100 px-2.5 py-2 dark:border-metal-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-3">
                    <div>
                      <Image alt="file" src="/images/logo/ai.svg" height={32} width={24} />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-body-4 font-medium text-metal-900 dark:text-white">Brand Logo .ai</p>
                      <p className="text-body-5 font-normal text-metal-600 dark:text-metal-300">4.2MB</p>
                    </div>
                  </div>
                  <div>
                    <button>
                      <IDownloadSimple size={16} className="text-metal-600 dark:text-metal-300" />
                    </button>
                  </div>
                </div>
                <div className="relative h-[200px]">
                  <Image src="/images/files/stack.png" alt="file" fill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectFiles
