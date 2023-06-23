import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Details from './Components/Details/Details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artist/details/:id" element={<Details/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
