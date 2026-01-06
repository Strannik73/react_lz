import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MainRoutes} from './MainRoutes.jsx'
// import App from './App.jsx'
import { Provider } from './Provid.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <MainRoutes />
    </Provider>
  </StrictMode>,
)