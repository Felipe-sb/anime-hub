import React from 'react'
import { useState, use } from 'react'
export default function LabelLogin({currentTitle='Hola'}) {
  const [title, setTitle] = useState(currentTitle)
  const handleClick = (e) => {
    console.log(e)
    setTitle(e.target.textContent)
  }
  return (
    <div>
      <iframe
        height='600'
        width='900'
        src='https://drive.google.com/file/d/1uCEQpN86qb13bgsLKrsZkLGQJ0FSRK0g/preview'
        allow='autoplay'
        style={{ border: 'none' }}
      ></iframe>
    </div>
    //ser reactivo
    //recibe parametros como objeto
    //el evento que recibe es un objeto
    //entonces lo que hace el boton es reemplazar el texto del h1 con el value del boton
    
  )
}
