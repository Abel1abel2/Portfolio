import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const Group2 = ({data}) => {
  useGSAP(()=>{
    const cards=gsap.utils.toArray('.card1')
    cards.forEach((card)=>{
      gsap.fromTo(card,{
          autoAlpha:0,
      },{
        autoAlpha:1,
        scrollTrigger:{
          trigger:card,
          start:'top+=130 center',
          end:'bottom+=130 center',
        
          scrub:1
        }
      })
    })
    const card2=gsap.utils.toArray('.card2')
    card2.forEach((card)=>{
      gsap.fromTo(card,{
          autoAlpha:0,
      },{
        autoAlpha:1,
        
        scrollTrigger:{
          trigger:card,
          start:'top+=130 center',
          end:'bottom+=130 center',
   
          scrub:1
        }
      })
    })
    
  
    
  })
  return (
    <div className=' flex flex-col items-center justify-between py-10 h-full'>
      <div className='card1 z-50  lg:px-5   px-1 sm:px-1 mt-[50px] sm:mt-[115px] md:mt-[50px] bg-white  w-[100px] sm:w-[100%] rounded-[10px] h-[15%] sm:h-[10%] md:h-[7%] flex flex-col md:space-y-2'>
          <h1 className='text-black font-bold md:text-[16px] lg:text-[24px] text-[14px]'> {data[0].title}</h1> 
      <p className='text-black lg:text-[14px] text-[12px] '>{data[0].content}</p>
      </div>
      <div className='card2 md:mt-0 sm:-mt-[80px]'>
        {data[1].year}
      </div>
      <div className="card1 z-50 px-1 sm:px-1 lg:px-5   md:px-2 bg-white mt-[10px] md:mt-[250px] sm:mt-[80px] w-[100px] sm:w-[100%] rounded-[10px] h-[15%] sm:h-[10%] md:h-[7%] flex flex-col space-y-2 ">
         <h1 className='text-black font-bold md:text-[16px] lg:text-[24px] text-[14px]'> {data[2].title}</h1> 
      <p className='text-black lg:text-[14px] text-[12px]'>{data[2].content}</p>
      </div>
      <div className='card2   md:mb-[50px] mb-[130px] sm:mb-[150px]'>
        <h1>{data[3].year}</h1>
      </div>

    </div>
  )
}

export default Group2
