import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import './index.css'
import './App.css'
import { StellarProvider } from './context/StellarProvider'
import { IconContext } from 'react-icons'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StellarProvider>
      <IconContext.Provider value={{style: {width: '5em', height: '5em'}}}>
        <RouterProvider router={ router } />
      </IconContext.Provider>
    </StellarProvider>
  </React.StrictMode>,
)
