import NextPrevSteps from '@/components/onboard/NextPrevSteps'
import { InputOTP, InputOTPGroup, InputOTPItem } from 'keep-react'
import Link from 'next/link'

const Verification = () => {
  return (
    <div className="shape col-span-12 grid min-h-screen place-items-center xl:col-span-5">
      <div className="mx-auto max-w-[370px] p-4">
        <div className="mx-auto max-w-[338px] space-y-1 text-center">
          <h2 className="text-heading-6 font-semibold text-metal-900">Enter Verification Code</h2>
          <p className="text-body-4 font-normal text-metal-600">
            We&apos;ve sent a code to <span className="text-metal-900">zakir@staticmania.com</span>
          </p>
        </div>
        <div className="flex flex-col items-center py-8">
          <InputOTP maxLength={5}>
            <InputOTPGroup>
              <InputOTPItem index={0} />
              <InputOTPItem index={1} />
              <InputOTPItem index={2} />
              <InputOTPItem index={3} />
              <InputOTPItem index={4} />
            </InputOTPGroup>
          </InputOTP>
          <p className="pt-3 text-body-4 font-medium text-metal-600">
            Your link expires in <span className="text-metal-900">14:59</span>
          </p>
          <NextPrevSteps previousLink="/sign-up" nextLink="/strong-password" nextText="Verify" />
        </div>
        <div className="pt-8">
          <p className="text-center text-body-4 font-normal text-black">
            Did&apos;t receive the code?{' '}
            <Link className="text-primary-500" href="/sign-up">
              Resend
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Verification
