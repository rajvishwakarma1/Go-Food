"use client"; // Add this line at the top

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-100 p-6 md:p-12">
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold text-green-700 mb-4">Buy Fresh And Organic Grocery Food</h1>
        <p className="text-gray-700 mb-4">Discover a variety of fresh and organic meals that are healthy and delicious.</p>
        <button className="bg-green-700 text-white px-6 py-2 rounded-lg">Shop Now</button>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0">
        <img src="/food-banner.png" alt="Fresh Food" className="rounded-lg shadow-lg"/>
      </div>
    </div>
  );
};

export default Banner;
