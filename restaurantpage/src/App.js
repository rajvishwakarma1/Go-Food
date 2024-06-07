// src/App.js
import Home from "./Components/Home";
import React, { useState, useEffect } from 'react';
import { fetchMealsByCategory } from './api';
import './App.css';

function App() {
  const [meals, setMeals] = useState([]);
  const [category, setCategory] = useState('Seafood');

  useEffect(() => {
    const getMeals = async () => {
      const mealsData = await fetchMealsByCategory(category);
      setMeals(mealsData);
    };

    getMeals();
  }, [category]);

  return (
    <div className="App">
      <Home />
      <section className="category-section">
        <h3>Shop by Category</h3>
        <h2>Top Category Of Organic Food</h2>
        <nav className="category-nav">
          <button onClick={() => setCategory('Seafood')}>Seafood</button>
          <button onClick={() => setCategory('Chicken')}>Chicken</button>
          <button onClick={() => setCategory('Vegetarian')}>Vegetarian</button>
          <button onClick={() => setCategory('Pasta')}>Pasta</button>
          <button onClick={() => setCategory('Dessert')}>Dessert</button>
          {/* Add more categories as needed */}
        </nav>
        <ul className="meals-list">
          {meals.map(meal => (
            <li key={meal.idMeal} className="meal-item">
              <img src={meal.strMealThumb} alt={meal.strMeal} className="meal-image" />
              <h3 className="meal-title">{meal.strMeal}</h3>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
