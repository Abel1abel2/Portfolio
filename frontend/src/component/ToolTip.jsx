
const ToolTip = ({section,ml}) => {
  return (
   
    <div className={`absolute  ${ml} vclip sm:clip  pointer-events-none z-50  whitespace-nowrap `}>
    <p className='text-[16px] [writing-mode:vertical-rl] sm:[writing-mode:horizontal-tb]  '>{section}</p>
    </div>
  
  )
}

export default ToolTip