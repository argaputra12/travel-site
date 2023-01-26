import React from 'react'
import Image from 'next/image'

type CategoryCardProps = {
  image : {
    src : StaticImageData
    alt : string
  }
  text : string
}

const CategoryCard = ({image, text}) =>{
  return (
    <div className="flex flex-col w-[160px]">
      <div className="relative w-full h-[179px] rounded-xl overflow-hidden mb-5">
        <Image
          src={image.src}
          alt={image.alt}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <p className='text-heading-3 text-gray-100 font-bold'>
        {text}
      </p>
    </div>
  )
}

export default CategoryCard