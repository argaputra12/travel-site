type InfoItem = {
  title: string
  subtitle: string
}

const InfoItem = ({ title, subtitle }: InfoItem) => {
  return (
    <div className="flex flex-col text-center">
      <h3 className="text-heading-1 font-bold font-label mb-2 text-gray-100">
        {title}
      </h3>
      <p className="text-heading-4 text-gray-70">
        {subtitle}
      </p>
    </div>
  )
}

export default InfoItem