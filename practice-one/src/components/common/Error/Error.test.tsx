import { render } from "@testing-library/react";
import Error from ".";
import { ERROR_MESSAGES } from "../../../constants/Error";

describe("Error Component", () => {
  it("Render component correctly", () => {
    const container = render(<Error content={ERROR_MESSAGES.FETCH} />);
    expect(container).toMatchSnapshot();
  });
});
