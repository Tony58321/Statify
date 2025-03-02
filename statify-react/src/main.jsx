import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'

/*
  This intentionally does not include react's strict mode.
  Using strict mode causes states to be calculated twice, meaning code that uses state to ensure that it is only called once, is called twice.
  The spotify API doesn't seem to like being called twice asking for a token (it gives an error).
*/
createRoot(document.getElementById('root')).render(
  <App/>,
)