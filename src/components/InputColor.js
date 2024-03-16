import { useState } from 'react';
import { ChromePicker } from 'react-color';
import { useContext } from 'react';
import { InputContext } from '../context/InputContext';

const InputColor = () => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const { inputValue, setInputValue } = useContext(InputContext);

  const handleColorChange = (_color) =>
    setInputValue({ ...inputValue, color: _color.hex });

  return (
    <div>
      <label htmlFor='color' className='font-semibold text-md'></label>
      <div className='flex items-center gap-2'>
        <div
          onClick={() => setDisplayColorPicker(!displayColorPicker)}
          style={{ background: inputValue.color }}
          className='w-10 h-8 cursor-pointer border-4'
        ></div>
        <span>{inputValue.color}</span>
      </div>
      {displayColorPicker && (
        <div className='absolute mt-2'>
          <ChromePicker color={inputValue.color} onChange={handleColorChange} />
        </div>
      )}
    </div>
  );
};

export default InputColor;
