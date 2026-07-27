import { useState } from "react"
import Skills from '../component/Skills'
import {stack} from '../assets/index'
const Tech = () => {
  const [skill,setSkill]=useState('Frontend')
  return (
    <div id='tech' className=' sm:mt-0 mt-10 md:w-[50%] w-[80%] h-[90dvh]  lg:ml-[calc(60%-200px)] md:ml-[calc(60%-150px)] ml-15  flex flex-col items-center justify-center space-y-10'>
      <div className='mt-30  '>
        <h1 className='sm:text-[48px] md:text-[32px] text-[18px] font-delta'>Teck Stack</h1>
        </div>

        <div className=' w-[100%] md:w-[90%] sm:w-[70%]'>
        <div className='contain w-[100%]  lg:h-[50px]  h-[40px] flex items-center lg:ml-10 md:ml-0  rounded-[25px] relative border-[2px] border-green-500 '>
        <input type='radio' name='options' defaultChecked id='opt1' />
        <label onClick={()=>setSkill('Frontend')} for='opt1' className='options lg:text-[18px] md:text-[14px] text-[11px]'>FrontEnd</label>
        <input type='radio' name='options' id='opt2'/>
        <label onClick={()=>setSkill('Backend')} for='opt2' className='options lg:text-[18px] md:text-[14px] text-[11px]'>BackEnd</label>
        <input type='radio' name='options' id='opt3'/>
        <label onClick={()=>setSkill('Database')} for='opt3' className='options lg:text-[18px] md:text-[14px] text-[11px]'>DataBase</label>
        <input type='radio' name='options' id='opt4'/>
        <label onClick={()=>setSkill('Software')} for='opt4' className='options lg:text-[18px] md:text-[14px] text-[11px]'>Softwares</label>
        <span className='back absolute w-[24%]  h-[28px] md:h-[30px] lg:h-[38px] left-[4px] top-[4px] bg-green-500 rounded-[25px] transition-[left] duration-[0.4s] ease-[cubic-bezier(0.17,0.88,0.32,1.15)] '></span>
        </div>
        </div>

        <div className=' w-[90%]  lg:w-[100%] h-full lg:px-[10%] px-[1%] '>
          {
            skill=='Frontend'?<Skills data={stack} text={skill} />:null
          }
          {
              skill=='Backend'?<Skills data={stack} text={skill}/>:null
          }
          {
              skill=='Database'?<Skills data={stack} text={skill}/>:null
          }
          {
              skill=='Software'?<Skills data={stack} text={skill}/>:null
          }
        </div>
    </div>
  )
}

export default Tech