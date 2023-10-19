// CSS
import Heading from "../../components/common/Heading";
import "./home-page.css";

// React router
import { Link, NavLink } from "react-router-dom";

// Component HomePage
const HomePage = () => {
  return (
    <div className="home-layout font-family">
      <section className="home-content">
        <Heading
          className="text-h1"
          element="h1"
          content={
            <>
              Welcome to <span className="span-bold">Sushi</span> Restaurant
            </>
          }
        />
        <p className="text-p">
          People eat with their eyes and Sushi creates an easy way for customers
          to order when they can see beautiful photos of your food
        </p>
        <div className="nav-button">
          <Link to="/" className="btn btn-primary font-family primary-text-btn">
            ABOUT
          </Link>
          <NavLink
            to="/menu"
            className="btn btn-primary btnMenu font-family primary-text-btn">
            MENU
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
