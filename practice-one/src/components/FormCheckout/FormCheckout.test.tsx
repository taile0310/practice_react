import { render } from "@testing-library/react";
import FormCheckout from ".";
import { BrowserRouter } from "react-router-dom";

describe("FormCheckout Component", () => {
  it("Render component correctly", () => {
    const container = render(
      <BrowserRouter>
        <FormCheckout />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
