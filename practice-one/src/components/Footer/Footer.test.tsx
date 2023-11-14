import { render } from "@testing-library/react";
import Footer from ".";

describe("Footer Component", () => {
  it("Render component correctly", () => {
    const container = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
