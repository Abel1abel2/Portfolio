
import NavBar from "./component/NavBar"
import Social from "./component/Social"
import Hero from "./sections/Hero"
import Tech from './sections/Tech'
import Experience from './sections/Experience'
import Project from "./sections/Project"
import Connect from "./sections/Connect"
import Stars from "./component/Stars"

function App() {
 

  return (
    <>
    <div className='w-full h-full relative'>
     <Stars/>
    <Social/>
    <NavBar/>
    <Hero/>
    <Tech />
    <Experience/>
    <Project />
  
    <Connect />
    </div>
    
  
    
   
  
    
  
  
    </>
  )
}

export default App
