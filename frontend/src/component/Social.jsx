import { imgs } from "../assets"

const Social=()=>{

    return(
        <>
            <div className=' z-100 fixed w-full px-10 '>

                <div className='flex justify-between  items-center '>
                <div>
                    <a href='#home'><img className='w-25 h-25 cursor-pointer' src={imgs.logo} alt='no logo'/></a>
                </div>
                
                <div className='flex justify-between items-center space-x-5 '>
                    <div>
                        <a href='https://github.com/Abel1abel2' ><img className='w-8 h-8 cursor-pointer' src={imgs.github} alt='no github'/></a>
                    </div>
                    <div>
                        <a href='https://www.linkedin.com/in/abel-girma-865a99314/'><img className='w-8 h-8' src={imgs.linkedin} alt='no link' /></a>
                    </div>
                </div>
                </div>

            </div>
        
        
        </>

    )
}
export default Social