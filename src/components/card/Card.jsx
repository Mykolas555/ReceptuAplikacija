import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import timer from '../../images/timer.svg';
import people from '../../images/people.svg';
import level from '../../images/level.svg';
import './card.scss';

const Card = ({ recipe }) => {
  return (
        <Col className="cardTemplate rounded" sm={10} lg={4}>
          <div className='cardTemplate__top'>
            <img src={recipe.strMealThumb} className="img-fluid" alt={timer} />
            <div className='top__servingInfo'>
              <p><img src={timer} alt="Timer" /> 10 Mins</p>
              <p><img src={people} alt="People" /> 2 Serving</p>
              <p><img src={level} alt="Level" /> Easy</p>
            </div>
          </div>
          <div className='cardTemplate__bottom'>
            <article>{recipe.strMeal}</article>
            <p><Link to={`/recipeDisplay/${recipe.idMeal}`}>View Recipe</Link></p>
          </div>
        </Col>
  );
}

export default Card;
