
const Skills = ({data,text}) => {
  
  return (
    <div className='z-10 sm:px-[10%] px-[5%] grid sm:grid-cols-5 grid-cols-4 gap-8 mt-5  '>
        {
       data.filter((item)=>(item.text==text)).map((arr)=>arr.tools.map(img=><img className='sm:w-12 sm:h-12 w-8 h-8' src={img} />))
         
        }
       
         </div>
  )
}

export default Skills