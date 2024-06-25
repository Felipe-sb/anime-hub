import React, { useEffect, useState } from 'react';
import { jsonRead } from '../../Utils/Utils';
import AnimeCard from '../AnimeCard/AnimeCard';
import './AnimeList.css';
import { Link } from 'react-router-dom';

const AnimeList = () => {
    const [animeList, setAnimeList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await jsonRead();
                setAnimeList(data.data);
            } catch (error) {
                console.error('Error fetching the data', error);
            }
        };
        fetchData();
    }, []);

    return (
        //TODO: Añadir paginacion
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {animeList.map((anime, index) => (
                <Link to={`/animes/${index}`} key={index}>
                    <AnimeCard anime={anime} />
                </Link>
            ))}
        </div>
    );
}

export default AnimeList;
