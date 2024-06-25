import React from 'react';
import './AnimeCard.css';

const AnimeCard = ({ anime }) => {
    const info = anime.info[0];
    return (
        <div className="anime-card bg-gray-800 rounded-lg overflow-hidden shadow-lg text-center">
            <img src={info.img_src} alt={anime.nombre_anime} className='w-full h-48 object-cover'/>
            <div className='p-4'>
                <h3 className='text-xl mb-2'>{(anime.nombre_anime.length > 30) ? `${anime.nombre_anime.substring(0,30)}...`:anime.nombre_anime}</h3>
                <p className='text-gray-400'><strong>Tipo:</strong> {info.tipo}</p>
                <p className='font-mono'><strong>Fecha de Salida:</strong> {info.fecha_salida}</p>
                <p><strong>Capítulos:</strong> {info.cant_cap}</p>
            </div>
        </div>
    );
}

export default AnimeCard;
