'use client'
import { Button, Input, Modal, ModalContent, ModalDescription, ModalTitle, VisuallyHidden } from 'keep-react'
import moment from 'moment'
import { ArrowRight, CaretLeft, CaretRight, Clock, UserCirclePlus, VideoCamera } from 'phosphor-react'
import { useState } from 'react'
import {
  Calendar,
  HeaderProps,
  momentLocalizer,
  SlotInfo,
  stringOrDate,
  ToolbarProps,
  View,
  Views,
} from 'react-big-calendar'
import withDragAndDrop, { EventInteractionArgs } from 'react-big-calendar/lib/addons/dragAndDrop'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { SubmitHandler, useForm } from 'react-hook-form'
const localizer = momentLocalizer(moment)

interface IEvent {
  id: number
  title: string
  projectName: string
  allDay: boolean
  start: stringOrDate
  end: stringOrDate
}

type NewEvent = {
  start: stringOrDate
  end: stringOrDate
}

const DnDCalendar = withDragAndDrop<IEvent, object>(Calendar)

export const calendarEvents: IEvent[] = [
  {
    id: 1,
    title: 'Project Kickoff Meeting',
    projectName: 'Mobile App Development',
    allDay: false,
    start: new Date(2024, 7, 12, 8, 0),
    end: new Date(2024, 7, 12, 8, 45),
  },
  {
    id: 2,
    title: 'Requirements Gathering',
    projectName: 'Website Redesign',
    allDay: false,
    start: new Date(2024, 7, 12, 9, 0),
    end: new Date(2024, 7, 12, 9, 45),
  },
  {
    id: 3,
    title: 'Sprint Planning',
    projectName: 'E-commerce Platform',
    allDay: false,
    start: new Date(2024, 7, 12, 10, 0),
    end: new Date(2024, 7, 12, 10, 45),
  },
  {
    id: 4,
    title: 'Technical Review',
    projectName: 'Cloud Migration',
    allDay: false,
    start: new Date(2024, 7, 12, 11, 0),
    end: new Date(2024, 7, 12, 11, 45),
  },
  {
    id: 5,
    title: 'Stakeholder Meeting',
    projectName: 'Data Analytics Dashboard',
    allDay: false,
    start: new Date(2024, 7, 12, 13, 0),
    end: new Date(2024, 7, 12, 13, 45),
  },
  {
    id: 6,
    title: 'Risk Assessment Review',
    projectName: 'Security Upgrade',
    allDay: false,
    start: new Date(2024, 7, 12, 14, 0),
    end: new Date(2024, 7, 12, 14, 45),
  },
  {
    id: 7,
    title: 'Team Status Update',
    projectName: 'Website Redesign',
    allDay: false,
    start: new Date(2024, 7, 13, 9, 0),
    end: new Date(2024, 7, 13, 9, 45),
  },
  {
    id: 8,
    title: 'Sprint Review',
    projectName: 'E-commerce Platform',
    allDay: false,
    start: new Date(2024, 7, 13, 10, 0),
    end: new Date(2024, 7, 13, 10, 45),
  },
  {
    id: 9,
    title: 'Client Presentation',
    projectName: 'Mobile App Development',
    allDay: false,
    start: new Date(2024, 7, 13, 11, 0),
    end: new Date(2024, 7, 13, 11, 45),
  },
  {
    id: 10,
    title: 'Resource Planning',
    projectName: 'Security Upgrade',
    allDay: false,
    start: new Date(2024, 7, 13, 14, 0),
    end: new Date(2024, 7, 13, 14, 45),
  },
  {
    id: 11,
    title: 'Budget Review',
    projectName: 'Mobile App Development',
    allDay: false,
    start: new Date(2024, 7, 14, 8, 0),
    end: new Date(2024, 7, 14, 8, 45),
  },
  {
    id: 12,
    title: 'Sprint Retrospective',
    projectName: 'E-commerce Platform',
    allDay: false,
    start: new Date(2024, 7, 14, 10, 0),
    end: new Date(2024, 7, 14, 10, 45),
  },
  {
    id: 13,
    title: 'Quality Assurance Meeting',
    projectName: 'Data Analytics Dashboard',
    allDay: false,
    start: new Date(2024, 7, 14, 13, 0),
    end: new Date(2024, 7, 14, 13, 45),
  },
  {
    id: 14,
    title: 'Change Control Board',
    projectName: 'Security Upgrade',
    allDay: false,
    start: new Date(2024, 7, 14, 14, 0),
    end: new Date(2024, 7, 13, 14, 45),
  },
  {
    id: 15,
    title: 'Documentation Review',
    projectName: 'Website Redesign',
    allDay: false,
    start: new Date(2024, 7, 15, 9, 0),
    end: new Date(2024, 7, 15, 9, 45),
  },
  {
    id: 16,
    title: 'User Acceptance Testing',
    projectName: 'E-commerce Platform',
    allDay: false,
    start: new Date(2024, 7, 15, 10, 0),
    end: new Date(2024, 7, 15, 10, 45),
  },
  {
    id: 17,
    title: 'Performance Review',
    projectName: 'Cloud Migration',
    allDay: false,
    start: new Date(2024, 7, 15, 11, 0),
    end: new Date(2024, 7, 15, 11, 45),
  },
  {
    id: 18,
    title: 'Vendor Management',
    projectName: 'Security Upgrade',
    allDay: false,
    start: new Date(2024, 7, 15, 14, 0),
    end: new Date(2024, 7, 15, 14, 45),
  },
  {
    id: 19,
    title: 'Cost Analysis',
    projectName: 'Mobile App Development',
    allDay: false,
    start: new Date(2024, 7, 16, 8, 0),
    end: new Date(2024, 7, 16, 8, 45),
  },
  {
    id: 20,
    title: 'Stakeholder Communication',
    projectName: 'Website Redesign',
    allDay: false,
    start: new Date(2024, 7, 16, 9, 0),
    end: new Date(2024, 7, 16, 9, 45),
  },
  {
    id: 21,
    title: 'Infrastructure Review',
    projectName: 'Cloud Migration',
    allDay: false,
    start: new Date(2024, 7, 16, 11, 0),
    end: new Date(2024, 7, 16, 11, 45),
  },
  {
    id: 22,
    title: 'Data Migration Planning',
    projectName: 'Data Analytics Dashboard',
    allDay: false,
    start: new Date(2024, 7, 16, 13, 0),
    end: new Date(2024, 7, 16, 13, 45),
  },
  {
    id: 23,
    title: 'Project Closure Meeting',
    projectName: 'Security Upgrade',
    allDay: false,
    start: new Date(2024, 7, 16, 14, 0),
    end: new Date(2024, 7, 16, 14, 45),
  },
]
const RBToolbar = (event: ToolbarProps) => {
  return (
    <div className="flex items-center justify-between py-3">
      <p className="text-body-1 font-medium text-metal-900 dark:text-white">{event.label}</p>
      <div className="flex items-center gap-3">
        <button
          onClick={() => {
            event.onNavigate('PREV')
          }}>
          <CaretLeft className="text-metal-400 dark:text-white" size={20} />
        </button>
        <button onClick={() => event.onNavigate('NEXT')}>
          <CaretRight className="text-metal-400 dark:text-white" size={20} />
        </button>
      </div>
    </div>
  )
}
const RBHeader = (event: HeaderProps) => {
  const { label } = event
  const newLabel = label.split(' ')
  return (
    <div className="space-y-1 py-1.5">
      <p className="text-body-5 font-normal text-metal-400 lg:text-body-4 dark:text-metal-100">{newLabel[1]}</p>
      <p className="hidden text-body-3 font-medium text-metal-600 lg:block lg:text-body-1 dark:text-metal-300">
        {newLabel[0]}
      </p>
    </div>
  )
}

