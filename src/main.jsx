import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { StateProvider } from './context/StateProvider.jsx'
import { initialState } from './context/initialState.js'
import reducer from './context/reducer.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
  </BrowserRouter>,
)
