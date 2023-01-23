import React from 'react'
import './ButtonCreatePost.css'

interface ButtonCreatePostProps {
    title: string
}

export function ButtonCreatePost({ title }: ButtonCreatePostProps) {
  return (
    <button className='button_create-post'>{title}</button>
  )
}
