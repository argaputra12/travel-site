import Image from "next/image"

import Container from "components/Container/index"
import FooterInfo from "./FooterInfo"

import travelLogo from 'public/assets/travelo-logo-footer.png'

const Footer = () => {
  return (
    <footer className="">
      <Container size="xl">
        <div className="flex bg-white p-16">
          <figure>
            <Image
              src={travelLogo}
              alt="Travelo Logo"
              placeholder="blur"
              height={98}
              width={136}
            />
          </figure>

          <div className="flex justify-between flex-1 ml-32">
            <FooterInfo
              title="Info"
              content={[
                {
                  label: "About Us",
                  href: "/about",
                },
                {
                  label: "Testimonials",
                  href: "/testimoni",
                },
                {
                  label: "Contact Us",
                  href: "/kontak",
                },
              ]}
            />
            <FooterInfo
              title="Perusahaan"
              content={[
                {
                  label: 'Syarat & Ketentuan',
                  href: '/',
                },
                {
                  label: 'Kebijakan privasi',
                  href: '/',
                },
                {
                  label: 'Blog',
                  href: '/',
                },
                {
                  label: 'Bantuan pelayanan',
                  href: '/',
                },
              ]}
            />

            <FooterInfo
              title="Kontak"
              content={[
                'Jl. Dago No. 1A',
                'Bandung, Jawa Barat',
                'Indonesia',
                '(022)8080808',
                'contact@email.com',
              ]}
            />
          </div>
        </div>
      </Container>

      <div className="bg-blue-100 p-3">
        <p className="text-heading-5 text-white font-bold text-center">
          Copyright 2023 by Travelo. Proudly created with Next.js
        </p>
      </div>
    </footer>
  )
}

export default Footer