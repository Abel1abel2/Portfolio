import {Canvas} from '@react-three/fiber'
import {Html} from '@react-three/drei'
import PcSetup from './PcSetup'
import Light from './Light'

import { Suspense } from 'react'
const View = () => {
 
  return (
    <>
    <div className="w-full h-[300px] mt-20 lg:mt-0 md:h-[500px] lg:h-screen">
      <Canvas 
        camera={{ fov: 70, near: 0.1, far: 4000, position: [0, 2, 2] }} 
        dpr={[1, 2]} // Improves resolution on high-DPI small screens
      >
        <Light />
        <Suspense fallback={<Html center style={{ color: 'white' }}>loading...</Html>}>
          <PcSetup position={[-0.3, 0.5, 2]} rotation={[0, -Math.PI * 0.5, 0]} scale={1} />
        </Suspense>
      </Canvas>
    </div>
    </>
  )
}

export default View