import React, { useState } from 'react';
import { InputContext } from './InputContext';
import QRCodeStyling from 'qr-code-styling';

const InputContextProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState({
    message: '',
    mobile_number: '',
    color: '#ffff',
  });

  const [qrCode, setQrCode] = useState(null);

  const generateQrCode = () => {
    const options = {
      width: 300,
      height: 300,
      type: 'svg',
      data: `https://wa.me/91${inputValue.mobile_number}?text=${encodeURI(
        inputValue.message,
      )}`,
      image: './whatsapp.png',
      margin: 2,
      dotsOptions: {
        color: '#222222',

        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 0,
        //   colorStops: [
        //     { offset: 0, color: '#8688B2' },
        //     { offset: 1, color: '#77779C' },
        //   ],
        // },
        type: 'classy-rounded',
      },
      qrOptions: {
        typeNumber: 0,
        mode: 'Byte',
        errorCorrectionLevel: 'Q',
      },
      imageOptions: {
        hideBackgroundDots: true,
        imageSize: 0.6,
        margin: 15,
        crossOrigin: 'anonymous',
      },
      backgroundOptions: {
        color: inputValue.color,
      },
      cornersSquareOptions: {
        color: '#222222',
        type: 'square',
      },
      cornersDotOptions: {
        color: '#222222',
        type: 'dot',
      },
    };
    setQrCode(new QRCodeStyling(options));
  };

  const value = {
    inputValue,
    setInputValue,
    qrCode,
    generateQrCode,
  };

  return (
    <InputContext.Provider value={value}>{children}</InputContext.Provider>
  );
};

export default InputContextProvider;
