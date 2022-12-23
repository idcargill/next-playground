import React from 'react';
import Image, { StaticImageData } from 'next/image';
import fishInSpace from '/public/images/goldfish-in-space.jpeg';


type map = {
  [key:string]: any;
}
const radiusMap:map = {
  full: '100%',
  half: '25%',
}

type RoundImageProps = {
  src: StaticImageData;
  alt: string;
  radius: keyof map; 
}


const RoundImage = ({src, alt, radius}: RoundImageProps) => {
  const fill:string = radiusMap[radius]
 return (
   <Image src={src} alt={alt} height={200} style={{ borderRadius: fill }} placeholder='blur'/>
 )
}

const FishImage = (): JSX.Element => {
  return (
      <RoundImage src={fishInSpace} alt="Picture of a fish" radius='full'/>
  )
}


export default FishImage;
