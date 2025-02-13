import { IBellSlash, ICaretDown, IDesktop, IEnvelope, IFolder } from '@/components/Icons/Icons'
import { TabActiveProps } from '@/interfaces'
import { Accordion, AccordionAction, AccordionContent, AccordionIcon, AccordionItem, Checkbox, Label } from 'keep-react'
import { FC } from 'react'

const Notifications: FC<TabActiveProps> = ({ activeTab }) => {
  return (
    <div data-state={activeTab === 3} className="hidden px-8 py-5 data-[state=true]:block">
      <Accordion className="space-y-4" type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionAction className="items-start px-5 py-5">
            <div className="flex items-start justify-start gap-4 text-left">
              <IDesktop color="#1B4DFF" size={32} />
              <div className="space-y-1">
                <p className="text-body-1 font-medium text-metal-900 dark:text-white">Desktop notifications</p>
                <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
                  Customize what notifications you receive on your desktop
                </p>
              </div>
            </div>
            <AccordionIcon className="rounded-md bg-metal-50 p-1.5 dark:bg-metal-800">
              <ICaretDown className="text-metal-600 dark:text-metal-300" size={20} />
            </AccordionIcon>
          </AccordionAction>
          <AccordionContent className="p-5">
            <div className="space-y-5">
              <div className="flex items-start gap-x-2.5">
                <div>
                  <Checkbox
                    className="border-metal-200 dark:border-metal-500"
                    defaultChecked={true}
                    id="c1"
                    variant="circle"
                  />
                </div>
                <div className="-mt-1 space-y-1.5">
                  <Label htmlFor="c1" className="text-body-3 font-medium text-metal-900">
                    All activity
                  </Label>
                  <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
                    You are assigned a task, added as a collaborator, something you follow is updated, or you are
                    @mentioned
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-x-2.5">
                <div>
                  <Checkbox
                    className="border-metal-200 dark:border-metal-500"
                    defaultChecked={false}
                    id="c2"
                    variant="circle"
                  />
                </div>
                <div className="-mt-1 space-y-1.5">
                  <Label htmlFor="c2" className="text-body-3 font-medium text-metal-900">
                    Mentions
                  </Label>
                  <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
                    Only when you are @mentioned
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-x-2.5">
                <div>
                  <Checkbox
                    className="border-metal-200 dark:border-metal-500"
                    defaultChecked={false}
                    id="c3"
                    variant="circle"
                  />
                </div>
                <div className="-mt-0.5 space-y-1.5">
                  <Label htmlFor="c3" className="text-body-3 font-medium text-metal-900">
                    Nothing
                  </Label>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionAction className="items-start px-5 py-5">
            <div className="flex items-center justify-start gap-4 text-left">
              <IFolder color="#1B4DFF" size={32} />
              <p className="text-body-1 font-medium text-metal-900 dark:text-white">Project notifications</p>
            </div>
            <AccordionIcon className="rounded-md bg-metal-50 p-1.5 dark:bg-metal-800">
              <ICaretDown className="text-metal-600 dark:text-metal-300" size={20} />
            </AccordionIcon>
          </AccordionAction>
          <AccordionContent className="p-5">
            <div className="space-y-5">
              <div className="flex items-start gap-x-2.5">
                <div>
                  <Checkbox
                    className="border-metal-200 dark:border-metal-500"
                    defaultChecked={true}
                    id="c4"
                    variant="circle"
                  />
                </div>
                <div className="-mt-1 space-y-1.5">
                  <Label htmlFor="c4" className="text-body-3 font-medium text-metal-900">
                    All activity
                  </Label>
                  <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
                    You are assigned a task, added as a collaborator, something you follow is updated, or you are
                    @mentioned
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-x-2.5">
                <div>
                  <Checkbox
                    className="border-metal-200 dark:border-metal-500"
                    defaultChecked={false}
                    id="c5"
                    variant="circle"
                  />
                </div>
                <div className="-mt-1 space-y-1.5">
                  <Label htmlFor="c5" className="text-body-3 font-medium text-metal-900">
                    Mentions
                  </Label>
                  <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
                    Only when you are @mentioned
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-x-2.5">
                <div>
                  <Checkbox
                    className="border-metal-200 dark:border-metal-500"
                    defaultChecked={false}
                    id="c6"
                    variant="circle"
                  />
                </div>
                <div className="-mt-0.5 space-y-1.5">
                  <Label htmlFor="c6" className="text-body-3 font-medium text-metal-900">
                    Nothing
                  </Label>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionAction className="items-start px-5 py-5">
            <div className="flex items-center justify-start gap-4 text-left">
              <IEnvelope color="#1B4DFF" size={32} />
              <p className="text-body-1 font-medium text-metal-900 dark:text-white">Email notifications</p>
            </div>
            <AccordionIcon className="rounded-md bg-metal-50 p-1.5 dark:bg-metal-800">
              <ICaretDown className="text-metal-600 dark:text-metal-300" size={20} />
            </AccordionIcon>
          </AccordionAction>
          <AccordionContent className="p-5">
            <div className="space-y-5">
              <div className="flex items-start gap-x-2.5">
                <div>
                  <Checkbox
                    className="border-metal-200 dark:border-metal-500"
                    defaultChecked={true}
                    id="c8"
                    variant="circle"
                  />
                </div>
                <div className="-mt-1 space-y-1.5">
                  <Label htmlFor="c8" className="text-body-3 font-medium text-metal-900">
                    All activity
                  </Label>
                  <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
                    You are assigned a task, added as a collaborator, something you follow is updated, or you are
                    @mentioned
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-x-2.5">
                <div>
                  <Checkbox
                    className="border-metal-200 dark:border-metal-500"
                    defaultChecked={false}
                    id="c7"
                    variant="circle"
                  />
                </div>
                <div className="-mt-1 space-y-1.5">
                  <Label htmlFor="c7" className="text-body-3 font-medium text-metal-900">
                    Mentions
                  </Label>
                  <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
                    Only when you are @mentioned
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-x-2.5">
                <div>
                  <Checkbox
                    className="border-metal-200 dark:border-metal-500"
                    defaultChecked={false}
                    id="c9"
                    variant="circle"
                  />
                </div>
                <div className="-mt-0.5 space-y-1.5">
                  <Label htmlFor="c9" className="text-body-3 font-medium text-metal-900">
                    Nothing
                  </Label>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionAction className="items-start px-5 py-5">
            <div className="flex items-center justify-start gap-4 text-left">
              <IBellSlash color="#1B4DFF" size={32} />
              <p className="text-body-1 font-medium text-metal-900 dark:text-white">Do not disturb</p>
            </div>
            <AccordionIcon className="rounded-md bg-metal-50 p-1.5 dark:bg-metal-800">
              <ICaretDown className="text-metal-600 dark:text-metal-300" size={20} />
            </AccordionIcon>
          </AccordionAction>
          <AccordionContent className="p-5">
            <div className="space-y-5">
              <div className="flex items-start gap-x-2.5">
                <div>
                  <Checkbox
                    className="border-metal-200 dark:border-metal-500"
                    defaultChecked={true}
                    id="c10"
                    variant="circle"
                  />
                </div>
                <div className="-mt-1 space-y-1.5">
                  <Label htmlFor="c10" className="text-body-3 font-medium text-metal-900">
                    All activity
                  </Label>
                  <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
                    You are assigned a task, added as a collaborator, something you follow is updated, or you are
                    @mentioned
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-x-2.5">
                <div>
                  <Checkbox
                    className="border-metal-200 dark:border-metal-500"
                    defaultChecked={false}
                    id="C11"
                    variant="circle"
                  />
                </div>
                <div className="-mt-1 space-y-1.5">
                  <Label htmlFor="C11" className="text-body-3 font-medium text-metal-900">
                    Mentions
                  </Label>
                  <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
                    Only when you are @mentioned
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-x-2.5">
                <div>
                  <Checkbox
                    className="border-metal-200 dark:border-metal-500"
                    defaultChecked={false}
                    id="12"
                    variant="circle"
                  />
                </div>
                <div className="-mt-0.5 space-y-1.5">
                  <Label htmlFor="12" className="text-body-3 font-medium text-metal-900">
                    Nothing
                  </Label>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default Notifications
