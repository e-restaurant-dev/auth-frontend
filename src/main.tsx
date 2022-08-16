import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { App } from './App'
import { AuthStateProvider } from './Context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <AuthStateProvider>
            <App />
        </AuthStateProvider>
    </React.StrictMode>,
)
