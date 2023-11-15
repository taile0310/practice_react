import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ListCart from ".";

describe("ListCart Component", () => {
  it("Render component correctly", () => {
    const container = render(
      <BrowserRouter>
        <ListCart />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
