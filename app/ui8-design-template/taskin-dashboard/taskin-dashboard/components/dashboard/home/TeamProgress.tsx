import { ICaretUp } from '@/components/Icons/Icons'
import DayFilterDropdown from '@/components/shared/DayFilterDropdown'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from 'keep-react'

const TeamProgress = () => {
  const data = [
    {
      id: 1,
      name: 'Courtney Henry',
      role: 'Data Analyst Lead',
      avatar: '/images/avatar/avatar-1.png',
      progress: 50,
      total: 10,
      running: 5,
      complete: 5,
    },
    {
      id: 2,
      name: 'Dianne Russell',
      role: 'UI/UX Designer',
      avatar: '/images/avatar/avatar-2.png',
      progress: 70,
      total: 10,
      running: 2,
      complete: 8,
    },
    {
      id: 3,
      name: 'Leslie Alexander',
      role: 'Software Engineer',
      avatar: '/images/avatar/avatar-3.png',
      progress: 60,
      total: 10,
      running: 3,
      complete: 7,
    },
    {
      id: 4,
      name: 'Cameron Williamson',
      role: 'Software Engineer',
      avatar: '/images/avatar/avatar-4.png',
      progress: 60,
      total: 10,
      running: 3,
      complete: 7,
    },
  ]

  return (
    <div className="space-y-3 lg:space-y-5">
      <div className="flex items-center justify-between">
        <p className="text-body-4 font-medium text-metal-600 lg:text-body-3 dark:text-metal-300">Team progress</p>
        <DayFilterDropdown filterTitle="This month" />
      </div>
      <div>
        <Table>
          <TableHeader className="w-full [&_tr]:border-b-0">
            <TableRow>
              <TableHead className="h-8 bg-white dark:bg-metal-900">
                <div className="text-metal-5 w-[290px] font-normal text-metal-400 dark:text-metal-300">Name & role</div>
              </TableHead>
              <TableHead className="h-8 bg-white dark:bg-metal-900">
                <div className="text-metal-5 w-[70px] font-normal text-metal-400 dark:text-metal-300">Total task</div>
              </TableHead>
              <TableHead className="h-8 bg-white dark:bg-metal-900">
                <div className="text-metal-5 w-[70px] font-normal text-metal-400 dark:text-metal-300">Running</div>
              </TableHead>
              <TableHead className="h-8 bg-white dark:bg-metal-900">
                <div className="text-metal-5 w-[70px] font-normal text-metal-400 dark:text-metal-300">Complete </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id} className="w-full border-b-0">
                <TableCell>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="size-9 lg:size-12">
                        <AvatarImage src={item.avatar} />
                        <AvatarFallback>{item.name.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-body-4 font-medium text-metal-600 dark:text-metal-300">{item.name}</p>
                        <p className="text-body-5 font-normal text-metal-400">{item.role}</p>
                      </div>
                    </div>
                    <div>
                      <p className="flex items-center gap-1 text-body-4 font-medium text-success-500">
                        <ICaretUp weight="fill" size={20} />
                        {item.progress}%
                      </p>
                      <p className="text-body-5 font-medium text-metal-300">Peer Week</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{item.total}</TableCell>
                <TableCell>{item.running}</TableCell>
                <TableCell>{item.complete}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default TeamProgress
