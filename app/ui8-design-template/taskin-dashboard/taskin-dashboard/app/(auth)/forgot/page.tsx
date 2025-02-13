import ForgotPasswordForm from '@/components/onboard/ForgotPasswordForm'

export default function Reset() {
  return (
    <div className="shape col-span-12 grid min-h-screen place-items-center xl:col-span-5">
      <div className="mx-auto max-w-[370px] p-4">
        <div className="mx-auto max-w-[338px] space-y-1 text-center">
          <h2 className="text-heading-6 font-semibold text-metal-900">Reset password</h2>
          <p className="text-body-4 font-normal text-metal-600">Enter your email to receive a password reset link.</p>
        </div>
        <ForgotPasswordForm />
      </div>
    </div>
  )
}
