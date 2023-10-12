import { Link } from "react-router-dom";
import "./home-page.css";

const HomePage = () => {
  return (
    <div className="font-family home-layout">
      <section className="home-content">
        <h2 className="text-h2">
          Welcome to <span>Shushi</span> Restaurant
        </h2>
        <p className="text-p">
          People eat with their eyes and Sushi creates an easy way for customers
          to order when they can see beautiful photos of your food
        </p>
        <div className="nav-button">
          <Link to="/" className="btn-primary font-family primary-text-btn">
            ABOUT
          </Link>
          <Link
            to="/menu"
            className="btn-primary btnMenu font-family primary-text-btn">
            MENU
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
