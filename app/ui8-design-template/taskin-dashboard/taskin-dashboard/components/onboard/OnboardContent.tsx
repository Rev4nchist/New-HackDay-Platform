import Logo from '@/public/images/logo/star-blow.svg'
import Image from 'next/image'
import OnboardCarousel from './OnboardCarousel'

const OnboardContent = () => {
  return (
    <div className="m-4 hidden min-h-[95vh] rounded-[20px] bg-metal-100 px-6 pt-14 xl:col-span-7 xl:block">
      <div className="mx-auto flex flex-col items-center gap-5 text-center lg:max-w-[544px]">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
          <Image height={30} width={30} src={Logo} alt="StarBlow" />
        </div>
        <div className="space-y-2">
          <h1 className="text-heading-6 font-semibold text-metal-900">Project Management Partner.</h1>
          <p className="text-body-4 font-normal text-metal-900">
            Our tool helps you take control of your projects, streamline your workflow, and significantly boost your
            productivity.
          </p>
        </div>
      </div>
      <OnboardCarousel />
    </div>
  )
}

export default OnboardContent
