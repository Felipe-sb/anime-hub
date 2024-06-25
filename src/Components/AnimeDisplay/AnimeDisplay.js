import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { jsonRead } from '../../Utils/Utils'
export const loader = async({params}) => {
  const data = await jsonRead()
  const anime = data.data[params.id]
  return {anime}
}
export default function AnimeDisplay() {
  const {anime} = useLoaderData()
  return (
    //TODO: REVISION Y CREACION DE COMPONENTES ANIME DISPLAY
    <div>
      <h1 className='text-3xl font-bold underline'>{anime.nombre_anime}</h1>
      <p>{anime.info[0].fecha_salida}</p>
      <img src={anime.info[0].img_src} alt={anime.nombre_anime}/>
    </div>
  )
}
