import { useHelper} from '@react-three/drei'
import {useRef} from 'react'
import * as THREE from 'three'


const Light = () => {

    const point=useRef()
    const direct=useRef()
       useHelper(point,THREE.PointLightHelper,0.1)
    useHelper(direct,THREE.DirectionalLightHelper,1)
  return (
    <>
    <directionalLight  intensity={5} color='#9191f5'   rotate-z={-Math.PI*0.5} position={[-3,0,0]}/> 
    <ambientLight intensity={3}  />
    <pointLight   position={[-0.7,0.5,-0.8]} color='#f74545' intensity={3}/>
  
    </>
  )
}

export default Light
