import { useState } from "react"

import { InputProps } from "./interfaces"

import { FaEye, FaEyeSlash } from "react-icons/fa"

const Input = ({...props}: InputProps) => {
  const [hidePassword, setHidePassword] = useState(true)
  const [inputType, setInputType] = useState(props.type)
  const isInputError = props.errors[props.name] && props.errors
  const inputErrorHint = `${props.name}-input-error-hint`

  const handleEyeClick = () => {
    setHidePassword(!hidePassword)
    
    if(props.type === "password" && hidePassword === true) {
      setInputType("text")
    } else {
      setInputType("password")
    }
  }

    return (
      <label 
        htmlFor={props.name}
        className={`relative text-heading-5 font-label font-semibold w-full ${props.className}`}
      >
        <div className="mb-3">
          {props.label}
        </div>

        <input
          {...props.register(props.name, {
            required: props.required,
            pattern: props.pattern
          })}
          type={inputType}
          id={props.name}
          placeholder={props.placeholder}
          className="border appearance-none rounded-lg border-gray-70 text-heading-5 text-gray-50 py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-100 transform transition-all duration-150"
          aria-describedby={inputErrorHint}
        />

        {
          props.type === "password" ? (
            <button
              type="button"
              className={
                `h-6 w-6 absolute top-[55%] right-4 ${isInputError ? "top-[57%]" : null }}`
              }
              onClick={handleEyeClick}
            >
              {
                hidePassword ?
                  <FaEyeSlash className="h-5 w-5" />
                  : <FaEye className="h-5 w-5" /> 
              }
            </button>
          ) : null 
        }

        {
          isInputError ? (
            <span 
              className="text-xs text-red-100 mt-1 ml-3"
              id={inputErrorHint}
            >
              {props.errors[props.name].message}
            </span>
          ) :
          null
        }
      </label>
    )
}

export default Input