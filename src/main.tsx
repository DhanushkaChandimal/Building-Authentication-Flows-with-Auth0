import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
  import { BrowserRouter } from "react-router-dom";
import Auth0ProviderWithNavigate from "./Auth0Provider";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Auth0ProviderWithNavigate>
      <App />
    </Auth0ProviderWithNavigate>
  </BrowserRouter>
)
