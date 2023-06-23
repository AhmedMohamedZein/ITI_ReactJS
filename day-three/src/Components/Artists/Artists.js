import './Artists.css'
import { Link } from 'react-router-dom';

const Artists = (props)=> {
    return (
      <div>
        <Link to = {`artist/details/${props.id}`}>
            <div className="card">
            <div className="card-img">
                <img src={props.cover && props.cover} alt="img" style={{width: "100%", height: "100px"}}/>
            </div>
            <div className="card-info">
                <p className="text-title">{props.name}</p>
                <p className="text-body"></p>
            </div>
            </div>
        </Link>
      </div>
    );
}

export default Artists;