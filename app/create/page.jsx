 "use client"

import React, { useState } from 'react'
import LogoTitle from './_components/LogoTitle'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'


function CreateLogo() {
const [step,setstep]=useState(1)
const [formdata,setformdata]=useState() 
const onHandleInputChange=(field,value)=>{
    setformdata(prev=(
        {
            ...prev,
            [field]: value

        }
    ))

}



  return (
    <div className='mt-28 p-10 border rounded-xl 2xl:mx-72'> 
    {step==1?<LogoTitle onHandleInputChange={(v)=>onHandleInputChange('title',v)}/>:null}
        

 <div className=' flex items-center justify-between mt-10'>
{step!==1&&<Button variant ="outline" onClick={()=>setstep(step-1)}> <ArrowLeft/>Previous</Button>}
<Button onClick={()=>setstep(step+1)}> <ArrowRight />Continue</Button>
 </div>
    </div>
  ) 
}

export default CreateLogo