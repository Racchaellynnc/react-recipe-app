import React,{useEffect, useState} from 'react';
import Recipe from './Recipe.js'
import './App.css';


const App =  () => {
  const APP_ID = '714fa394';
  const APP_KEY = '1004a79b5e2b0880b2166862a95ccc9d';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');



  useEffect(() => {
   getRecipes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

const updateSearch = e => {
setSearch(e.target.value);
console.log(search);
}

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch('');
}

  return(
    <div className="App">
      <div style={{ display: 'flex' }}>
        <h1 style={{textAlign: 'left', marginLeft: '50px', marginBottom: 0, paddingBottom: 0}}> Search Recipes </h1>
        <div class="search">
          <input 
            className="search-bar" 
            type="text" 
            value={search} 
            onChange={updateSearch}
            />
          <button className="search-button" type="submit" onClick={e => getSearch(e)}>search </button>
        </div>
      </div>
      <div className="recipes">
      {recipes.map(recipe =>(
        <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image} 
          ingredients={recipe.recipe.ingredients}
        />
      
      ))}
      </div>
      
    </div>
  );
};
export default App;
