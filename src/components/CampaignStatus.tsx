import React from 'react'

type Props = {
    status: string
    order: number

}

export default function CampaignStatus({status, order}: Props) {
  return (
    <div className='flex items-center justify-between px-4 mb-2 rounded-md tablet:mb-4 desktop:mb-6 bg-secondary dark:bg-[#202020]'>
        <p className='text-[#858A93]'>{status}</p>
        <button className='px-3 py-2 my-2 font-medium text-white bg-black rounded dark:text-black dark:bg-white'>{order}</button>
    </div>
  )
}