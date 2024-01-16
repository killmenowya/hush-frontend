
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import Nav from './Nav'

const darkTheme = createTheme({
  palette:{
    mode: 'dark',
  },
})

const App = () => {
  return (
    <ThemeProvider theme = {darkTheme}>
      <CssBaseline/>
        <div>
          <Nav/>
        </div>
    </ThemeProvider>

  
  )
}

export default App