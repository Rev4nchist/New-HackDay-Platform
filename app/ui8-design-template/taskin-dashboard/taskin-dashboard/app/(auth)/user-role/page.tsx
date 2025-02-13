import NextPrevSteps from '@/components/onboard/NextPrevSteps'
import { Button, Label, Select, SelectAction, SelectContent, SelectGroup, SelectItem, SelectValue } from 'keep-react'

const UserRole = () => {
  const workType = [
    {
      title: 'Administrative Assistant',
      variant: false,
    },
    {
      title: 'Communications',
      variant: true,
    },
    {
      title: 'Data or Analytics',
      variant: false,
    },
    {
      title: 'Design',
      variant: true,
    },
    {
      title: 'Engineering',
      variant: false,
    },
    {
      title: 'Human Resources',
      variant: false,
    },
    {
      title: 'Marketing',
      variant: false,
    },
    {
      title: 'Sales',
      variant: false,
    },
    {
      title: 'Research and Development',
      variant: true,
    },
    {
      title: 'Other',
      variant: false,
    },
  ]
  return (
    <div className="shape col-span-12 grid min-h-screen place-items-center xl:col-span-5">
      <div className="mx-auto max-w-[370px] p-4">
        <div className="mx-auto max-w-[338px] space-y-1 text-center">
          <h2 className="text-heading-6 font-semibold text-metal-900">Select your role</h2>
          <p className="text-body-4 font-normal text-metal-600">This helps us recommend features for you.</p>
        </div>
        <div className="py-8">
          <form className="space-y-3">
            <fieldset className="w-full space-y-2">
              <Label>Enter your role</Label>
              <Select>
                <SelectAction className="w-full">
                  <div className="flex items-center gap-2.5">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 256 256">
                        <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"></path>
                      </svg>
                    </span>
                    <SelectValue placeholder="Choose one" />
                  </div>
                </SelectAction>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="executive">Executive (e.g. VP or C-suite)</SelectItem>
                    <SelectItem value="director">Director</SelectItem>
                    <SelectItem value="tm">Team member / Individual contributor</SelectItem>
                    <SelectItem value="swe">Software Engineer</SelectItem>
                    <SelectItem value="mm">Marketing Manager</SelectItem>
                    <SelectItem value="wd">Web Developer</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </fieldset>

            <fieldset className="w-full space-y-2">
              <Label>What kind of work do you do?</Label>
              <div className="flex w-full flex-wrap items-center gap-2.5">
                {workType.map((item) => (
                  <Button
                    key={item.title}
                    color="secondary"
                    size="sm"
                    variant={item.variant ? 'default' : 'outline'}
                    radius="full">
                    {item.title}
                  </Button>
                ))}
              </div>
            </fieldset>
          </form>
          <NextPrevSteps previousLink="/strong-password" nextLink="/category" />
        </div>
      </div>
    </div>
  )
}

export default UserRole
