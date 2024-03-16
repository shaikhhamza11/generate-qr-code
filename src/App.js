import React from 'react';
import InputForm from './components/InputForm';
import Qr from './components/Qr';
import InputContextProvider from './context/InputContextProvider';

const App = () => {
  return (
    <div className='flex justify-center items-center min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500'>
      <div className='container bg-white rounded-lg shadow-md p-8 w-screen h-screen md:mx-auto md:max-w-lg md:m-8 md:h-full'>
        <InputContextProvider>
          <InputForm />
          <Qr />
        </InputContextProvider>
      </div>
    </div>
  );
};

export default App;
