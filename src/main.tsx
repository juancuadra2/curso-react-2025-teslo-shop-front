import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TesloShopApp } from './TesloShopApp'
import './index.css'
import { ThemeProvider } from './components/theme-provider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TesloShopApp />
    </ThemeProvider>
  </StrictMode>,
)
