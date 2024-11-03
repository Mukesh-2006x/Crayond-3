// home.jsx
import React from 'react';
import CustomSlider from '../component/comp/slider/slider';
import Checkboxes from '../component/comp/checkbox/checkbox';
import { useTheme } from '@mui/material/styles';

export const Home = () => {
  const theme = useTheme();
  return (
    <div>
      <CustomSlider />
      <div style={{ color: theme.palette.text.primary }}>
      <Checkboxes theme={theme} />
      </div>
    </div>
  );
};

