import CallToAction from '@/components/CallToAction'
import ContactUs from '@/components/ContactUs'
import CustomerReviews from '@/components/CustomerReviews'
import HeroBanner from '@/components/HeroBanner'
import OurSerives from '@/components/OurSerives'
import Process from '@/components/Process'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'

const page = () => {
  return (
    <div className='w-full  '>
      <HeroBanner/>
      <OurSerives/>
      <WhyChooseUs/>
      <Process/>
      <CustomerReviews/>
      <ContactUs/>
      <CallToAction/>
    </div>
  )
}

export default page