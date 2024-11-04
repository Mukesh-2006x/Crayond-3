// home.jsx
import React, { useState } from 'react';
import CustomSlider from '../components/slider/slider';
import Checkboxes from '../components/checkbox/checkbox';
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

