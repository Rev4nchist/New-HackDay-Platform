import Notify from '@/components/dashboard/notification/Notify'
import PageHeader from '@/components/shared/PageHeader'

const page = () => {
  return (
    <div className="mx-auto h-screen overflow-hidden rounded-none bg-metal-25 xl:h-[calc(100vh-32px)] xl:rounded-2xl dark:bg-metal-900">
      <PageHeader>
        <p className="text-body-3 font-medium text-metal-900 lg:text-body-1 dark:text-white">Notification</p>
      </PageHeader>
      <Notify />
    </div>
  )
}

export default page
