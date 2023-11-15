import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Card from ".";
import { VARIANT } from "../../../types/Variant";
import { BrowserRouter } from "react-router-dom";

describe("Card Component", () => {
  const props = {
    titleCard: "Your Subtotal",
    variants: VARIANT.PRIMARY,
  };
  it("Render correctly with default props", () => {
    const container = render(
      <BrowserRouter>
        <Card {...props} />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });

  it("Render with variant is secondary", () => {
    const container = render(
      <BrowserRouter>
        <Card {...props} variants={VARIANT.SECONDARY} />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
