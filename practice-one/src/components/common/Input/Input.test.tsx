import { fireEvent, render } from "@testing-library/react";
import Input from ".";

describe("Input component", () => {
  it("Render correcty", () => {
    const container = render(<Input />);
    expect(container).toMatchSnapshot();
  });

  it("updates input value correctly", () => {
    const { getByTestId } = render(<Input data-testid="input" />);
    const input = getByTestId("input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "value" } });
    expect(input.value).toBe("value");
  });
});
