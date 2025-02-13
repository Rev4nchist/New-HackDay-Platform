'use client'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from 'keep-react'
import { LabelList, Pie, PieChart } from 'recharts'

export const progressTaskData = [
  { id: 1, progress: 'doing', taskProgress: 46, fill: '#3CAAFA' },
  { id: 2, progress: 'todo', taskProgress: 24, fill: '#9631F5' },
  { id: 3, progress: 'done', taskProgress: 12, fill: '#38D6EF' },
  { id: 4, progress: 'inreview', taskProgress: 12, fill: '#D638EE' },
  { id: 5, progress: 'other', taskProgress: 6, fill: '#E9EFF7' },
]

const ProgressTask = () => {
  const chartConfig = {
    taskProgress: {
      label: 'taskProgress',
    },
    doing: {
      label: 'Doing',
    },
    todo: {
      label: 'To Do',
    },
    done: {
      label: 'Done',
    },
    inreview: {
      label: 'In Review',
    },
    other: {
      label: 'Other',
    },
  } satisfies ChartConfig

  return (
    <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[200px]">
      <PieChart>
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Pie data={progressTaskData} dataKey="taskProgress" nameKey="progress">
          <LabelList
            dataKey="progress"
            className="fill-white"
            stroke="none"
            fontSize={12}
            formatter={(value: keyof typeof chartConfig) =>
              `${progressTaskData.find((item) => item.progress === value)?.taskProgress}%`
            }
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  )
}

export default ProgressTask
