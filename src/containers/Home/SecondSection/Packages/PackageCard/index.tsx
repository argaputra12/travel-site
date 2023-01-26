import Image from "next/image"

import Button from "components/Button"

import { AiFillStar } from "react-icons/ai"

type PackageCardProps = {
  image : {
    src : StaticImageData
    alt : string
  }
}

const PackageCard = ({image} : PackageCardProps) => {
  return(
    <article className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden w-[393px]">
      <div className="relative w-full h-[268px]">
        <Image
          src={image.src}
          alt={image.alt}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      <div className="flex flex-col p-4">
        <div className="flex items-center mb-4">
          <AiFillStar className="text-yellow-400"/>
          <p className="text-heading text-gray-70 ml-1">
            4.6 (1.000+ Review)
          </p>
        </div>

        <p className="text-heading-3 text-gray-100 font-label font-bold">
          Colloseum, Roma
        </p>
        <p className="text-heading-4 text-gray-70 mb-4">Italia</p>

        <p className="text-heading-3 text-gray-100 font-bold mb-4">
          Rp. 20.000.000
        </p>

        <p className="text-heading-5 text-gray-70 mb-4">
          Untuk 1 Orang, tiket pesawat, penginapan 5 malam, tour guide, makan
          siang, makan malam, transportasi travel
        </p>

        <div className="flex justify-between gap-3">
          <Button className=" bg-white text-primary-blue border border-primary-blue">
            Lihat detail
          </Button>
          <Button>Pesan</Button>
        </div>
      </div>
    </article>
  ) 
}

export default PackageCard