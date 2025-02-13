'use client'
import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from 'keep-react'

const AvatarGroups = () => {
  return (
    <AvatarGroup>
      <Avatar className="size-6">
        <AvatarImage src="/images/avatar/avatar-1.png" />
        <AvatarFallback>KR</AvatarFallback>
      </Avatar>
      <Avatar className="size-6">
        <AvatarImage src="/images/avatar/avatar-2.png" />
        <AvatarFallback>KR</AvatarFallback>
      </Avatar>
      <Avatar className="size-6">
        <AvatarImage src="/images/avatar/avatar-3.png" />
        <AvatarFallback>KR</AvatarFallback>
      </Avatar>
      <Avatar className="size-6">
        <AvatarImage src="/images/avatar/avatar-4.png" />
        <AvatarFallback>KR</AvatarFallback>
      </Avatar>
      <Avatar className="size-6">
        <AvatarImage src="/images/avatar/avatar-5.png" />
        <AvatarFallback>KR</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  )
}

export default AvatarGroups
