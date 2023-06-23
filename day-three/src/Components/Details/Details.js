import { useParams } from 'react-router-dom';
import './Details.css';
import { useEffect , useState} from 'react';

const Details =  () => {
    let {id} = useParams();
    const BASE_URL = `http://localhost:3500/artists/${id}`;
        const [artist, setArtist] = useState([]);

        const getArtists = async () => {
          const response = await fetch(BASE_URL);
          const data = await response.json();
          setArtist(data);
          console.log(artist);
        };

        useEffect(() => {
          getArtists();
        }, [id]);

    return (
      <div>
        <div className="card">
          <div className="header"></div>
          <div className="info">
            <p className="title">{artist.name}</p>
            <p>{artist.bio}</p>
          </div>
          <div className="footer">
            <div className="tag">
              {artist.albums &&
                artist.albums.map((album) => (
                  <div key={album.albumId}>{album.title}</div>
                ))}
            </div>
            <button type="button" className="action">
              {artist.genre}
            </button>
          </div>
        </div>
      </div>
    );
}

export default Details ;