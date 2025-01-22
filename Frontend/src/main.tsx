import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import conf from './config/conf.ts'
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = conf.clerk_api_key as string;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById('root')!).render(
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <App />
    </ClerkProvider>,
)
