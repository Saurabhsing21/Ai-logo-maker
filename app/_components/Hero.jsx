"use client"

import React, { useState } from 'react'
import Lookcup from '../_data/Lookcup'
import { Button } from '@/components/ui/button'
import Link from 'next/link';

function Hero() {
     const [logoTittle, setLogotitle]=useState();
    return (
        <div className='flex items-center mt-32 flex-col gap-5'>

            <h2 className='text-pink-600 text-5xl  text-center font-bold'>

                {Lookcup.HeroHeading}
            </h2>
            <h2 className='  text-5xl  text-center font-bold'>

                {Lookcup.HeroSubheading}
            </h2>
            <p className='text-lg text-gray-500 text-center'>
                {Lookcup.HeroDesc}
            </p>
    <div className=' flex gap-6 w-full max-w-2xl mt-10'>
                <input placeholder={Lookcup.Inputplaceholder}
                 className='p-3  border rounded-md w-full shadow-md'
                 onChange={(event)=>setLogotitle(event?.target.value)}/>
<div >
<Link href={'/create?tittle'+logoTittle}>

<Button className='w-full p-6'>
    Get started
</Button>

</Link>
</div>

</div>
  
        </div>
    )
}

export default Hero