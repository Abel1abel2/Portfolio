import { useState } from 'react'
 import {imgs} from '../assets/index.js' 
 import ToolTip from './ToolTip.jsx'
  const NavBar = () => { const [icon,setIcon]=useState('')
     return (
     <> {/*<Card section='Home' ml='ml-[105px]' />*/} 
     {/*<Card section='Project' ml='ml-[185px]' />*/} 
     {/*<Card section='Experience' ml='ml-[253px]' />*/} 
     <div className='fixed top-[25%]  sm:top-[calc(100vh-100px)] w-[60px] sm:w-[30%] z-50 sm:left-[10%]  h-[300px] sm:h-[100px]'>
      
     
      
         <div className='absolute  sm:top-[28px] w-[50px] sm:w-full h-full sm:h-[52px] rounded-[15px]  sm:px-[10px]  py-[20px]  sm:py-[10px] bg-white '> 
           
            <div className='flex flex-col h-full w-full sm:flex-row justify-between items-center   sm:items-center sm:justify-around    '> 
              
               
               <div className='relative  ' onMouseEnter={()=>setIcon('Home')} onMouseLeave={()=>setIcon('')} > 
                  {icon=='Home'? <ToolTip section='Home'  ml='sm:left-1/2 top-1/2 sm:-top-7 -translate-y-1/2 -translate-x-1/2'  />:null}
              <a href='#home'><img  className='w-[24px] h-[24px] cursor-pointer' src={imgs.Home} alt='no icon' /></a>
               </div>
                <div className='relative  ' onMouseEnter={()=>setIcon('Project')} onMouseLeave={()=>setIcon('')} > 

                 {icon=='Project'? <ToolTip section='Project'  ml='sm:left-1/2 top-1/2  sm:-top-7 - -translate-y-1/2  -translate-x-1/2'  />:null}
               <a href='#project'><img  className='w-[24px] h-[24px] cursor-pointer' src={imgs.Projects} alt='no icon' /></a>
               </div>

                <div className='relative  ' onMouseEnter={()=>setIcon('Experience')} onMouseLeave={()=>setIcon('')} > 
                 {icon=='Experience'? <ToolTip section='Experience'  ml='sm:left-1/2 top-1/2  sm:-top-7 - -translate-y-1/2  -translate-x-1/2'  />:null}
               <a href='#experience'><img  className='w-[24px] h-[24px] cursor-pointer' src={imgs.Experience} alt='no icon' /></a>
               </div>

                <div className='relative  ' onMouseEnter={()=>setIcon('Tools')} onMouseLeave={()=>setIcon('')} > 
                 {icon=='Tools'? <ToolTip section='Tools'  ml='sm:left-1/2 top-1/2  sm:-top-7 -  -translate-y-1/2  -translate-x-1/2'  />:null}
               <a href='#tech'><img  className='w-[24px] h-[24px] cursor-pointer' src={imgs.Skills} alt='no icon' /></a>
               </div>
              
               <div className='relative  ' onMouseEnter={()=>setIcon('Connect')} onMouseLeave={()=>setIcon('')} > 
                 {icon=='Connect'? <ToolTip section='Connect'  ml='sm:left-1/2 top-1/2  sm:-top-7 - -translate-y-1/2   -translate-x-1/2'  />:null}
               <a href='#connect'><img  className='w-[24px] h-[24px] cursor-pointer' src={imgs.Connect} alt='no icon' /></a>
               </div>
             </div>
           </div>
          
          </div>
           </> 
            ) }
 export default NavBar