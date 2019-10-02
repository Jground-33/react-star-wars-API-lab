import React from 'react'
import { Link } from 'react-router-dom';

const Starship = (props) => {

  const starship = props.getStarshipById(props.match.params.id)


  return ( 
    <div className='card starship'>
      <div className="card-content">
        <div className='card-title'>{starship.name} </div>
        Model: {starship.model}
        <div className='card-action'>
          <Link to='/'>Return</Link>
        </div>
      </div>
    </div>
   );
}
 
export default Starship;