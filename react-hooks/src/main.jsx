import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Counter from './Counter.jsx'
import ToggleButton from './ToggleButton.jsx'
import TextInput from './TextInput.jsx'
import FetchPosts from './FetchPosts.jsx'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counter />
    <ToggleButton />
    <TextInput />
    <FetchPosts />
    <App />
  </StrictMode>,
)