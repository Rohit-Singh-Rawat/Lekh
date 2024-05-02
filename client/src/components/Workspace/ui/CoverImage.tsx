import React from 'react'
import ci from '../../../assets/Images/LandingPage/jeremy-thomas-rMmibFe4czY-unsplash (2).jpg'
const CoverImage = () => {
  return (
    <div className='w-full h-[25vh]'>
      <img src={ci} className='h-full w-full object-cover object-top' />
    </div>
  )
}

export default CoverImage
