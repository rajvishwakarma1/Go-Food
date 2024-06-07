"use client";

import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  const limitedProducts = products.slice(0, 6);
  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        <ProductCard key={product.idMeal} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
