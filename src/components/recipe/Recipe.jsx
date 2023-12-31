import { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import './recipe.scss';
import { useParams } from 'react-router-dom';

const Recipe = () => {
  const { recipeId } = useParams();
  const [recipeData, setRecipeData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    try {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
        .then(response => response.json())
        .then(data => {setRecipeData(data.meals[0]);})
    } catch (msg) {
      console.log(msg);
    }
  }, [recipeId]);

  const handleModalShow = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  const ingredients = [];
  
  for (let i = 1; i <= 20; i++) {
    const ingredient =  recipeData[`strIngredient${i}`];
    const measure = recipeData[`strMeasure${i}`];
    if (!ingredient) {
      break}
    ingredients.push(`${ingredient} - ${measure}`);
  }

  return (
    <Container>
      <Row className='fileredRecipe'>
        <h1>Dish: {recipeData.strMeal}</h1>
        <Col md={12} lg={6} className='fileredRecipe__left'>
          <img src={recipeData.strMealThumb} alt={recipeData.strMeal} className="img-fluid"/>
        </Col>
        <Col md={12} lg={6} className='fileredRecipe__right'>
          <h3>Category: {recipeData.strCategory}</h3>
          <h5>Country: {recipeData.strArea}</h5>
          <h6>Ingredients</h6>
          <ul>{ingredients.map((ingredient, index) => (<li key={index}>{ingredient}</li>))}</ul>
          <button className="watchVideoButton" onClick={handleModalShow}>Watch the video how to cook</button>
        </Col>
      </Row>
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>{recipeData.strMeal} - Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
              title={recipeData.strMeal}
              width="460"
              height="315"
              src={recipeData.strYoutube}
              allowFullScreen/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Recipe;
