import NewPasswordForm from '@/components/onboard/NewPasswordForm'
import Link from 'next/link'

const NewPassword = () => {
  return (
    <div className="shape col-span-12 grid min-h-screen place-items-center xl:col-span-5">
      <div className="mx-auto max-w-[370px] p-4">
        <div className="mx-auto max-w-[338px] space-y-1 text-center">
          <h2 className="text-heading-6 font-semibold text-metal-900">Set new password</h2>
          <p className="text-body-4 font-normal text-metal-600">Secure your account with a new password.</p>
        </div>
        <NewPasswordForm />
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

export default NewPassword
