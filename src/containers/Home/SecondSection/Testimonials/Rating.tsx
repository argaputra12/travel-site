import { AiFillStar } from "react-icons/ai";

const Rating = () => {
  return(
    <div className="flex gap-1 align-center">
      {
        Array.from({length: 5}, (_, i) => (        
          <AiFillStar 
            key={i} 
            className="text-yellow-400 h-[20px] w-[20px]" 
          />
        ))
      }
    </div>
  )
}

export default Rating