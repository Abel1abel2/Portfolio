import {projects} from '../assets/index'
const Project = () => {
  return (
    <div id='project' className='  py-10  px-3  md:w-[60%] lg:w-[50%] md:ml-[calc(50%-120px)] lg:ml-[calc(60%-170px)] h-[70%] '>
      
      <div className='flex flex-col space-y-10 h-full  ml-[50px]  '>
           
            <div className='sm:text-[32px]  lg:px-2 text-[18px] font-delta'>Projects</div>
          
          
            <div className=' flex flex-col '>
                <div className=' px-5 flex space-x-3 py-10 items-center w-[100%]'>

                    <div className='w-[50%] flex flex-col  space-y-5 justify-between '>
                        <a href='https://mern-auth-frontend-silk.vercel.app/'><h1 className='cursor-pointer text-[14px] sm:text-[24px] text-[#71A7C8] font-poppins'>{projects[0].title}</h1></a>
                        <p className='sm:text-[14px] text-[11px] font-poppins'>{projects[0].content}</p>
                    </div>
                    <div className='bg-[#D9D9D9]/8 w-[50%] '>
                        <a href='https://mern-auth-frontend-silk.vercel.app/'><img className='cursor-pointer' src={projects[0].img} /></a>
                        <div className='px-1 py-1 flex space-x-2 overflow-hidden'>
                            {
                                projects[0].icons.map((item)=><img src={item} className='w-3 h-3 sm:w-6 sm:h-6' />)
                            }
                        </div>
                    </div>

                </div>
               <div className='  px-5 flex space-x-3 py-10 items-center w-[100%]'>

                    <div className='w-[50%] flex flex-col  space-y-5 justify-between '>
                         <a href='https://buna-shop-g65f.vercel.app/'><h1 className='cursor-pointer text-[14px] sm:text-[24px] text-[#71A7C8] font-poppins'>{projects[1].title}</h1></a>
                        <p className='sm:text-[14px] text-[11px]  font-poppins'>{projects[1].content}</p>
                    </div>
                    <div className='bg-[#D9D9D9]/8 w-[50%] '>
                        <a href='https://buna-shop-g65f.vercel.app/'><img className='cursor-pointer' src={projects[1].img} /></a>
                          <div className='px-1 py-1 flex space-x-2 overflow-hidden'>
                            {
                                projects[1].icons.map((item)=><img src={item} className='w-3 h-3 sm:w-6 sm:h-6' />)
                            }
                        </div>
                    </div>

                </div>
               <div className='  px-5 flex space-x-3 py-10 items-center w-[100%]'>

                    <div className='w-[50%] flex flex-col  space-y-5 justify-between '>
                        <a href='https://lalibela-view.vercel.app/'><h1 className='text-[14px] cursor-pointer sm:text-[24px] text-[#71A7C8] font-poppins'>{projects[2].title}</h1></a>
                        <p className='sm:text-[14px] text-[11px]  font-poppins'>{projects[2].content}</p>
                    </div>
                    <div className='bg-[#D9D9D9]/8 w-[50%] '>
                        <a href='https://lalibela-view.vercel.app/'><img className='cursor-pointer' src={projects[2].img} /></a>
                          <div className='px-1 py-1 flex space-x-2 overflow-hidden'>
                            {
                                projects[2].icons.map((item)=><img src={item} className='w-3 h-3 sm:w-6 sm:h-6'/>)
                            }
                        </div>
                    </div>

                </div>
              <div className='  px-5 flex space-x-3 py-10 items-center w-[100%]'>

                    <div className='w-[50%] flex flex-col  space-y-5 justify-between '>
                         <a href='https://pc-setup-room.vercel.app/'><h1 className='cursor-pointer sm:text-[24px] text-[14px] text-[#71A7C8] font-poppins'>{projects[3].title}</h1></a>
                        <p className='sm:text-[14px] text-[11px]  font-poppins'>{projects[3].content}</p>
                    </div>
                    <div className='bg-[#D9D9D9]/8 w-[50%] '>
                        <a href='https://pc-setup-room.vercel.app/'><img  className='cursor-pointer' src={projects[3].img} /></a>
                          <div className='px-1 py-1 flex space-x-2 overflow-hidden'>
                            {
                                projects[3].icons.map((item)=><img src={item} className='w-3 h-3 sm:w-6 sm:h-6' />)
                            }
                        </div>
                    </div>

                </div>
               
            </div>
      </div>


    </div>
  )
}

export default Project
