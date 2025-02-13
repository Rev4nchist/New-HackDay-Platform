import { Input, InputIcon, Label, LineProgress, LineProgressBar } from 'keep-react'
import { ICheckCircle, ILock, IXCircle } from '../Icons/Icons'
import NextPrevSteps from './NextPrevSteps'

const StrongPasswordForm = () => {
  return (
    <div className="py-8">
      <form className="space-y-3">
        <fieldset className="space-y-1">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input id="password" type="password" placeholder="password" className="ps-11" />
            <InputIcon>
              <ILock size={19} color="#AFBACA" />
            </InputIcon>
          </div>
        </fieldset>
        <fieldset className="space-y-1">
          <Label htmlFor="re-password">Re-password</Label>
          <div className="relative">
            <Input id="re-password" type="password" placeholder="re-password" className="ps-11" />
            <InputIcon>
              <ILock size={19} color="#AFBACA" />
            </InputIcon>
          </div>
        </fieldset>
      </form>

      <div>
        <div className="flex w-full gap-2 pb-2 pt-3">
          <div className="flex-1">
            <LineProgress progress={100}>
              <LineProgressBar className="bg-success-500" />
            </LineProgress>
          </div>
          <div className="flex-1">
            <LineProgress progress={0}>
              <LineProgressBar />
            </LineProgress>
          </div>
          <div className="flex-1">
            <LineProgress progress={0}>
              <LineProgressBar />
            </LineProgress>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-body-5 font-normal text-metal-600">Require:</p>
          <ul className="space-y-1.5">
            <li className="flex items-center gap-1.5 text-body-5 font-normal text-metal-900">
              <span>
                <ICheckCircle size={16} className="text-success-500" weight="fill" />
              </span>
              <span>At least 8 characters</span>
            </li>
            <li className="flex items-center gap-1.5 text-body-5 font-normal text-metal-300">
              <span>
                <IXCircle size={16} className="text-metal-300" weight="fill" />
              </span>
              At least 1 uppercase
            </li>
            <li className="flex items-center gap-1.5 text-body-5 font-normal text-metal-300">
              <span>
                <IXCircle size={16} className="text-metal-300" weight="fill" />
              </span>
              At least 1 number
            </li>
          </ul>
        </div>
      </div>
      <NextPrevSteps previousLink="/sign-up" nextLink="/user-role" />
    </div>
  )
}

export default StrongPasswordForm
