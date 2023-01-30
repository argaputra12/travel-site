import Layout from "components/Layout"
import Button from "components/Button"
import Input from "components/Input"

const Login = () => {
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
          
          <form action="" className="flex flex-col mt-8">
            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="Masukkan email"
              className="mb-4"
            />
            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="Masukkan password"
              className="mb-4"
            />
            <Button
              className="mt-4"
            >
              Masuk
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default Login