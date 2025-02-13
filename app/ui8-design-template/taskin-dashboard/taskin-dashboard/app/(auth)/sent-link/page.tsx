import Link from 'next/link'

const SentLink = () => {
  return (
    <div className="shape col-span-12 grid min-h-screen place-items-center xl:col-span-5">
      <div className="mx-auto max-w-[370px] p-4">
        <div className="mx-auto max-w-[338px] space-y-1 text-center">
          <h2 className="text-heading-6 font-semibold text-metal-900">Reset link sent!</h2>
          <p className="text-body-4 font-normal text-metal-600">
            Check your <span className="text-metal-900">zakir@staticmania.com</span> inbox for instructions from us on
            how to reset your password.
          </p>
        </div>
        <div className="pt-8">
          <p className="text-center text-body-4 font-normal text-black">
            Didn't receive the code?{' '}
            <Link className="text-primary-500" href="/new-password">
              Resend
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SentLink
