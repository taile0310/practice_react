import { render } from "@testing-library/react";
import Home from ".";
import { BrowserRouter } from "react-router-dom";

describe("Home Component", () => {
  it("Render component correctly", () => {
    const container = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
