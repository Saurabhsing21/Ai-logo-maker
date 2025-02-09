import React from 'react'
import HeadeaingDescription from './HeadeaingDescription'
import Lookcup from '@/app/_data/Lookcup'

function LogoDesc({onHandleInputChange}) {
  return (
    <div className='my-10'>
        <HeadeaingDescription title={Lookcup.LogoDescTitle}
        description={Lookcup.LogoDescDesc}/>
         <input type='text' placeholder='Enter your logo '
      className='p-4 border rounded-lg mt-5  w-full'
      onChange={(e)=>onHandleInputChange(e.target.value)}/>


    </div>
  )
}

export default LogoDesc