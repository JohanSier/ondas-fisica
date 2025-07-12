const SimulationCard = ({title, src, click}) => {
  return (
    <div onClick={click} className='cursor-pointer text-center w-fit px-15 pt-10 pb-6 bg-white rounded-[1.5rem] hover:opacity-86'>
      <img className="m-auto"src={src} alt={`${title} image`}/>
      <p className='mt-5 whitespace-nowrap text-black text-xl inline-flex font-semibold'>{title}</p>
    </div>
  )
}

export default SimulationCard
