'use client'

import { userCategory } from '@/data/data'
import { cn } from 'keep-react/utils'

const UserCategories = () => {
  return (
    <div className="space-y-3 pb-6 pt-8">
      {userCategory.map((card) => (
        <div
          key={card.id}
          className={cn(
            'flex items-start gap-3 rounded-xl border bg-white p-4',
            card.active ? 'border-primary-500' : 'border-metal-100',
          )}>
          <div className="mt-0.5">
            <card.Icon size={24} className="text-primary-500" />
          </div>
          <div className="space-y-1.5">
            <h3 className="text-body-3 font-medium text-metal-900">{card.title}</h3>
            <p className="text-body-4 font-normal text-metal-600">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default UserCategories
