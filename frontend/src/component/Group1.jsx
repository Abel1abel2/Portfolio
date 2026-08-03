import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const Group1 = ({data}) => {
    useGSAP(()=>{
    const cards=gsap.utils.toArray('.card')
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
    <div className='flex flex-col items-center justify-between py-10 h-full'>
      <div className='card lg:mt-0 sm:mt-[50px] mt-[20px]'>
        <h1>{data[0].year}</h1>
      </div>
      <div className='card2 z-50 bg-white px-1 sm:px-1 lg:px-5  md:mt-[100px] mt-[60px] sm:mt-[40px] lg:mt-0 md:px-2  w-[100px] sm:w-[100%] rounded-[10px] sm:h-[10%] h-[15%] md:h-[7%] flex flex-col space-y-2 '>
      <h1 className='text-black font-bold lg:text-[24px] md:text-[16px] text-[14px]'> {data[1].title}</h1> 
      <p className='text-black lg:text-[14px] text-[12px]'>{data[1].content}</p>
      </div>
      <div className='card -mt-[100px] md:mt-0 sm:-mt-[100px]'>
        <h1>{data[2].year}</h1>
      </div>
      <div className='card2 z-50 bg-white w-[100px] sm:w-[100%] rounded-[10px] h-[15%] sm:h-[10%] md:h-[7%] md:mb-0 sm:mb-[70px] mb-[40px] flex flex-col space-y-2 lg:px-5 md:px-2 px-1 sm:px-1  '>
        <h1 className='text-black font-bold lg:text-[24px] md:text-[16px] text-[14px]'> {data[3].title}</h1> 
      <p className='text-black lg:text-[14px] text-[12px]'>{data[3].content}</p>
      </div>

    </div>
  )
}

export default Group1
