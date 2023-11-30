import { render } from "@testing-library/react";
import Modal from ".";

describe("Modal Component", () => {
  it("Render component correctly", () => {
    const container = render(<Modal />);
    expect(container).toMatchSnapshot();
  });
});
