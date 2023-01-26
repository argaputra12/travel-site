import TestimonialCard from "./TestimonialCard"

import ProfileImage from "public/assets/home/profile.png"

const TestimonialData = [
  {
    image: {
      src: ProfileImage,
      alt: "Profile"
    },
    data : {
      name: "John Doe",
      city: "Jakarta",
      province: "DKI Jakarta",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed semper nunc. Sed euismod, nisl eu ultricies lacinia, nunc nisl ultricies nunc, nec ultricies nisl nunc euismod nisl. Sed euismod, nisl eu ultricies lacinia, nunc nisl ultricies nunc, nec ultricies nisl nunc euismod nisl.",
      destination: "Pantai Kelingking",
      location: "Nusa Penida",
      date: "12 Januari 2021"
    }
  },
  {
    image: {
      src: ProfileImage,
      alt: "Profile"
    },
    data : {
      name: "John Doe",
      city: "Jakarta",
      province: "DKI Jakarta",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed semper nunc. Sed euismod, nisl eu ultricies lacinia, nunc nisl ultricies nunc, nec ultricies nisl nunc euismod nisl. Sed euismod, nisl eu ultricies lacinia, nunc nisl ultricies nunc, nec ultricies nisl nunc euismod nisl.",
      destination: "Pantai Kelingking",
      location: "Nusa Penida",
      date: "12 Januari 2021"
    }
  },
  {
    image: {
      src: ProfileImage,
      alt: "Profile"
    },
    data : {
      name: "John Doe",
      city: "Jakarta",
      province: "DKI Jakarta",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed semper nunc. Sed euismod, nisl eu ultricies lacinia, nunc nisl ultricies nunc, nec ultricies nisl nunc euismod nisl. Sed euismod, nisl eu ultricies lacinia, nunc nisl ultricies nunc, nec ultricies nisl nunc euismod nisl.",
      destination: "Pantai Kelingking",
      location: "Nusa Penida",
      date: "12 Januari 2021"
    }
  },
  {
    image: {
      src: ProfileImage,
      alt: "Profile"
    },
    data : {
      name: "John Doe",
      city: "Jakarta",
      province: "DKI Jakarta",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed semper nunc. Sed euismod, nisl eu ultricies lacinia, nunc nisl ultricies nunc, nec ultricies nisl nunc euismod nisl. Sed euismod, nisl eu ultricies lacinia, nunc nisl ultricies nunc, nec ultricies nisl nunc euismod nisl.",
      destination: "Pantai Kelingking",
      location: "Nusa Penida",
      date: "12 Januari 2021"
    }
  }
]

const Testimonials = () => {
  return (
    <>
      <h3 className="text-heading-3 text-gray-100 font-label font-bold pt-14 mb-1">
        Kategori Tempat
      </h3>
      <p className="text-heading-4 mb-4">
        Pendapat pelanggan tentang kami
      </p>

      <div className="flex justify-between">
        {
          TestimonialData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              image={testimonial.image}
              data={testimonial.data}
            />
          ))
        }
      </div>
    </>
  )
}

export default Testimonials