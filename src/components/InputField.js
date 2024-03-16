import React, { useContext } from 'react';
import { InputContext } from '../context/InputContext';

const InputField = () => {
  const { inputValue, setInputValue } = useContext(InputContext);
  const handleOnChange = (e) =>
    setInputValue({ ...inputValue, message: e.target.value });
  const handleNumberChange = (e) => {
    if (/^\d{0,10}$/.test(e.target.value)) {
      setInputValue({ ...inputValue, mobile_number: e.target.value });
    }
  };
  return (
    <div className='w-full'>
      <div className='px-2'>
        <label className='font-semibold text-md' htmlFor='mobile_number'>
          Enter the number you want to send message on whatsapp
        </label>
        <input
          className='w-full border-2 py-1 px-3 text-gray-700 rounded-sm resize-none appearance-none'
          type='number'
          name='mobile_number'
          id='mobile_number'
          value={inputValue.mobile_number}
          onChange={handleNumberChange}
          placeholder='Enter mobile number'
        />
      </div>
      <div className='px-2 my-4'>
        <label className='font-semibold text-md mt-4' htmlFor='message'>
          Enter your message
        </label>
        <textarea
          rows={4}
          name='message'
          className='w-full border-2 py-1 px-3 text-gray-700 rounded-sm resize-none'
          placeholder="Hi there I'm using WhatsApp"
          value={inputValue.message}
          onChange={handleOnChange}
        ></textarea>
      </div>
    </div>
  );
};

export default InputField;
