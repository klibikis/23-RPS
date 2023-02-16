import React from 'react'
import ReactDOM from 'react-dom/client'
import { useQuery, useQueryClient, QueryClient, QueryClientProvider } from "@tanstack/react-query"
import App from './App'
import './assets/Libs/reset.scss'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import './i18n'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client = {queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
)
