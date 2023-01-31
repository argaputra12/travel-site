import { FormInputs } from "./interfaces";
import { 
  SubmitHandler,
  useForm 
} from "react-hook-form";

export const useComponentLogic = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log("data::", data);
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit
  };
}