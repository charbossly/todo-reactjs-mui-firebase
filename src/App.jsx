import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
function App() {

  const theme = createTheme({
    palette: {
      primary: {
        light: '#8e99f3',
        main: '#3f51b5',
        dark: '#26418f',
        contrastText: '#fff'
      }
    },
  });
  

  return (
    <ThemeProvider theme={theme}>
      <p>App</p>
    </ThemeProvider>
  )
}

export default App
