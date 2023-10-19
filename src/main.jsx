import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp'
import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  // El modo estricto hace que se vuelva a redibujar 
  //los componentes dos veces
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>,
)
