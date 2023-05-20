import Home from './home/homeComponent';
import Error from './error/errorComponent';
import Details from './details/detailsComponent';
import Profile from './profile/profileComponet';
import './navComponent.module.css';
import { BrowserRouter, Routes , Link, Route } from 'react-router-dom';

export default function navComponent () {
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav d-flex w-100 justify-content-around">
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/details">Details</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/profile">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/error">Error</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
    
            <Routes>
                <Route path="/" element={ <Home /> }>  </Route>
                <Route path="/details" element={ <Details /> }>  </Route>
                <Route path="/profile" element={ <Profile /> }>  </Route>
                <Route path="/error" element={ <Error /> }>  </Route>
            </Routes>
        </BrowserRouter>
    );
}