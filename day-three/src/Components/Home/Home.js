import './Home.css';
import Artists from '../Artists/Artists';

import React, { useState, useEffect } from 'react';

const Home = () => {
    const BASE_URL = "http://localhost:3500/artists";
    const [artists, setArtists] = useState([]);
    
    const getArtists = async() => {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        setArtists(data);
        console.log(artists);
    }

    useEffect(() => {
        getArtists();
    },[]);

    return ( 
        <div>
            {
                artists.map((artist)=>(<Artists {...artist} key= {artist.id}/>))
            }
        </div>
    );
}

export default Home;