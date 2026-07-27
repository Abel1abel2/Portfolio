import Card from "../component/Card"
import View from "../component/View"
import {useMediaQuery} from 'react-responsive'
const Hero = () => {
  const isMobile=useMediaQuery({query:'(max-width:748px)'})
   const resize=useMediaQuery({query:'(max-width:1508px)'})
   const custom=useMediaQuery({query:'(max-width:1348px)'})

  return (
    <>
    <div id='home' className='w-full h-[100dvh]] py-3 px-5 z-0 '>

        <div className='sm:flex  h-full '>
 
           {isMobile?null:
           <div className='rounded-[25px] w-[40%] h-[calc(100dvh-130px)]'>
           <div className='fixed z-0 w-[50%] h-full '>
            <View responsive={resize}/>
            </div>
            </div>} 

            <div className='  w-[90%] md:w-[60%] lg:w-[50%]  h-full ml-5 md:ml-7  sm:ml-10 '>

                <div className=' h-full'>
                    <div className='flex flex-col space-y-3   sm:px-[2%]'>
                      
                              <div className='sm:pl-[25%] px-[15%] mt-20 md:mt-8 sm:mt-1 '> 
                               
                                <h1 className='font-delta  sm:text-[48px] md:text-[32px] lg:text-[54px] text-[24px]  '>Full Stack</h1>
                                 <h1 className='font-delta sm:text-[48px] md:text-[32px] text-[24px] lg:text-[44px] text-[#71A7C8] opacity-44 sm:-mt-5 md:mt-0 -mt-2'>Developer</h1>
                              </div>

                              <div className='sm:px-[25%] px-[5%] ml-10 sm:ml-0 '>
                               
                                <p className='font-poppins'>hi i am abel girma pationate full stack dev i can turn imagination to reality lets connect and work together</p>
                              </div>

                              <div className='sm:px-[25%] px-[15%] mt-3'>
                                <a href='#connect'><button className='w-[160px] h-[60px] rounded-[10px] border-none cursor-pointer bg-black  '>
                                  <span className='font-poppins block rounded-[10px] bg-green-500 px-[10.5px] py-[15.5px] transform translate-y-[-0.2em] transition-all duration-100 ease-in hover:translate-y-[-0.33em] active:translate-y-0'>Connect</span>
                                </button></a>
                              </div>

                              <div className='sm:mt-7 mt-15  sm:px-[3%]  ml-[6%] lg:ml-[10%] w-[100%]   sm:w-[93%] flex sm:space-x-5 justify-center space-x-3  items-center z-0    '>
                                <Card count={'4+'} text={'project'} resize={custom}  />
                                <Card count={'5+'} text={'year'} resize={custom}/>
                                <Card count={'12+'} text={'skills'} resize={custom} />
                              </div>



                    </div>
                </div>
                  
            </div>
        </div>

    </div>
    </>
  ) 
}

export default Hero