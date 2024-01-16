import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import React from 'react'
import { QueryProvider } from './ReactQuery/queryProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </QueryProvider>
    </React.StrictMode>
    
    
)