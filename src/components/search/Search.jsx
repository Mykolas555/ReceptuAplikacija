import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [recipeName, setRecipeName] = useState('');
  const navigate = useNavigate();

  const handleButtonClick = () => {
    const formattedRecipeName = recipeName.replace(/\s/g, '_');
    try {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${formattedRecipeName}`)
        .then(response => response.json())
        .then(data => {
          if (data.meals) {
            navigate(`/recipeDisplay/${data.meals[0].idMeal}`);
          } else {
            alert('Recipe not found');
          }
        })
    } catch (msg) {
      console.log(msg);
    }
  };

  const handleInputChange = (event) => {
    setRecipeName(event.target.value);
  };

  return (
    <div className="input-group">
      <input type="text" className="form-control" placeholder="Enter recipe"
        value={recipeName} onChange={handleInputChange}/>
      <button onClick={handleButtonClick} className="btn btn-outline-secondary" type="button">Find Recipe</button>
    </div>
  );
};

export default Search;
