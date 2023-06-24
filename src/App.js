/** @jsxImportSource @emotion/react */

import * as React from 'react';
import { Container } from '@mui/material';
import SidebarMoon from './SidebarMoon.png'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { css } from '@emotion/react'
import {ButtonGroup, Button} from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const style = css`
  text-align: center;
`

export default function App() {
  const [shouldShowResults, setShouldShowResults] = React.useState(false);

  const handleSleepNowClick = () => {
    setShouldShowResults(!shouldShowResults);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="md">
        <div css={style}>
          <img src={SidebarMoon} alt="Moon" />
          <h1>I want to...</h1>
          <ButtonGroup variant="text" fullWidth>
            <Button>Fall asleep at</Button>
            <Button>Wake up at</Button>
            <Button onClick={handleSleepNowClick}>Sleep now</Button>
          </ButtonGroup>
        </div>
        { shouldShowResults &&
          <div css={style}>
            <h2>
            If you head to bed right now, you should try to wake up at one of the following times:  
            </h2>
            <h3>
              - 8:00AM for one cycle
            </h3>
            <h3>
              - 8:00AM for one cycle
            </h3>
            <h3>
              - 8:00AM for one cycle
            </h3>
            <p>
            Please keep in mind that you should be falling asleep at these times.
            </p>
          </div>
        }
      </Container>
    </ThemeProvider>
  );
}
