'use client'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from 'keep-react'
import { Pie, PieChart } from 'recharts'

const MyProgressChart = () => {
  const chartData = [
    { task: 'Completed', progress: 7, fill: '#3CAAFA' },
    { task: 'Running', progress: 16, fill: '#9631F5' },
    { task: 'Total Task', progress: 23, fill: '#38D6EF' },
  ]

  const chartConfig = {
    tasks: {
      label: 'Task Progress',
    },
  } satisfies ChartConfig

  return (
    <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[280px]">
      <PieChart>
        <ChartTooltip content={<ChartTooltipContent />} />
        <Pie data={chartData} dataKey="progress" nameKey="task" innerRadius={50} strokeWidth={5}></Pie>
      </PieChart>
    </ChartContainer>
  )
}

export default MyProgressChart
