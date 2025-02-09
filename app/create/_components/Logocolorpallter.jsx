import React from 'react'
import HeadeaingDescription from './HeadeaingDescription'
import Lookcup from '@/app/_data/Lookcup'
import colorPalettes from '@/app/_data/color'

function Logocolorpallter() {
  return (




    <div className='my-10'>
        <HeadeaingDescription
        title={Lookcup.LogoColorPaletteTitle}
         description={ Lookcup.LogoColorPaletteDesc}/>
          <div>
        {color.map((pallet,index)=>(
          <div> {pallet.color.map()}
            </div>

        ))}
    </div>
   
    </div>
  )
}

export default Logocolorpallter