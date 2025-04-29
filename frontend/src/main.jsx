import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import {Routes, Route, BrowserRouter} from 'react-router'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App/>} />
          </Routes>
      </BrowserRouter>
  // </StrictMode>,
)
