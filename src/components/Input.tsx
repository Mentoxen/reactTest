import React, { FC } from 'react';
import { FieldValues, UseFormRegister, UseFormRegisterReturn } from 'react-hook-form';

interface IInput {
  id: string;
  label: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
}

const Input: FC<IInput> = ({ id, placeholder, label, register }) => (
  <label htmlFor={id}>
    <span className="text-sm text-left mb-1 block">{label}</span>
    <input
      {...register}
      type="text"
      className="border border-gray-300 block mb-3 h-8 w-full text-sm pl-2"
      id={id}
      placeholder={`Ex: ${placeholder}`}
    />
  </label>
);

export default Input;
