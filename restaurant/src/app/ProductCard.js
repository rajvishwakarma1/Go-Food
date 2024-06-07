"use client"; // Add this line at the top

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={product.strMealThumb} alt={product.strMeal} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.strMeal}</div>
        <p className="text-gray-700 text-base">Price: $8.45</p>
        <button className="bg-green-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-green-600">Shop Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
