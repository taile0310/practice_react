import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Card from ".";
import { VARIANT } from "../../../types/Variant";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate:jest.fn(),
}));

describe("Card Component", () => {
  const props = {
    titleCard: "Your Subtotal",
    variants: VARIANT.PRIMARY,
  };
  it("Render correctly with default props", () => {
    const container = render(<Card {...props} />);
    expect(container).toMatchSnapshot();
  });

  it("Render with variant is secondary", () => {
    const container = render(<Card {...props} variants={VARIANT.SECONDARY} />);
    expect(container).toMatchSnapshot();
  });
});
