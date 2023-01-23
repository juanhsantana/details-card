import React from 'react'
import './ButtonJoined.css'

interface ButtonCardProps {
    title: string
}

export function ButtonJoined({ title }: ButtonCardProps) {
  return (
    <button className='button_card'>{title}</button>
  )
}
