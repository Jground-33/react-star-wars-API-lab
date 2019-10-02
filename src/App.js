import React, { useEffect, useState }from 'react';
import './App.css';
import Starship from './components/Starship';
import { getAllStarships } from './services/sw-api';
import {Link, Route} from 'react-router-dom';

const App = () => {
  const [ships, setShips] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const shipsData = await getAllStarships()
      setShips(shipsData.results)
    }
    fetchData();
  }, []);

  const getStarshipById = id => {
    return ships[id]
  }


  return (
    <div className='App'>
      <div className='nav-wrapper grey darken-3'>
        <div className='brand-logo white-text'>STAR WARS STARSHIPS</div>
      </div>
      <div className='container'>
      <Route exact path='/' render={props => (
        <>
          {ships.map((ship, idx) => (
              <Link to={`/starships/${idx}/`} key={idx}>
            <div className='card'>
              <div className="card-content">
                {ship.name}
              </div>
            </div>
              </Link>
          ))}
        </>
      )}/>
      <Route path='/starships/:id' render={(props) => (
      <Starship {...props} 
      getStarshipById={getStarshipById}
      />
      )}/>
      </div>
    </div>
  );
}

export default App;


/* 
{
    'MGLT': '10 MGLT',
    'cargo_capacity': '1000000000000',
    'consumables': '3 years',
    'cost_in_credits': '1000000000000',
    'created': '2014-12-10T16:36:50.509000Z',
    'crew': '342953',
    'edited': '2014-12-10T16:36:50.509000Z',
    'hyperdrive_rating': '4.0',
    'length': '120000',
    'manufacturer': 'Imperial Department of Military Research, Sienar Fleet Systems',
    'max_atmosphering_speed': 'n/a',
    'model': 'DS-1 Orbital Battle Station',
    'name': 'Death Star',
    'passengers': '843342',
    'films': [
        'https://swapi.co/api/films/1/'
    ],
    'pilots': [],
    'starship_class': 'Deep Space Mobile Battlestation',
    'url': 'https://swapi.co/api/starships/9/'
}

*/