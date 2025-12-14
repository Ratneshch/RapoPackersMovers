import HeroBanner from '@/components/HeroBanner'
import OurSerives from '@/components/OurSerives'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-screen '>
      <HeroBanner/>
      <OurSerives/>
      <WhyChooseUs/>
    </div>
  )
}

export default page