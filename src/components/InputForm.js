import React, { useContext } from 'react';
import InputField from './InputField';
import { InputContext } from '../context/InputContext';
import InputColor from './InputColor';

const InputForm = () => {
  const { inputValue, generateQrCode } = useContext(InputContext);

  return (
    <div className='p-6 flex flex-col items-start'>
      <InputField />
      <InputColor />
      <div className='my-4 flex justify-end w-full'>
        <button
          className='bg-blue-400 w-44 px-4 py-2 text-white rounded hover:bg-blue-500 disabled:bg-gray-300 disabled:cursor-not-allowed self-end'
          onClick={generateQrCode}
          disabled={
            !inputValue.message ||
            !inputValue.mobile_number ||
            inputValue.mobile_number.length < 10
          }
        >
          Generate QR
        </button>
      </div>
    </div>
  );
};

export default InputForm;
