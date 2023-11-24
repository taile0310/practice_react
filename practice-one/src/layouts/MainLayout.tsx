// React router
import { Outlet } from "react-router-dom";

// Components
import { ErrorBoundary, Footer, Navbar } from "../components";
import { FC, ReactElement } from "react";

const MainLayout: FC = (): ReactElement => {
  return (
    <div className="container-page">
      <div className="component-layout font-family">
        <ErrorBoundary>
          <Navbar />
        </ErrorBoundary>
        <Outlet />
      </div>
      <div className="mg-footer">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
