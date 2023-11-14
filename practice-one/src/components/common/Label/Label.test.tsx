import { render } from "@testing-library/react";
import Label from ".";

describe("Label Component", () => {
  it("Render component correctly", () => {
    const container = render(<Label titleLabel="Name" />);
    expect(container).toMatchSnapshot();
  });
});
