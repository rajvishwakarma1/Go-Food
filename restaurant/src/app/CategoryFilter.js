"use client"; // Add this line at the top

const CategoryFilter = ({ categories, onSelectCategory }) => {
  return (
    <div className="flex justify-center space-x-4 my-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