type Inputs = {
  title: string
  projectName: string
}

const BigCalendar = () => {
  const [open, setOpen] = useState(false)
  const [newEvent, setNewEvent] = useState<NewEvent>()
  const [allEvents, setAllEvents] = useState<IEvent[]>(calendarEvents)
  const [date, setDate] = useState(new Date('2024-08-12'))
  const [view, setView] = useState<View>(Views.WORK_WEEK)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (newEvent?.start && newEvent?.end) {
      const event: IEvent = {
        id: calendarEvents.length + 1,
        title: data.title,
        projectName: data.projectName,
        allDay: false,
        ...newEvent,
      }

      setAllEvents([...allEvents, event])
      setOpen(false)
      setNewEvent(undefined)
      reset()
    }
  }

  const handleViewChange = (view: View) => {
    setView(view)
  }

  const handleDragAndDropEvent = ({ event, end, start }: EventInteractionArgs<IEvent>) => {
    const newEvents = allEvents.map((e) => {
      if (e.id === event.id) {
        return {
          ...e,
          start,
          end,
        }
      }
      return e
    })

    setAllEvents(newEvents)
  }
  const handleSelectSlot = (slot: SlotInfo) => {
    if (slot.action !== 'click') {
      setOpen(true)
      setNewEvent({
        start: slot.start,
        end: slot.end,
      })
    } else {
      setOpen(false)
      setNewEvent(undefined)
    }
  }

  return (
    <>
      <DnDCalendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        views={['work_week', 'day']}
        view={view}
        date={date}
        onView={handleViewChange}
        draggableAccessor="title"
        selectable
        onEventDrop={handleDragAndDropEvent}
        onSelectSlot={handleSelectSlot}
        onNavigate={(date) => {
          setDate(date)
        }}
        style={{ height: '900px', overflow: 'auto' }}
        min={new Date(2025, 1, 0, 8, 0, 0)}
        max={new Date(2025, 1, 0, 18, 0, 0)}
        components={{
          toolbar: RBToolbar,
          header: RBHeader,

          event: ({ event }) => {
            return (
              <div className="-mt-1">
                <p className="text-body-4 font-medium text-inherit">{event.title}</p>
                <p className="text-body-5 font-normal text-inherit">{event.projectName}</p>
              </div>
            )
          },
        }}
      />

      <Modal open={open} onOpenChange={setOpen} showCloseIcon={false}>
        <ModalContent className="max-w-[500px] rounded-2xl p-6">
          <VisuallyHidden>
            <ModalTitle />
            <ModalDescription />
          </VisuallyHidden>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <fieldset>
              <div className="space-y-0.5">
                <input
                  {...register('title', {
                    required: 'New Event',
                  })}
                  id="event-title"
                  type="text"
                  placeholder="New Event"
                  className="block h-6 w-full border-none bg-transparent outline-none"
                />
                {errors.title && <p className="text-body-4 font-medium text-error-500">{errors.title.message}</p>}
              </div>
            </fieldset>
            <fieldset>
              <Input
                {...register('projectName')}
                id="event-projectName"
                placeholder="Add projectName"
                className="h-5 border-none px-0 py-0 text-body-5 font-medium text-metal-900 placeholder:text-body-5 placeholder:text-metal-300 focus-visible:ring-0"
              />
            </fieldset>
            <fieldset className="flex items-center gap-4 border-y border-metal-50 py-2.5 dark:border-metal-800/50">
              <div>
                <UserCirclePlus weight="fill" className="size-5 text-metal-600 dark:text-metal-300" />
              </div>
              <input
                type="email"
                placeholder="Add guest"
                className="w-full border-none bg-transparent text-body-4 font-medium text-metal-400 outline-none"
              />
            </fieldset>
            <fieldset className="flex items-center gap-4 border-y border-metal-50 py-2.5 dark:border-metal-800/50">
              <div>
                <VideoCamera weight="fill" className="size-5 text-metal-600 dark:text-metal-300" />
              </div>
              <p className="text-body-4 font-medium text-metal-400">Add location or call</p>
            </fieldset>
            <fieldset className="flex items-center gap-4 border-y border-metal-50 py-2.5 dark:border-metal-800/50">
              <div>
                <Clock weight="fill" className="size-5 text-metal-600 dark:text-metal-300" />
              </div>
              {newEvent?.start && newEvent?.end ? (
                <div className="flex items-center gap-3 text-body-4 font-medium text-metal-400">
                  <p>{moment(newEvent.start, 'hh:mm a').format('hh:mm a')}</p>
                  <span>
                    <ArrowRight className="size-4 text-metal-600 dark:text-metal-300" />
                  </span>
                  <p>{moment(newEvent.end, 'hh:mm a').format('hh:mm a')}</p>
                </div>
              ) : (
                <div className="flex items-center gap-3 text-body-4 font-medium text-metal-400">
                  <p>Select slot</p>
                </div>
              )}
            </fieldset>

            <Button type="submit" className="w-full">
              Add Event
            </Button>
          </form>
        </ModalContent>
      </Modal>
    </>
  )
}

export default BigCalendar
