import { useRef} from 'react';
import emailjs from '@emailjs/browser'
import {toast,ToastContainer} from 'react-toastify'
const Connect = () => {
  // 1. Create state variables to hold the user input
  const form=useRef()
 

  const sendEmail=(e)=>{
    e.preventDefault()
    emailjs.sendForm('service_v406ykp','template_cnu9e0s',form.current, {
        publicKey: 'cW2whLa58hH9GHc-C',
      }).then((result)=>{
        console.log(result)
      toast.success("Message successfully sent")
    },(error)=>{
      toast.error(error)
    })
  }

  return (
    <form ref={form} onSubmit={sendEmail} id='connect' className='w-full  sm:w-[80%] md:w-[50%] sm:ml-10 md:ml-[calc(60%-170px)] h-full flex items-center justify-center  sm:p-4'>
      {/* Fixed layout spacing so elements don't collapse to 0px */}
      <div className='w-full z-10 max-w-2xl px-15 flex flex-col space-y-6  p-6 rounded-xl shadow-md bg-black/50'>

        <div className='w-full ml-[10%] sm:ml-0 sm:p-3 rounded sm:text-center '>
          <h1 className='font-delta sm:text-[32px]  text-[18px]'>Lets Connect</h1>
        </div>

        {/* Name and Email Inputs */}
        <div className='w-full  flex flex-col md:flex-row gap-4 p-4 rounded'>
          <div className='flex items-center space-x-3 flex-1 '>
            <h1 className='w-16 font-semibold text-[14px] sm:text-[16px]'>Name</h1>
            {/* Added value and onChange handler so you can type */}
            <input 
              className='w-full text-black bg-white h-10 rounded-lg px-3 outline-none focus:ring-2 focus:ring-blue-500' 
              type='text' 
              placeholder="Enter Name"
              name='fname'
            
            />
          </div> 
          
          <div className='flex items-center space-x-3 flex-1'>
            <h1 className='w-16 font-semibold text-[14px] sm:text-[16px] '>Email</h1>
            <input 
              className='w-full bg-white text-black h-10 rounded-lg px-3 outline-none focus:ring-2 focus:ring-blue-500' 
              type='email' 
              placeholder="Enter Email" 
             
              name='femail'
           
            />
          </div> 
        </div>

        {/* Message Textarea */}
        <div className='w-full flex flex-col sm:flex-row  p-4 rounded gap-2'>
          <h1 className='w-16 font-semibold pt-1 text-[14px] sm:text-[16px]'>Message</h1>
          <textarea 
            className='bg-white text-black h-32 w-full px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 resize-none' 
            placeholder='write message...'
            name='message'  
           
          />
        </div>

        {/* Submit Button Row */}
        <div className='w-full  p-3 mb-4 rounded flex justify-end'>
         <button className='sm:w-[30%] w-[50%] h-[40px] sm:h-[60px] rounded-[10px] border-none cursor-pointer bg-black  '>
              <span className='font-poppins block rounded-[10px] bg-blue-500 px-[5px] sm:px-[10.5px] py-[10px] sm:py-[15.5px] transform translate-y-[-0.2em] transition-all duration-100 ease-in hover:translate-y-[-0.33em] active:translate-y-0 sm:text-[16px] text-[12px]'>Send Message</span>
              </button>
        </div>

      </div>
      <ToastContainer/>
    </form>
  );
};

export default Connect;
