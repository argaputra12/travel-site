import { InputHTMLAttributes } from 'react';

export type InputProps = {
  name: InputHTMLAttributes<HTMLInputElement>['name'];
  type: InputHTMLAttributes<HTMLInputElement>['type'];
  label: string;
  placeholder: string;
  value?: string;
  className?: string;
}