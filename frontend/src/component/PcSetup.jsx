import {useGLTF, useTexture,Html} from '@react-three/drei'
import {useState,useRef} from 'react'
import * as THREE from 'three'
import {Physics,RigidBody,CuboidCollider} from '@react-three/rapier'

const PcSetup = (props) => {
   const { nodes} = useGLTF('optimized.glb')
   const [flag,setFlag]=useState(null)
   const cube=useRef()
   const chair=useRef()
   const head=useRef()
   const [light,setLight]=useState(false)
   
 const { texture, art, keyboard, screen, speaker, headset } = useTexture(
  {
    texture: 'texture.jpg',
    art: 'art.jpg',
    keyboard: 'keys.jpg',
    screen: 'screen.jpg',
    speaker: 'spotify.jpg',
    headset: 'headT.jpg'
  },
  (loadedTextures) => {
    
    const textureArray = Array.isArray(loadedTextures) ? loadedTextures : Object.values(loadedTextures);
    textureArray.forEach((tex) => {
      tex.flipY = false;
      tex.colorSpace = THREE.SRGBColorSpace;
    });
  }
);
   const handlePosition=(el,camera,size)=>{
    const vector=new THREE.Vector3()
    el.getWorldPosition(vector)
    vector.project(camera)
    const x = (vector.x * .5 + .5) * size.width
    const y = (vector.y * -.5 + .36) * size.height
    return [x, y]

   }
  

   const bounce=()=>{
     cube.current.applyImpulse({x:0.001,y:0.04,z:-0.00001},true)
   }
   const spin=()=>{
        if(chair.current){
        chair.current.applyTorqueImpulse({x:0,y:Math.PI*0.03,z:0},true)
   }}
   const playlist=['/sia.mp3','/dragon.mp3','/avici.m4a']

   const [music]=useState(()=>new Audio())
 
   const play=()=>{
      const current=Math.floor(Math.random()*playlist.length)
      music.src=playlist[current]
      setLight(true)
      music.play()
  }
  const pause=()=>{
    setLight(false)
    music.pause()
  }
  const flip=()=>{
    if(head.current){
    head.current.applyImpulse({x:0,y:0.01,z:0},true)
    head.current.applyTorqueImpulse({x:0.0001,y:0,z:0},true)
    }
  }
  
   
  return (
      <>
      {
        light? <pointLight  position={[-0.755,-1,1]} color='#58b165' intensity={20} />:null
      }
     
    
        <Physics  >
<group {...props} >
        <mesh
       
        geometry={nodes.board.geometry}
        position={[-2.212, -0.232, 0.019]}
        onPointerEnter={()=>{document.body.style.cursor='pointer'
          setFlag('board')
        }}
        onPointerLeave={()=>{document.body.style.cursor='default'
          setFlag(null)
        }}
         >
        <meshStandardMaterial map={keyboard} />
       
           </mesh> 
          <mesh
     
        geometry={nodes.screen.geometry}
        position={[-2.635, 0.164, -0.006]}
      
      >
        <meshStandardMaterial map={screen} />
        </mesh>

        <RigidBody type='fixed' colliders={false}  >
           <mesh
          
          geometry={nodes.floor.geometry}
          position={[-1.799, -0.146, 0.045]}
      >
        <meshStandardMaterial  map={texture}/>
         </mesh>
          </RigidBody>


         <mesh
       
          geometry={nodes.art2.geometry}
          position={[-2.148, 0.239, -0.996]}
      >
        <meshStandardMaterial map={art}  /> 
        </mesh>
        <CuboidCollider args={[1,0.1,1.3]} position={[-1.8, -1.03, 0]} />
        <CuboidCollider args={[1,0.8,0.1]} position={[-1.8, -0.1, -1]} />
        <CuboidCollider args={[1,0.8,0.1]} position={[-1.8, -0.1, 1.4]} />
        <CuboidCollider args={[0.1,0.8,1]} position={[-2.8, -0.1, 0.15]} />
             <CuboidCollider args={[0.1,0.8,1]} position={[-0.7, -0.1, 0.15]} />
         <CuboidCollider args={[0.16,0.02,0.12]} position={[-2.3, -0.27, 0.719]} />
     
  
       
     <RigidBody  ref={cube} gravity={0} type='dynamic'  restitution={1} friction={0}     colliders='ball'
     >
       <mesh
       
        geometry={nodes.ball.geometry}
        onPointerEnter={()=>{document.body.style.cursor='pointer'
          setFlag('ball')
        }}
        onPointerLeave={()=>{document.body.style.cursor='default'
          setFlag(null)
        }}
        onClick={bounce}
      position={[-1.147, -0.803, -0.807]} 
      >
        <meshStandardMaterial map={texture}  />
              {flag=='ball' && <Html  calculatePosition={handlePosition}>
          <div style={{  backgroundColor: 'rgba(0, 0, 0, 0.7)',width:'200px',height:'50px',borderRadius:'10px', display: 'flex',          // Enables alignment rules
                          alignItems: 'center',    
                          justifyContent: 'center' }}>
            <p style={{textAlign:'center',fontWeight:'bold',fontSize:'18px',color:'white'}}>Bounce ball</p>
            </div>
        </Html>}
        </mesh>
</RigidBody>
           <mesh
       
        geometry={nodes.speaker.geometry}
      onPointerEnter={()=>{document.body.style.cursor='pointer'
          setFlag('speaker')
       
        }}
        onPointerLeave={()=>{document.body.style.cursor='default'
          setFlag(null)
         
        }}
        onClick={play}
        onContextMenu={pause}
        position={[-2.606, -0.145, 0.755]}
      
      >
        <meshStandardMaterial map={speaker}
      

        />
         
                 {flag=='speaker'&& <Html  calculatePosition={handlePosition}>
          <div style={{  backgroundColor: 'rgba(0, 0, 0, 0.7)',width:'200px',height:'50px',borderRadius:'10px', display: 'flex',          // Enables alignment rules
  alignItems: 'center',    
  justifyContent: 'center' }}>
            <p style={{textAlign:'center',fontWeight:'bold',fontSize:'18px',color:'white'}}>Play music</p>
            </div>
        </Html>}
        </mesh>

        <RigidBody angularDamping={1.5} ref={chair} type='dynamic' colliders='cuboid'  enabledTranslations={[false, false, false]}   enabledRotations={[false, true, false]} gravity={0}   >
        <mesh
        
        geometry={nodes.chair.geometry}
       onPointerEnter={()=>{document.body.style.cursor='pointer'
          setFlag('chair')
        }}
        onPointerLeave={()=>{document.body.style.cursor='default'
          setFlag(null)
       
        }}
        onClick={spin}
        position={[-1.58, -0.2, 0.031]}
      
      >
        <meshStandardMaterial  map={texture}  />

                 {flag=='chair' && <Html  calculatePosition={handlePosition}>
          <div style={{  backgroundColor: 'rgba(0, 0, 0, 0.7)',width:'200px',height:'50px',borderRadius:'10px', display: 'flex',          // Enables alignment rules
                          alignItems: 'center',    
                          justifyContent: 'center' }}>
            <p style={{textAlign:'center',fontWeight:'bold',fontSize:'18px',color:'white'}}>Spin chair</p>
            </div>
        </Html>}
        </mesh>
         </RigidBody>


           <mesh
    
         geometry={nodes.ChairLeg002.geometry}
        position={[-1.558, -0.802, 0.023]}
      
      >
        <meshStandardMaterial  map={texture}  />


        </mesh>
<RigidBody angularDamping={1.5} ref={head} type='dynamic' colliders='cuboid' gravity={0}  >
           <mesh
       
        geometry={nodes.headset.geometry}
        onPointerEnter={()=>{document.body.style.cursor='pointer'
          setFlag('headset')
        }}
        onPointerLeave={()=>{document.body.style.cursor='default'
          setFlag(null)
        }}
        onClick={flip}
        position={[-2.203, -0.226, 0.719]}>
        <meshStandardMaterial  map={headset}  />

         {flag=='headset' && <Html  calculatePosition={handlePosition}>
          <div style={{  backgroundColor: 'rgba(0, 0, 0, 0.7)',width:'200px',height:'50px',borderRadius:'10px', display: 'flex',          // Enables alignment rules
                          alignItems: 'center',    
                          justifyContent: 'center' }}>
            <p style={{textAlign:'center',fontWeight:'bold',fontSize:'18px',color:'white'}}>Flip headset</p>
            </div>
        </Html>}
        </mesh>
              </RigidBody>
</group>
    </Physics>
        






        
        

          

        </>

  )
}

export default PcSetup
useGLTF.preload('/optimized.glb')