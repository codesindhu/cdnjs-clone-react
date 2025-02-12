import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Cdnjs from './components/Cdnjs.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cdnjs/>
  </StrictMode>,
)
