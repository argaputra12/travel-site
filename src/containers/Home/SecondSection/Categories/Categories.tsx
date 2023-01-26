import CategoryCard from "./CategoryCard"
import Container from "components/Container"

import CliffImage from "public/assets/home/cliff.png"

const CategoriesData = [
  {
    image: {
      src: CliffImage,
      alt: "Cliff"
    },
    text: "Pantai"
  },
  {
    image: {
      src: CliffImage,
      alt: "Cliff"
    },
    text: "Pantai"
  },
  {
    image: {
      src: CliffImage,
      alt: "Cliff"
    },
    text: "Pantai"
  },
  {
    image: {
      src: CliffImage,
      alt: "Cliff"
    },
    text: "Pantai"
  },
  {
    image: {
      src: CliffImage,
      alt: "Cliff"
    },
    text: "Pantai"
  },
  {
    image: {
      src: CliffImage,
      alt: "Cliff"
    },
    text: "Pantai"
  },
]


const Categories = () => {
  return(
    <>
      <h3 className="text-heading-3 text-gray-100 font-label font-bold pt-14 mb-8">
        Kategori Tempat
      </h3>
      <div className="flex justify-between">
        {
          CategoriesData.map((category, index) => (
            <CategoryCard
              key={index}
              image={category.image}
              text={category.text}
            />
          ))
        }
      </div>
    </>
  )
}

export default Categories