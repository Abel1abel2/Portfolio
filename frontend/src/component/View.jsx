import {Canvas} from '@react-three/fiber'
import {Html} from '@react-three/drei'
import PcSetup from './PcSetup'
import Light from './Light'

import { Suspense } from 'react'
const View = ({responsive}) => {
 
  return (
    <>
    <Canvas camera={{fov:70,near:0.1,far:4000,position: [0,2,2]}} dpr={1} >
      <Light />
    
    <Suspense fallback={<Html center style={{ color: 'white' }}>loading...</Html>}>
    <PcSetup position={responsive?[-0.1,1.6,1.8]:[-0.3,0.5,2]} rotation={[0,-Math.PI*0.5,0]} scale={responsive?0.2:1} />
    </Suspense>
    </Canvas>
    </>
  )
}

export default View