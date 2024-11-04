import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { useTheme } from '@emotion/react';

const marks = [
  { value: 10, label: 'Poor' },
  { value: 30, label: 'Need Improvement' },
  { value: 50, label: 'Average' },
  { value: 70, label: 'Neutral' },
  { value: 90, label: 'Good' },
  { value: 110, label: 'Very Good' },
  { value: 130, label: 'Impactful' },
];

const sliderStyles = {
  default: {
    height: 8,
    '& .MuiSlider-track': {
      background: 'linear-gradient(to right , green)',
      opacity: 0,
      border: 'none',
    },
    '& .MuiSlider-rail': {
      background: 'linear-gradient(to right, red, yellow, green)',
      opacity: 10,
    },
    '& .MuiSlider-thumb': {
      height: 24,
      width: 24,
      backgroundColor: '#2c2c2c',
      border: '2px solid white',
      '&:hover': {
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
      },
    },
  },
};

const CustomSlider = ({ currentValue, onChange }) => {
  const currentLabel = marks.find(mark => mark.value === currentValue)?.label || '';
  const theme = useTheme();
  const handleSliderChange = (event, newValue) => {
    onChange(newValue);
  };

  return (
    <Box sx={{ width: 400, textAlign: 'center' }}>
      <Slider
        aria-label="Custom slider"
        value={currentValue}
        onChange={handleSliderChange}
        min={10}
        max={130}
        step={20}
        sx={sliderStyles.default}
        valueLabelDisplay="off"
      />
      <Typography variant="subtitle1" sx={{ mt: 0 }}>
        {currentLabel}
      </Typography>
    </Box>
  );
};

export default CustomSlider;
