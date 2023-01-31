import Layout from "components/Layout"
import Button from "components/Button"
import Input from "components/Input"

import { REGEXP } from "src/constants/regexp"

import { useComponentLogic } from "./hooks"

import { FaFacebook, FaGoogle } from "react-icons/fa"

const Login = () => {
  const { register, handleSubmit, errors, onSubmit } = useComponentLogic()

  return(
    <Layout noFooter>
      <section className="h-screen relative bg-left-top bg-no-repeat bg-contain bg-login-banner">
        <div className="flex flex-1 flex-col absolute left-[60%] top-[45%] translate-y-[-50%] min-w-[393px]">
          <p className="text-heading-3 font-label font-extrabold">
            Masuk
          </p>

          <div className="flex mt-3">
            <p className="text-heading-5 text-gray-50 font-semibold">
              Belum punya akun?
            </p>

            <a 
              href="#"
              className="text-heading-5 text-blue-100 font-semibold ml-2 hover:underline"
            >
              Daftar di sini
            </a>
          </div>
          
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-8">
            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="Masukkan email"
              className="mb-4"
              register={register}
              errors={errors}
              required={{ value: true, message: "Email harus diisi" }}
              pattern={{value: REGEXP.email, message: "Email tidak valid"}}
            />
            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="Masukkan password"
              className="mb-4"
              register={register}
              errors={errors}
              required={{ value: true, message: "Password harus diisi" }}
            />
            <Button
              className="mt-4"
            >
              Masuk
            </Button>
            <p className="text-heading-5 text-gray-70 my-4">Atau masuk dengan</p>
            <Button
              className="mt-4 bg-red-100 flex justify-center gap-2 hover:bg-red-100"
            >
              <FaGoogle size={20}/>
              <p>Google</p>
            </Button>
            <Button
              className="mt-4 bg-facebook flex justify-center gap-2 hover:bg-facebook"
            >
              <FaFacebook size={20}/>
              <p>Facebook</p>
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default Login