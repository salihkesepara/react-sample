import { Suspense } from 'react'
import configureStore from 'src/store/configureStore'
import { Provider } from 'react-redux'
import Router from 'src/router'
import { ThemeProvider } from '@mui/material/styles'
import theme from 'src/modules/theme'
import SnackMessage from 'src/components/snackMessage'
import { ToastContainer } from 'react-toastify'
import { toastSettings } from 'src/utils/constants'

// Mui pickers time utils
import MomentUtils from '@date-io/moment'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'

const store = configureStore()

const App = () => {
  return (
    <Suspense>
      <Provider store={store}>
        <ThemeProvider theme={theme} >
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <SnackMessage />
            <Router />
            <ToastContainer {...toastSettings} />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </Provider>
    </Suspense>
  )
}

export default App
