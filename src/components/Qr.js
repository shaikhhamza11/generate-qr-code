import React from 'react';
import { useEffect, useRef, useContext } from 'react';
import { InputContext } from '../context/InputContext';

const Qr = () => {
  const ref = useRef(null);

  const { qrCode } = useContext(InputContext);

  const onDownloadClick = () => {
    if (!qrCode) return;
    qrCode.download({
      extension: 'jpeg',
    });
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = '';
      qrCode.append(ref.current);
    }
  }, [qrCode, ref]);

  return (
    qrCode && (
      <div className='rounded-r-md flex flex-row w-full items-center justify-center p-8'>
        <div>
          <div ref={ref} />
          <button
            onClick={onDownloadClick}
            className='bg-blue-400 w-44 px-4 py-2 text-white rounded hover:bg-blue-500 disabled:bg-gray-300 disabled:cursor-not-allowed text-center block my-2 block mt-4 m-auto'
            disabled={!qrCode}
          >
            Download
          </button>
        </div>
      </div>
    )
  );
};

export default Qr;
