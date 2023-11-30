import { render } from "@testing-library/react";
import { NOTIFY } from "../../constants";
import Confirm from ".";

describe("Confirm Component", () => {
  const props = {
    children: NOTIFY.ADD_PRODUCT,
    onConfirm: jest.fn(),
    onCancel: jest.fn(),
  };
  it("Render component correctly", () => {
    const container = render(<Confirm {...props} />);
    expect(container).toMatchSnapshot();
  });
});
