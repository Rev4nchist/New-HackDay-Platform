import { buttonVariants } from 'keep-react'
import { cn } from 'keep-react/utils'
import Link from 'next/link'
import { FC } from 'react'
import { ICaretLeft } from '../Icons/Icons'

export interface NextPrevStepsProps {
  className?: string
  previousLink?: string
  previousText?: string
  nextText?: string
  nextLink?: string
}

const NextPrevSteps: FC<NextPrevStepsProps> = ({
  className,
  previousLink = '/sign-up',
  nextLink = '/strong-password',
  previousText = 'Back',
  nextText = 'Continue',
}) => {
  return (
    <div className={cn('flex w-full items-center gap-2 pt-6', className)}>
      <Link href={previousLink} className={cn(buttonVariants({ color: 'secondary', variant: 'outline' }), 'flex-2')}>
        <ICaretLeft size={16} />
        {previousText}
      </Link>
      <Link href={nextLink} className={cn(buttonVariants({ color: 'primary' }), 'flex-1')}>
        {nextText}
      </Link>
    </div>
  )
}

export default NextPrevSteps
