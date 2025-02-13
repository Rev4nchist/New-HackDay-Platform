import { buttonVariants, Checkbox, Input, InputIcon, Label } from 'keep-react'
import { cn } from 'keep-react/utils'
import Link from 'next/link'
import { IEnvelope } from '../Icons/Icons'

const SignUpForm = () => {
  return (
    <div>
      <form className="space-y-5">
        <fieldset className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Input id="email" placeholder="example@email.com" className="ps-11" />
            <InputIcon>
              <IEnvelope size={19} color="#AFBACA" />
            </InputIcon>
          </div>
        </fieldset>
        <fieldset className="flex items-start gap-2.5">
          <Checkbox
            defaultChecked={true}
            id="term_condition"
            className="mt-0.5 border-metal-200 dark:border-metal-500"
          />
          <Label htmlFor="term_condition" className="text-body-4 font-normal leading-5 text-metal-900">
            I agree to the{' '}
            <Link href="/term" className="underline underline-offset-2">
              Terms of Service
            </Link>
            , and{' '}
            <Link href="/privacy" className="underline underline-offset-2">
              Privacy Policy
            </Link>
            .
          </Label>
        </fieldset>
        <Link href="/verification" className={cn(buttonVariants({ color: 'primary' }), 'w-full')}>
          Continue with email
        </Link>
      </form>

      <div className="pt-8">
        <p className="text-body-4 font-normal text-black">
          Already have an account?{' '}
          <Link className="text-primary-500" href="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUpForm
