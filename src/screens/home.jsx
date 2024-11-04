// home.jsx
import React, { useState } from 'react';
import CustomSlider from '../component/comp/slider/slider';
import Checkboxes from '../component/comp/checkbox/checkbox';
import { useTheme } from '@mui/material/styles';
import lightTheme from '../theams/lighttheam'; 
import darkTheme from '../theams/darktheam'; 

export const Home = () => {
  const theme = useTheme();
  const [sliderValue, setSliderValue] = useState(70);

  const handleSliderChange = (newValue) => {
    setSliderValue(newValue);
  };
  

  


  return (
    <div>

    <CustomSlider currentValue={sliderValue} onChange={handleSliderChange} />
    <div>
    
      <Checkboxes theme={lightTheme} />
    </div>
   
  </div>
  );
};

