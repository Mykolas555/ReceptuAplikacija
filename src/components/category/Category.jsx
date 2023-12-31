import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import './category.scss';

const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    try {
      fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(response => response.json())
        .then(data => setCategory(data.categories));
    } catch (msg) {
      console.log(`category fetch:${msg}`);
    }
  }, []);

  return (
    <Container>
      <Row className='categoryDisplay'>
        {category.map(categoryItem => (
          <Col key={categoryItem.idCategory} sm={12} lg={4} className='categoryDisplay__items mb-3'>
            <Link to={`/category/${categoryItem.strCategory}`}>
              <img src={categoryItem.strCategoryThumb} alt={categoryItem.strCategory} />
              <h3>{categoryItem.strCategory}</h3>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Category;
