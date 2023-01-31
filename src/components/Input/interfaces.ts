import { InputHTMLAttributes } from 'react';
import {
  UseFormRegister,
  FieldErrors,
  ValidationRule
} from 'react-hook-form';

export type InputProps = {
  name: InputHTMLAttributes<HTMLInputElement>['name'];
  type: InputHTMLAttributes<HTMLInputElement>['type'];
  label: string;
  placeholder: string;
  value?: string;
  className?: string;
  register: UseFormRegister<any>;
  errors?: FieldErrors;
  required?: string | ValidationRule<boolean>;
  pattern?: ValidationRule<RegExp>;
}