import { render } from "@testing-library/react";
import Menu from ".";

describe("Menu Component", () => {
  it("Render component correctly", () => {
    const container = render(<Menu />);
    expect(container).toMatchSnapshot();
  });
});
