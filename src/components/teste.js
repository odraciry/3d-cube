import { OrbitControls, Stars } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useEffect, useState } from "react";
import styled from "styled-components"
import { SphereBufferGeometry } from "three"

function Box() {
    
    const [cor, setCor] = useState("#115F4F")
    function changeBackgroundColor() {
        const colors = ["#115F4F", "#69828F", "#1F797E", "#7D7C84"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setCor(randomColor)
      }

      setInterval(changeBackgroundColor, 5000);
        
    return (
        <mesh>
            <boxBufferGeometry attach='geometry' args={[15, 10, 15]} />
            <meshLambertMaterial attach="material" color={cor} />
        </mesh>
    )
}

function MySphere() {
    return (<></>
        // <SphereBufferGeometry
        //     attach="geometry"
        // />
    );
}

export default function Teste() {

    return (
        <StyleBox>
            <Canvas id="canvas">
                <OrbitControls />
                <ambientLight intensity={0.6} />
                <spotLight position={[0, 20, 0]} angle={.1} />
                <Stars
                    count={50000}
                    size={2}
                    opacity={0.9}
                />
                <Box />
                <MySphere />
            </Canvas>
        </StyleBox>
    )

}



export const StyleBox = styled.div`
            width: 100%;
            height: 100vh;
            background: rgb(105,90,151);
background: radial-gradient(circle, rgba(105,90,151,1) 0%, rgba(17,18,17,1) 100%);
                #canvas{
                    width: 100%;
                    height: 100vh;
                }
            `