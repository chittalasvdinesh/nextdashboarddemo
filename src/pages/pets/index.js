import Image from 'next/image';
import React from 'react'
import img from '../../../public/1.jpg'
 const Pets = () => {
 const imageCount=['1','2','3','4','5'];



  return (
    <div>
              <Image src={img} placeholder='blur' alt='pet-image' width="200"  height="400"/>
        {imageCount.map((image)=>{
            return <div key={image} >
              {/* <img src={`/${image}.jpg`} alt='pet-image' width="200"  height="400"/> */}
              <Image src={`/${image}.jpg`} alt='pet-image' width="200"  height="400"/>

            </div>
        })}
    </div>
  )
}

export default Pets;
