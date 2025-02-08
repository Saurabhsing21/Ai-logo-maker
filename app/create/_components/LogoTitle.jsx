"use client"
import React, { useState } from 'react'
import HeadeaingDescription from './HeadeaingDescription'
import Lookcup from '@/app/_data/Lookcup'
import { useSearchParams } from 'next/navigation'

function LogoTitle({onHandleInputChange}) {
    const SerchPramas= useSearchParams()
    const [title,setitle]=useState(SerchPramas?.get('title')??'')




    
  return (
    <div>
      <HeadeaingDescription  title={Lookcup.LogoTitle}
      description={Lookcup.LogoTitleDesc }
      />  
      <input type='text' placeholder='Enter your logo '
      className='p-4 border rounded-lg mt-5  w-full'
      defaultValue={title}
      onChange={(e)=>onHandleInputChange(e.tareget.value)}/>
    </div>
  )
}

export default LogoTitle 