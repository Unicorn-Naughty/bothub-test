import React from "react";
import { Input } from "./input";
import { useFormContext } from "react-hook-form";

interface formInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  name: string;
  label?: string;
  required?: boolean;
  placeholder: string;
}

export const FormInput: React.FC<formInputProps> = ({
  className,
  name,
  label,
  required,
  placeholder,
  ...props
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorText = errors[name]?.message as string;

  return (
    <div className={className}>
      {label && (
        <p className="text-[16px] leading-[22px] text-white mb-2">
          {label}
          {required && "*"}
        </p>
      )}
      <Input
        
        {...props}
        {...register(name)}
        className="border-[#313E62] p-4 rounded-[8px]"
        placeholder={placeholder}
      />
      {errorText && (
        <span className="text-red-600 text-[12px]">{errorText}</span>
      )}
    </div>
  );
};
