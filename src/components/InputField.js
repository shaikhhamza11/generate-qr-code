import React from 'react';

const InputField = () => {
  return (
    <div>
      <label className='font-semibold text-md' htmlFor='message'>
        Enter your message
      </label>
      <textarea
        rows={10}
        name='message'
        className='w-full border-2 py-1 px-3 text-gray-700 rounded-sm resize-none'
        placeholder="Hi there I'm using WhatsApp"
      ></textarea>
    </div>
  );
};

export default InputField;
