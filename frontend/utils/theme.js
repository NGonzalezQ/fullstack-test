import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0D90E0'
    },
    secondary: {
      main: '#085A8C'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#EFEFEF'
    }
  }
})

export default theme