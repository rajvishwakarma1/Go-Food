"use client"; // Add this line at the top

import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        <ProductCard key={product.idMeal} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
