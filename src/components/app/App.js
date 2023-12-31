import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../home/Home';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Category from '../category/Category';
import RecipeDisplay from '../recipeDisplay/RecipeDisplay';
import CategoryDisplay from '../categoryDisplay/CategoryDisplay';
import Recipe from '../recipe/Recipe';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category' element={<Category />} />
        <Route path="/category/:categoryName" element={<CategoryDisplay />} />
        <Route path='/recipeDisplay' element={<RecipeDisplay />} />
        <Route path="/recipeDisplay/:recipeId" element={<Recipe />} />
      </Routes>
      <Footer />
    </Router>
  );
}


export default App;
