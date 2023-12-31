import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from '../card/Card';
import './recipeDisplay.scss';

const RecipeDisplay = () => {
  const [recipeInfo, setRecipeInfo] = useState([]);

  const getRecipesToDisplay = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const data = await response.json();
      setRecipeInfo((prevRecipeInfo) => [...prevRecipeInfo, data.meals[0]]);
    } catch (msg) {
      console.log(msg);
    }
  };

  useEffect(() => {
    for (let i = 0; i < 6; i++) {
      getRecipesToDisplay();
    }
  }, []);

  return (
    <>
      <Container className="mainTopPart">
        <Row>
          <Col sm={12} lg={6} className="mainTopPart__article">
            <h3>Discover, Create, Share</h3>
            <p>Check our most popular recipes of this week</p>
          </Col>
          <Col sm={12} lg={6} className="mainTopPart__button">
            <a href='#'>See All</a>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          {recipeInfo.map((recipe) => (
            <Card key={recipe.idMeal} recipe={recipe} />
          ))}
        </Row>
      </Container>
    </>
  );
}

export default RecipeDisplay;
