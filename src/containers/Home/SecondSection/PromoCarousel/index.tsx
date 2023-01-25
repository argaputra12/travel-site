import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import BorobudurImage from "/public/assets/home/borobudur.png";

import PromoCard from "./PromoCard";

import { 
  IoIosArrowForward,
  IoIosArrowBack
} from "react-icons/io";

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 720
    },
    items: 2,
    partialVisibilityGutter: 100
  }
}

const PromoDestination = [
  {
    image: {
      src: BorobudurImage,
      alt: "Borobudur"
    },
    text: {
      destination: "Borobudur",
      city: "Magelang",
      country: "Indonesia",
      price: "1.000.000",
      discount: 20,
      final: "800.000",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed.",
      date: "27-11-2020 10:00"
    }
  },
  {
    image: {
      src: BorobudurImage,
      alt: "Borobudur"
    },
    text: {
      destination: "Borobudur",
      city: "Magelang",
      country: "Indonesia",
      price: "1.000.000",
      discount: 20,
      final: "800.000",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed.",
      date: "27-11-2020 10:00"
    }
  },
  {
    image: {
      src: BorobudurImage,
      alt: "Borobudur"
    },
    text: {
      destination: "Borobudur",
      city: "Magelang",
      country: "Indonesia",
      price: "1.000.000",
      discount: 20,
      final: "800.000",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed.",
      date: "27-11-2020 10:00"
    }
  },
  {
    image: {
      src: BorobudurImage,
      alt: "Borobudur"
    },
    text: {
      destination: "Borobudur",
      city: "Magelang",
      country: "Indonesia",
      price: "1.000.000",
      discount: 20,
      final: "800.000",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed.",
      date: "27-11-2020 10:00"
    }
  }
]

const PromoCarousel = () => {
  return(
    <>
      <h3 className="text-heading-3 font-label font-bold pt-14 mb-4 text-white">
        Promo Liburan
      </h3>

      <Carousel
        className="py-5"
        infinite={true}
        containerClass="carousel-container"
        arrows={true}
        draggable={true}
        swipeable={true}
        responsive={responsive}
        customRightArrow={
          <button 
            type="button" 
            aria-label="Go to next slide" 
            className="absolute z-50 right-0 opacity-50 hover:opacity-100 bg-gray-30 rounded-full p-1"
          >
            <IoIosArrowForward 
              className="h-[60px] w-[60px] text-white"
            />
          </button>
        }
        customLeftArrow={
          <button 
            type="button" 
            aria-label="Go to previous slide" 
            className="absolute z-50 left-0 opacity-50 hover:opacity-100 bg-gray-30 rounded-full p-1"
          >
            <IoIosArrowBack 
              className="h-[60px] w-[60px] text-white"
            />
          </button>
        }
        partialVisbile={true}
        // centerMode={true}
      >
      {
        PromoDestination.map((item, index) => {
          return(
            <PromoCard
              key={index}
              image={item.image}
              text={item.text}
            />
          )
        })
      }
      </Carousel>
    </>
  )
}

export default PromoCarousel