import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import WardrobeContextProvider from './contexts/WardrobeContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <WardrobeContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </WardrobeContextProvider>
)
