import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MyList from './Fruit.jsx'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <MyList />
  </StrictMode>
)
