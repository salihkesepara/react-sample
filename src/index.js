/* eslint-disable function-paren-newline */
import 'src/assets/styles/app.scss'
import { SnackbarProvider } from 'notistack'
import ReactDOM from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import i18n from 'src/modules/i18n'
import App from 'src/app'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <I18nextProvider i18n={i18n}>
    <SnackbarProvider maxSnack={3}>
      <App />
    </SnackbarProvider>
  </I18nextProvider>
)
