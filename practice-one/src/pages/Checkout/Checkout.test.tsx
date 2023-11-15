import { render } from "@testing-library/react";
import Checkout from ".";
import { BrowserRouter } from "react-router-dom";

describe("Checkout Component", () => {
  it("Render component correctly", () => {
    const container = render(
      <BrowserRouter>
        <Checkout />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
