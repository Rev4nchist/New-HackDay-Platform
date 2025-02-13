export type ID = string | number

export type Column = {
  id: ID
  title: string
}

export interface ITask {
  id: ID
  columnId: ID
  title: string
  deadline: string
  teams: { id: number; avatar: string }[]
}

export interface ColumnCardProps {
  deleteColumn: (id: ID) => void
  column: Column
  updateTitle: (id: ID, title: string) => void
  createColumn: (id: ID, position: 'left' | 'right') => void
  editTask: (taskId: ID) => void
  addNewTask: (columnId: ID) => void
  tasks: ITask[]
}
