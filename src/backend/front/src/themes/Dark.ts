import { createTheme } from '@mui/material';
import { orange, purple } from '@mui/material/colors';

export const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: purple[900],
      dark: purple[800],  
      light: purple[500],
      contrastText: '#ffffff',
    },
    secondary: {
      main: orange[500],
      dark: orange[400],
      light: orange[300],
      contrastText: '#ffffff',
    },
    background: {
      paper: '#303134',
      default: '#202124',
    },
  },
  typography: {
    allVariants: {
      color: 'white',
    }
  }
});