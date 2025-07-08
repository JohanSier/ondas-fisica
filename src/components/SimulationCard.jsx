import React from 'react'

const SimulationCard = ({title, src}) => {
  return (
    <div className='text-center w-fit px-15 pt-10 pb-6 bg-white rounded-[1.5rem]'>
      <img className="m-auto"src={src} alt={`${title} image`}/>
      <p className='mt-5 whitespace-nowrap text-black text-2xl inline-flex font-semibold'>{title}</p>
    </div>
  )
}

export default SimulationCard
