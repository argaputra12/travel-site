import Image from "next/image"

import Button from "components/Button"

import BorobudurImage from "/public/assets/home/borobudur.png"

type PromoCardProps = {
  image : {
    src : StaticImageData
    alt : string
  }
  text : {
    destination : string
    city : string
    country : string
    price : string
    discount : number
    final : string
    desc : string
    date: string
  }
}

const PromoCard = ({...props}: PromoCardProps) => {
  return(
    <article className="shadow-lg bg-white rounded-xl overflow-hidden w-[500px] h-[312px] flex">
      <figure className="relative w-[212px] h-full">
        <Image
          src={props.image.src}
          alt={props.image.alt}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />

      </figure>
      <div className="flex-1 flex flex-col justify-center p-4">
        <p className="text-heading-4 text-gray-100 font-label font-bold">
          {props.text.destination}, {props.text.city}
        </p>
        <p className="text-heading-4 text-gray-70 mb-4">{props.text.country}</p>

        <div className="flex gap-1">
          <p className="text-heading-5 text-gray-70 line-through">
            Rp{props.text.price}
          </p>
          <p className="text-heading-5 text-red-100 font-bold">{props.text.discount}%</p>
        </div>

        <p className="text-[16px] font-bold text-gray-100 mb-4">
          Rp{props.text.final}
        </p>

        <p className="text-heading-5 text-gray-70 mb-4">
          {props.text.desc}
        </p>

        <p className="text-heading-5 text-gray-50 mb-4">
          Berangkat: 27-11-2020 10:00
        </p>

        <div className="flex justify-between gap-3">
          <Button className="bg-white border-blue-100 text-blue-100 border-2">
            Lihat detail
          </Button>
          <Button>Pesan</Button>
        </div>
      </div>
    </article>
  )
}

export default PromoCard