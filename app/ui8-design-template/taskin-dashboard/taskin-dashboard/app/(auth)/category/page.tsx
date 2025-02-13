import NextPrevSteps from '@/components/onboard/NextPrevSteps'
import UserCategories from '@/components/onboard/UserCategories'

const UserCategory = () => {
  return (
    <div className="shape col-span-12 grid min-h-screen place-items-center xl:col-span-5">
      <div className="mx-auto max-w-[370px] p-4">
        <div className="mx-auto max-w-[338px] space-y-1 text-center">
          <h2 className="text-heading-6 font-semibold text-metal-900">What&lsquo;s your main objective?</h2>
          <p className="text-body-4 font-normal text-metal-600">
            Your choice won&lsquo;t restrict Keep&lsquo;s features.
          </p>
        </div>
        <UserCategories />
        <NextPrevSteps previousLink="/user-role" nextLink="/" nextText="Complete" />
      </div>
    </div>
  )
}

export default UserCategory
