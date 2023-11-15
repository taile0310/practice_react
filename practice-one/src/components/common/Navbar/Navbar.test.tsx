import { render } from "@testing-library/react";
import Navbar from ".";
import { BrowserRouter } from "react-router-dom";

describe("Navbar Component", () => {
  it("Render component correctly", () => {
    const container = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
