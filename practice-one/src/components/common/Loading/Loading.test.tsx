import { render } from "@testing-library/react";
import Loading from ".";

describe("Loading Component", () => {
  it("Render component correctly", () => {
    const container = render(<Loading />);
    expect(container).toMatchSnapshot();
  });
});
