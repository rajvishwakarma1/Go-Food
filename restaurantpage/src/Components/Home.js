import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
        <p className="primary-text-2">
            Discount up to 20%
          </p>
          <h1 className="primary-heading">
            Buy Fresh and Organic Grocery Food
          </h1>
          <p className="primary-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus a eos molestiae placeat magni maxime laboriosam animi laborum. Officia iure, unde harum non repellendus.
          </p>
          <button className="secondary-button">
            Shop Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
