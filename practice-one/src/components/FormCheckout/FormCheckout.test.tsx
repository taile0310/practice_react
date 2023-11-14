import { render } from "@testing-library/react";
import FormCheckout from ".";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("FormCheckout Component", () => {
  it("Render component correctly", () => {
    const container = render(<FormCheckout />);
    expect(container).toMatchSnapshot();
  });
});
