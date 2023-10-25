// CSS
import "./home-page.css";

// Component
import { Heading } from "../../components";

// React router
import { Link } from "react-router-dom";
import React from "react";

// Component HomePage
const HomePage: React.FC = (): React.ReactElement => {
  return (
    <div className="home-layout font-family">
      <section className="home-content">
        <Heading className="text-h1" element="h1">
          Welcome to <span className="span-bold">Sushi</span> Restaurant
        </Heading>
        <p className="text-p">
          People eat with their eyes and Sushi creates an easy way for customers
          to order when they can see beautiful photos of your food
        </p>
        <div className="nav-button">
          <Link to="/" className="btn btn-primary primary-text-btn btn-lg">
            ABOUT
          </Link>
          <Link
            to="/menu"
            className="btn btn-primary btnMenu primary-text-btn btn-lg">
            MENU
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
