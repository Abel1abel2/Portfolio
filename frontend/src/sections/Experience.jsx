import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Group1 from '../component/Group1'
import Group2 from '../component/Group2'
import { expert } from '../assets'
import {imgs} from '../assets/index'
gsap.registerPlugin(ScrollTrigger)
const Experience = () => {
    useGSAP(()=>{
         const imgs=gsap.utils.toArray('.img')
    imgs.forEach((img)=>{
      gsap.fromTo(img,{
          autoAlpha:0,
      },{
        autoAlpha:1,
        scrollTrigger:{
          trigger:img,
          start:'top center',
          end:'bottom center',
         
          scrub:1
        }
      })
    })

     const lines=gsap.utils.toArray('.line1')
    lines.forEach((line)=>{
      gsap.fromTo(line,{
         
          scaleX:0,
      },{
        scaleX:1,
        transformOrigin:'center left',
        ease:'none',
        scrollTrigger:{
          trigger:line,
          start:'top center',
          end:'bottom center',
        
          scrub:1
        }
      })
    })
      const secondLine=gsap.utils.toArray('.line2')
    secondLine.forEach((line)=>{
      gsap.fromTo(line,{
         
          scaleX:0,
      },{
        scaleX:1,
        transformOrigin:'center right',
        ease:'none',
        scrollTrigger:{
          trigger:line,
          start:'top center',
          end:'bottom center',
       
          scrub:1
        }
      })
    })
        gsap.fromTo('.timeline',{
            scaleY:0
        },{
            scaleY:1,
            transformOrigin:'top center',
            ease:'none',
          
            scrollTrigger:{
                trigger:'.parent',
                start:'top center',
                end:'bottom center',
              
                scrub:1,
            }
        })
        gsap.fromTo('.button',{
          autoAlpha:0,
        },{
         autoAlpha:1,
          scrollTrigger:{
            trigger:'.button',
            start:'top center',
            end:'bottom center',
            scrub:1
          }
        })
    })
  return (
    <div id='experience' className=' lg:w-[50%] md:w-[60%] sm:w-[80%] w-[80%] h-[1200px] lg:h-[2200px] md:h-[1800px] sm:h-[1400px] sm:ml-[10%] ml-[10%] md:ml-[calc(60%-220px)] lg:ml-[calc(60%-170px)]  '>
       
        <div className='flex flex-col h-[1000px] lg:h-[1800px] md:h-[1600px] sm:h-[1200px]  justify-center items-center space-y-15 '>
        <div className='sm:ml-0 ml-15 '>
            <h1 className='sm:text-[32px] md:text-[32px] text-[18px] font-delta'>Experience</h1>
        </div>

        <div className='parent h-full w-full  flex justify-between px-4'>

            <div className='w-[40%] h-full'>
                <Group1 data={expert} />
            </div>

            <div className=''>
            <div className='w-full z-10 relative flex flex-col justify-between items-center '>
                <div className='img w-10 h-10 z-10   absolute top-[130px] sm:top-[180px] md:top-[120px]   rounded-[100%] bg-[#686969]'>
                    <img src={imgs.cs}  className='w-6 h-6 ml-1.5 mt-2 '/>
                </div> 
                <div className='line1 h-1 w-20  absolute left-[1px] top-[150px] sm:top-[200px] md:top-[140px] bg-white '></div>
             
                <div  className='img w-10 h-10 z-10 absolute top-[330px] sm:top-[400px] md:top-[550px] rounded-[100%] bg-[#686969]'>
                      <img src={imgs.blend}  className='w-6 h-6 ml-1.5 mt-2 '/>
                </div>
                <div className='line2 h-1 w-20 z-0 absolute right-[1px] top-[350px] sm:top-[420px] md:top-[570px]  bg-white'></div>
               
                <div  className='img w-10 h-10 z-10 absolute top-[530px] sm:top-[630px] lg:top-[1167px] md:top-[1035px] rounded-[100%] bg-[#686969]'>
                  <img src={imgs.web}  className='w-6 h-6 ml-2 mt-2 '/>
                </div>
                <div className='line1 h-1 w-20  absolute left-[1px] top-[550px] sm:top-[650px] lg:top-[1187px] md:top-[1055px] bg-white'></div>
             
                <div  className='img w-10 h-10 z-10 absolute top-[730px] sm:top-[880px] lg:top-[1585px] md:top-[1385px] rounded-[100%] bg-[#686969]'>
                  <img src={imgs.threeD}  className='w-6 h-6 ml-1.5 mt-2 '/>
                </div>
                 <div className='line2 h-1 w-20 z-0 absolute right-[1px] top-[750px] sm:top-[900px] lg:top-[1605px] md:top-[1405px] bg-white'></div>
              
                <div className='button absolute sm:top-[1070px] top-[900px]  lg:top-[1696px] md:top-[1496px] '>
              <a href={imgs.file} download='resume'><button className='w-[180px] h-[60px] rounded-[10px] border-none cursor-pointer bg-black  '>
              <span className='font-poppins block rounded-[10px] bg-blue-500 px-[10.5px] py-[15.5px] transform translate-y-[-0.2em] transition-all duration-100 ease-in hover:translate-y-[-0.33em] active:translate-y-0'>Download Resume</span>
              </button></a>
            </div>
               
            </div>
            <div className='timeline w-1 h-full rounded-lg z-0  bg-white'></div>
           
            
            
            </div>

            <div className='w-[40%] h-full '>
                <Group2 data={expert} />
            </div>
        </div>

    </div>
    </div>
  )
}

export default Experience