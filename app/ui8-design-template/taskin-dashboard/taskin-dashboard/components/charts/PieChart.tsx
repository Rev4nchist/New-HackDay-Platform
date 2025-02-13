// 'use client'

// import { Cell, CircleProgress, CircleProgressLine, CircleProgressText, Pie, PieChart } from 'keep-react'
// import { useEffect, useState } from 'react'

// const ProgressChart = () => {
//   return (
//     <CircleProgress progress={82} className="h-full max-h-[140px] w-full max-w-[140px]">
//       <CircleProgressLine strokeWidth={3.8} className="stroke-metal-50" strokeColor="stroke-primary-500" />
//       <CircleProgressText className="text-heading-6 font-medium text-metal-600">82%</CircleProgressText>
//     </CircleProgress>
//   )
// }

// const data = [
//   {
//     value: 12,
//     name: 'In Review',
//     color: '#D638EE',
//   },
//   {
//     value: 12,
//     name: 'Done',
//     color: '#38D6EF',
//   },
//   {
//     value: 24,
//     name: 'To Do',
//     color: '#9631F5',
//   },
//   {
//     value: 46,
//     name: 'Doing',
//     color: '#3CAAFA',
//   },
//   {
//     value: 6,
//     name: 'In Progress',
//     color: '#E9EFF6',
//   },
// ]

// const ProgressChart2 = () => {
//   const [mount, setMount] = useState(false)

//   useEffect(() => {
//     setMount(true)

//     return () => setMount(false)
//   }, [])
//   if (mount) {
//     return (
//       <PieChart width={160} height={170}>
//         <Pie data={data} dataKey="value" labelLine={false}>
//           {data.map((entry) => (
//             <Cell key={entry.value} fill={entry.color}>
//               {entry.value}%
//             </Cell>
//           ))}
//         </Pie>
//       </PieChart>
//     )
//   }
// }

// export { ProgressChart, ProgressChart2 }
