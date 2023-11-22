import { render } from "@testing-library/react";
import ListProduct, { TListProduct } from ".";

describe("ListProduct Component", () => {
  it("Render component correctly", () => {
    const prop: TListProduct = {
      handleRemoveProduct: jest.fn(),
    };
    const container = render(<ListProduct {...prop} />);
    expect(container).toMatchSnapshot();
  });
});
