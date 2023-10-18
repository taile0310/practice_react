// CSS
import "./home-page.css";

// React router
import { Link, NavLink } from "react-router-dom";

// Component HomePage
const HomePage = () => {
  return (
    <div className="font-family home-layout">
      <section className="home-content">
        <h1 className="text-h2">
          Welcome to <span>Shushi</span> Restaurant
        </h1>
        <p className="text-p">
          People eat with their eyes and Sushi creates an easy way for customers
          to order when they can see beautiful photos of your food
        </p>
        <div className="nav-button">
          <Link to="/" className="btn-primary font-family primary-text-btn">
            ABOUT
          </Link>
          <NavLink
            to="/menu"
            className="btn-primary btnMenu font-family primary-text-btn">
            MENU
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
