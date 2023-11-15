import { render } from "@testing-library/react";
import MainLayout from "./MainLayout";
import { BrowserRouter } from "react-router-dom";

describe("MainLayout Component", () => {
  it("Render component correctly", () => {
    const container = render(
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
