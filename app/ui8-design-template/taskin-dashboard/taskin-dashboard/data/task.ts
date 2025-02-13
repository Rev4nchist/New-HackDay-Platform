export interface Task {
  id: string
  columnId: '1' | '3' | '4' | '2'
  title: string
  priority: string
  assign: number
  files: number
  deadline: string
  teams: { id: number; avatar: string }[]
}

export const taskList: Task[] = [
  {
    id: '1',
    columnId: '1',
    title: 'Design the homepage',
    priority: 'High',
    assign: 3,
    files: 2,
    deadline: '25 July',
    teams: [
      { id: 1, avatar: '/images/avatar/avatar-1.png' },
      { id: 2, avatar: '/images/avatar/avatar-2.png' },
    ],
  },
  {
    id: '2',
    columnId: '1',
    title: 'Create wireframes',
    priority: 'Medium',
    assign: 2,
    files: 1,
    deadline: '10 August',
    teams: [
      { id: 3, avatar: '/images/avatar/avatar-3.png' },
      { id: 4, avatar: '/images/avatar/avatar-4.png' },
      { id: 5, avatar: '/images/avatar/avatar-5.png' },
    ],
  },
  {
    id: '3',
    columnId: '1',
    title: 'Fix login issues',
    priority: 'High',
    assign: 4,
    files: 5,
    deadline: '10 August',
    teams: [
      { id: 1, avatar: '/images/avatar/avatar-1.png' },
      { id: 2, avatar: '/images/avatar/avatar-2.png' },
    ],
  },
  {
    id: '4',
    columnId: '2',
    title: 'Set up database',
    priority: 'Low',
    assign: 1,
    files: 0,
    deadline: '5 September',
    teams: [
      { id: 3, avatar: '/images/avatar/avatar-3.png' },
      { id: 4, avatar: '/images/avatar/avatar-4.png' },
    ],
  },
  {
    id: '5',
    columnId: '2',
    title: 'Build user profiles',
    priority: 'Medium',
    assign: 5,
    files: 3,
    deadline: '18 September',
    teams: [
      { id: 5, avatar: '/images/avatar/avatar-5.png' },
      { id: 1, avatar: '/images/avatar/avatar-1.png' },
    ],
  },
  {
    id: '6',
    columnId: '2',
    title: 'Test API endpoints',
    priority: 'High',
    assign: 3,
    files: 1,
    deadline: '20 September',
    teams: [
      { id: 2, avatar: '/images/avatar/avatar-2.png' },
      { id: 3, avatar: '/images/avatar/avatar-3.png' },
    ],
  },
  {
    id: '7',
    columnId: '3',
    title: 'Review UI components',
    priority: 'Low',
    assign: 2,
    files: 4,
    deadline: '16 December',
    teams: [
      { id: 4, avatar: '/images/avatar/avatar-4.png' },
      { id: 5, avatar: '/images/avatar/avatar-5.png' },
      { id: 1, avatar: '/images/avatar/avatar-1.png' },
    ],
  },
  {
    id: '8',
    columnId: '3',
    title: 'Set up project board',
    priority: 'Medium',
    assign: 1,
    deadline: '25 December',
    files: 0,
    teams: [
      { id: 2, avatar: '/images/avatar/avatar-2.png' },
      { id: 3, avatar: '/images/avatar/avatar-3.png' },
    ],
  },
  {
    id: '9',
    columnId: '3',
    title: 'Finalize the contract',
    priority: 'High',
    assign: 2,
    files: 3,
    deadline: '10 January',
    teams: [
      { id: 4, avatar: '/images/avatar/avatar-4.png' },
      { id: 5, avatar: '/images/avatar/avatar-5.png' },
    ],
  },
  {
    id: '10',
    columnId: '4',
    title: 'Deploy application',
    priority: 'High',
    assign: 4,
    files: 5,
    deadline: '10 January',
    teams: [
      { id: 1, avatar: '/images/avatar/avatar-1.png' },
      { id: 2, avatar: '/images/avatar/avatar-2.png' },
      { id: 3, avatar: '/images/avatar/avatar-3.png' },
    ],
  },
  {
    id: '11',
    columnId: '4',
    title: 'Write documentation',
    priority: 'Low',
    assign: 1,
    files: 2,
    deadline: '14 April',
    teams: [
      { id: 4, avatar: '/images/avatar/avatar-4.png' },
      { id: 5, avatar: '/images/avatar/avatar-5.png' },
    ],
  },
  {
    id: '12',
    columnId: '4',
    title: 'Fix bug in user flow',
    priority: 'Medium',
    assign: 3,
    files: 1,
    deadline: '20 April',
    teams: [
      { id: 1, avatar: '/images/avatar/avatar-1.png' },
      { id: 2, avatar: '/images/avatar/avatar-2.png' },
    ],
  },
  {
    id: '13',
    columnId: '4',
    title: 'Plan marketing strategy',
    priority: 'High',
    assign: 5,
    files: 3,
    deadline: '25 April',
    teams: [
      { id: 3, avatar: '/images/avatar/avatar-3.png' },
      { id: 4, avatar: '/images/avatar/avatar-4.png' },
      { id: 5, avatar: '/images/avatar/avatar-5.png' },
    ],
  },
  {
    id: '14',
    columnId: '4',
    title: 'Organize team meeting',
    priority: 'Low',
    assign: 4,
    files: 0,
    deadline: '30 April',
    teams: [
      { id: 1, avatar: '/images/avatar/avatar-1.png' },
      { id: 2, avatar: '/images/avatar/avatar-2.png' },
    ],
  },
  {
    id: '15',
    columnId: '1',
    title: 'Create landing page design',
    priority: 'Medium',
    assign: 2,
    files: 4,
    deadline: '10 May',
    teams: [
      { id: 3, avatar: '/images/avatar/avatar-3.png' },
      { id: 4, avatar: '/images/avatar/avatar-4.png' },
    ],
  },
]
