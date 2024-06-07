// src/App.js

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
      <header className="App-header">
        <div className="header-content">
          <h1>Buy Fresh And Organic Grocery Food</h1>
          <button className="shop-now-button">Shop Now</button>
          <div className="stats">
            <span>35k+ Users</span>
            <span>18k+ Products</span>
          </div>
        </div>
      </header>
      <section className="category-section">
        <h2>Top Category Of Organic Food</h2>
        <nav className="category-nav">
          <button onClick={() => setCategory('Seafood')}>Seafood</button>
          <button onClick={() => setCategory('Beef')}>Beef</button>
          <button onClick={() => setCategory('Chicken')}>Chicken</button>
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
