/** @jsxImportSource @emotion/react */

import * as React from 'react';
import { Container } from '@mui/material';
import SidebarMoon from './SidebarMoon.png'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { css } from '@emotion/react'
import { ButtonGroup, Button } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { format, add } from 'date-fns'


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const style = css`
  text-align: center;
  margin: 50px;
`

export default function App() {
  const [shouldShowResults, setShouldShowResults] = React.useState(false);
  const [shouldShowTimePicker, setShouldShowTimePicker] = React.useState(false);
  const [timePickerValue, setTimePickerValue] = React.useState(null);

  const handleSleepNowClick = () => {
    setShouldShowTimePicker(false);
    setShouldShowResults(!shouldShowResults);
  };

  const handleSleepAtCLick = () => {
    setShouldShowResults(false);
    setShouldShowTimePicker(!shouldShowTimePicker);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline />
        <Container maxWidth="md">
          <div css={style}>
            <img src={SidebarMoon} alt="Moon" />
            <h1>I want to...</h1>
            <ButtonGroup variant="text" fullWidth>
              <Button onClick={handleSleepAtCLick}>Fall asleep at</Button>
              <Button onClick={handleSleepAtCLick}>Wake up at</Button>
              <Button onClick={handleSleepNowClick}>Sleep now</Button>
            </ButtonGroup>
          </div>
          {
            shouldShowTimePicker && !shouldShowResults &&
            <div css={style}>
              <div css={style}>
                <TimePicker
                  value={timePickerValue}
                  onChange={(newValue) => setTimePickerValue(newValue)}
                  views={['hours', 'minutes']}
                  format="hh:mm"
                  ampmInClock
                  formatDensity="spacious"
                  label="Select a time"
                />
              </div>
              <div css={style}>
                <Button variant="contained" onClick={handleSleepNowClick}>Calculate!</Button>
              </div>
            </div>
          }
          {shouldShowResults && !shouldShowTimePicker &&
            <div css={style}>
              <h2>
                If you head to bed right now, you should try to wake up at one of the following times:
              </h2>
              <h3>
                {format(add(timePickerValue, { hours: 1, minutes: 30 }), "hh:mm aa")}  - (1 Sleep Cycle)
              </h3>
              <h3>
                {format(add(timePickerValue, { hours: 3 }), "hh:mm aa")}  - (2 Sleep Cycles)
              </h3>
              <h3>
                {format(add(timePickerValue, { hours: 4, minutes: 30 }), "hh:mm aa")}  - (3 Sleep Cycles)
              </h3>
              <h3>
                {format(add(timePickerValue, { hours: 6 }), "hh:mm aa")}  - (4 Sleep Cycles)
              </h3>
              <h3>
                {format(add(timePickerValue, { hours: 7, minutes: 30 }), "hh:mm aa")}  - (5 Sleep Cycles)
              </h3>
              <h3>
                {format(add(timePickerValue, { hours: 9 }), "hh:mm aa")}  - (6 Sleep Cycles)
              </h3>
              <p>
                Please keep in mind that you should be falling asleep at these times.
              </p>
            </div>
          }
        </Container>
      </LocalizationProvider>
    </ThemeProvider >
  );
}
