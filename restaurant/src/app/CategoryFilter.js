"use client";

const CategoryFilter = ({ categories, onSelectCategory }) => {
  // Limit categories to a maximum of 5
  const limitedCategories = categories.slice(0, 5);

  return (
    <div className="flex justify-center space-x-4 my-6">
      {limitedCategories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className="bg-buttonGreen text-white px-4 py-2 rounded-lg hover:bg-darkGreen"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
