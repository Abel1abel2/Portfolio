
const Card = ({count,text,resize}) => {
  return (
        <div className='group perspective-[1000px] '>
        <div className={`${resize?'w-[100px] h-[100px]':'lg:w-[180px] lg:h-[180px]'} md:w-[130px] md:h-[130px] w-[100px] p-3 h-[100px] rounded-[100%] bg-[#000000] shadow-[40px_50px_25px_-40px_rgb(0,0,0,0),0px_25px_25px_-5px_rgb(0,0,0,0.2)] [transform-style:preserve-3d] transition-all duration-500 ease-in-out group-hover:[transform:rotate3d(1,1,0,30deg)] group-hover:shadow-[30px_50px_25px_-40px_rgb(0,0,0,0.3),0px_25px_30px_0px_rgb(0,0,0,0.1)]`}>
              <div className='flex flex-col justify-center items-center top-[50%] rounded-[100%] w-full h-full' >
                <h1 className='font-poppins sm:text-[36px] md:text-[48px] lg:text-[64px] text-[28px] font-bold '>{count}</h1>
                <p className='font-light'>{text}</p>
                </div>
            </div>
 
        </div>
  )
}

export default Card