import 'react-app-polyfill/stable'
import 'core-js'
import React from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App'
import App from './src_map/components/app'
// import App from './src_home/App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import store from './store'
import 'stylecraft/dist/stylecraft.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import './css/index.css'
import './css/fonts.css'
import './css/input-range.css'
import './css/hacks.css'
import './css/mapbox-hacks.css'
import { GoogleOAuthProvider } from "@react-oauth/google"

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='835958615002-sv7nh5gls60un3085qtm8374qfjrdf22.apps.googleusercontent.com'>
  <Provider store={store}>
    <App />
  </Provider>,
  </GoogleOAuthProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
