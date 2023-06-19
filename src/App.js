import * as React from 'react';
import {Button, Container, ButtonGroup, FormControl, InputLabel, Select, MenuItem} from '@mui/material';
import {css} from '@emotion/react';
import SidebarMoon from './SidebarMoon.png'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {
  const [hours, setHours] = React.useState('');
  const [minutes, setMinutes] = React.useState('');
  const [amPM, setAMPM] = React.useState('');

  const handleChangeHours = (event) => {
    setHours(event.target.value);
  };

  const handleChangeMinutes = (event) => {
    setMinutes(event.target.value);
  };

  const handleChangeAMPM = (event) => {
    setAMPM(event.target.value);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="md" className={test}>
          <img src={SidebarMoon} alt="Moon"/>
          <h1>I want to <b>wake up</b> at ...</h1>
          <div>
      <FormControl sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="demo-simple-select-helper-label">Select Hours</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={hours}
          label="Select Hours"
          onChange={handleChangeHours}
          variant='standard'
        >
          <MenuItem value={1}>01</MenuItem>
          <MenuItem value={2}>02</MenuItem>
          <MenuItem value={3}>03</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 150 }}>
      <InputLabel id="demo-simple-select-helper-label">Select Minutes</InputLabel>
        <Select
          value={minutes}
          onChange={handleChangeMinutes}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          variant='standard'
        >
           <MenuItem value={1}>01</MenuItem>
          <MenuItem value={2}>02</MenuItem>
          <MenuItem value={3}>03</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 150 }}>
      <InputLabel id="demo-simple-select-helper-label">Select AM/PM</InputLabel>
        <Select
          value={amPM}
          onChange={handleChangeAMPM}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          variant='filled'
        >
           <MenuItem value="AM">AM</MenuItem>
          <MenuItem value="PM">PM</MenuItem>
        </Select>
      </FormControl>
    </div>
          <ButtonGroup variant="text" aria-label="Sleep Actions" fullWidth>
            <Button onClick={() => alert("Go to sleep in a while")}>Calculate</Button>
            <Button onClick={() => alert("Go to sleep now")}>Sleep now</Button>
            <Button onClick={() => alert("Coming soon!")}>Check again</Button>
          </ButtonGroup>  
      </Container>
    </ThemeProvider>
  );
}

const test = css`
  color: #000000;
`;
