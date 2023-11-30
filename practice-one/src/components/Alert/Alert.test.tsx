import { render } from "@testing-library/react";
import Alert from ".";
import { NOTIFY } from "../../constants";

describe("Alert Component", () => {
  it("Render component correctly", () => {
    const container = render(<Alert children={NOTIFY.HANDLE_SUCCESS} />);
    expect(container).toMatchSnapshot();
  });
});
