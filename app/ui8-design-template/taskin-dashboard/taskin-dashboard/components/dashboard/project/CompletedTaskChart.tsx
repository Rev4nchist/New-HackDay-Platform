'use client'
import { ChartConfig, ChartContainer } from 'keep-react'
import { Cell, Label, Pie, PieChart } from 'recharts'

const CompletedTaskChart = () => {
  const chartData = [
    { task: 'Completed', progress: 82, fill: '#3CAAFA' },
    { task: 'Incomplete', progress: 18, fill: '#9631F5' },
  ]
  const COLORS = [
    { start: '#45D8FF', end: '#005BEA' },
    { start: '#E9EFF7', end: '#E9EFF7' },
  ]
  const chartConfig = {
    tasks: {
      label: 'Task Progress',
    },
  } satisfies ChartConfig

  return (
    <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[200px]">
      <PieChart>
        <defs>
          {chartData.map((entry, index) => (
            <linearGradient key={entry.task} id={`myGradient${index}`}>
              <stop offset="0%" stopColor={COLORS[index % COLORS.length].start} />
              <stop offset="100%" stopColor={COLORS[index % COLORS.length].end} />
            </linearGradient>
          ))}
        </defs>
        <Pie data={chartData} dataKey="progress" nameKey="task" innerRadius={50} strokeWidth={5}>
          {chartData.map((entry, index) => (
            <Cell key={entry.task} color={entry.fill} fill={`url(#myGradient${index})`} />
          ))}
          <Label
            content={({ viewBox }) => {
              if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                return (
                  <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-metal-900 text-heading-6 font-medium dark:fill-white">
                      82%
                    </tspan>
                  </text>
                )
              }
            }}
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  )
}

export default CompletedTaskChart
