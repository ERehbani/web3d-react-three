import { useEffect, useState } from "react";
import { SRGBColorSpace } from "three";

interface VideoPlaneProps {
    position: [number, number, number];
    rotationY: [number, number, number];
    videoUrl: string
  }
  
  export const VideoPlane: React.FC<VideoPlaneProps> = ({ videoUrl, rotationY, position, ...props }) => {
    const [video] = useState(
        () => Object.assign(document.createElement('video'), {src: videoUrl, crossOrigin: 'Anonymous', loop: true, muted: true})
    )

    useEffect( () => {
        video.play()
    }, [ video ])
    return (
        <>
        <mesh castShadow receiveShadow position={position} scale={[16, 9, 1]} {...props} rotation={rotationY}>
            <planeGeometry/>
            <meshBasicMaterial >
                <videoTexture attach="map" args={[video]} colorSpace={SRGBColorSpace}/>
            </meshBasicMaterial>
        </mesh>
        </>
    )
};
