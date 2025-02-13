import { buttonVariants, Input, InputIcon, Label } from 'keep-react'
import { cn } from 'keep-react/utils'
import Link from 'next/link'
import { IEnvelope } from '../Icons/Icons'

const ForgotPasswordForm = () => {
  return (
    <form className="mt-8 space-y-5">
      <fieldset className="space-y-1">
        <Label htmlFor="email">Enter your email</Label>
        <div className="relative">
          <Input id="email" placeholder="example@email.com" className="ps-11" />
          <InputIcon>
            <IEnvelope size={20} color="#AFBACA" />
          </InputIcon>
        </div>
      </fieldset>
      <Link href="/sent-link" className={cn(buttonVariants({ color: 'primary' }), 'w-full')}>
        Get a Reset Link
      </Link>
    </form>
  )
}

export default ForgotPasswordForm
