import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Checkboxes = ({ theme }) => {

  const appliedTheme = createTheme(theme);

  return (
    <ThemeProvider theme={appliedTheme}>
      <div>
        <Checkbox {...label} defaultChecked />
        <Checkbox {...label} />
        <Checkbox {...label} disabled />
        <Checkbox {...label} disabled checked />
      </div>
    </ThemeProvider>
  );
};

export default Checkboxes;
