import Image from 'next/image'

import Rating from './Rating'

type TestimonialCardProps = {
  image: {
    src: StaticImageData
    alt: string
  }
  data: {
    name: string
    city: string
    province: string
    description: string
    destination: string
    location: string
    date: string
  }
}

const TestimonialCard = ({...props} : TestimonialCardProps) => {
  return(
    <div className="flex flex-col bg-white rounded-xl shadow-w-[288px] h-[281px] p-4">
      <div className="flex mb-4">
        <div className="relative rounded-full overflow-hidden h-16 w-16 mr-3">
          <Image
            src={props.image.src}
            alt={props.image.alt}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>

        <div className="flex flex-col">
          <p className="text-heading-4 text-gray-100 font-label font-bold mb-1">
            {props.data.name}
          </p>
          <p className="text-heading-5 text-gray-50 font-bold">
            {props.data.city}, {props.data.province}
          </p>
        </div>
      </div>

      <Rating />

      <p className="text-heading-5 text-gray-70 my-4">
        {props.data.description}
      </p>

      <p className="text-heading-5 text-gray-100 font-bold">
        {props.data.destination}, {props.data.location}
      </p>
      <p className="text-heading-6 text-gray-50">{props.data.date}</p>
    </div>
  )
}

export default TestimonialCard