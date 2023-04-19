import React from 'react'
import { BiPlus } from '@/data/icons'

type Props = {}

export default function AddTask({}: Props) {
  return (
    <button className='px-6 py-3 w-full border-2 border-dashed hover:shadow-md transition dark:border-dashboard-active/50 rounded-lg bg-[#f2f4f5]'>
        <span className='flex text-[#7D8088] justify-center gap-[15px] items-center'>
        <BiPlus />
        <p>Add Task</p>
        </span>
    </button>
  )
}
