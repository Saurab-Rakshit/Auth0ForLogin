import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-2yazzwih.us.auth0.com"    
    clientId="R7m9KAPRvQyf35T9aq3qQ2lsRZ5RNtpp"    
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>
      <App />      
    </BrowserRouter>
  </Auth0Provider>
)
