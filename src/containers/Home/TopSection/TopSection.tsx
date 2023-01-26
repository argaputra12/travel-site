import Container from 'components/Container'
import Button from 'components/Button'
import InfoItem from './InfoItem'

const TopSection = () => {
  return (
    <section className="h-screen bg-right-top bg-no-repeat bg-home-banner">
      <Container>
        <div className='flex flex-col pt-[112px] pb-[58px]'>

          <div className='flex flex-col mb-[174px]'>

            <h1 className='font-bold text-heading-1 font-label text-gray-100 w-[700px] mb-8'>
              Jelajahi Dunia yang Indah dengan Satu Sentuhan
            </h1>
            <p className='text-heading-3 text-gray-70 w-[526px] mb-7'>
              Jelajahi dunia yang indah hanya dengan satu sentuhan dengan pesan tiket di Travel
              kamu akan mendapatkan pelayanan terbaik untuk wisata liburanmu kemana saja kapan saja
            </p>
            <Button className='w-[200px] h-[56px] text-heading-4 mt-6'>
              Cari Tiket
            </Button>

          </div>

          <div className='flex gap-40 mx-auto'>
            <InfoItem
              title='+100'
              subtitle='Destinasi'
            />
            <InfoItem
              title='+1000'
              subtitle='Wisatawan'
            />
            <InfoItem
              title='+50'
              subtitle='Paket'
            />
            <InfoItem
              title='+30.000'
              subtitle='Pengalaman'
            />
          </div>

        </div>
      </Container>
    </section>
  )
}

export default TopSection