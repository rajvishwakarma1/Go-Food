"use client"; // Add this line at the top

import axios from 'axios';
import { useState, useEffect } from 'react';
import Banner from './Banner';
import ProductList from './ProductList';
import CategoryFilter from './CategoryFilter';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
      setCategories(response.data.categories.map(category => category.strCategory));
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      if (selectedCategory) {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`);
        setProducts(response.data.meals || []);
      }
    };
    fetchProducts();
  }, [selectedCategory]);

  return (
    <div>
      <Banner />
      <CategoryFilter categories={categories} onSelectCategory={setSelectedCategory} />
      <ProductList products={products} />
    </div>
  );
}
