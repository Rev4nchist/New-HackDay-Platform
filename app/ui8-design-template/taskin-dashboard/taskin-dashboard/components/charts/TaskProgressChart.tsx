'use client'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from 'keep-react'
import { Pie, PieChart } from 'recharts'

const TaskProgressChart1 = () => {
  const chartData = [
    { name: 'Completed', value: 82, fill: '#005BEA' },
    { name: 'Incomplete', value: 18, fill: '#E9EFF7' },
  ]
  const chartConfig = {
    value: {
      label: 'Progress',
    },
  } satisfies ChartConfig

  return (
    <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[144px] max-w-[144px]">
      <PieChart>
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Pie data={chartData} dataKey="value" nameKey="name" innerRadius={30} />
      </PieChart>
    </ChartContainer>
  )
}

const TaskProgressChart2 = () => {
  const chartData = [
    {
      value: 12,
      name: 'In Review',
      fill: '#D638EE',
    },
    {
      value: 12,
      name: 'Done',
      fill: '#38D6EF',
    },
    {
      value: 24,
      name: 'To Do',
      fill: '#9631F5',
    },
    {
      value: 46,
      name: 'Doing',
      fill: '#3CAAFA',
    },
    {
      value: 6,
      name: 'In Progress',
      fill: '#E9EFF6',
    },
  ]
  // const chartData = [
  //   { name: 'Completed', value: 82, fill: '#005BEA' },
  //   { name: 'Incomplete', value: 18, fill: '#E9EFF7' },
  // ]
  const chartConfig = {
    value: {
      label: 'Progress',
    },
  } satisfies ChartConfig

  return (
    <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[144px]">
      <PieChart>
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Pie data={chartData} dataKey="value" nameKey="name" />
      </PieChart>
    </ChartContainer>
  )
}

export { TaskProgressChart1, TaskProgressChart2 }
