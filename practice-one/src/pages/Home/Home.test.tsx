import { render } from "@testing-library/react";
import Home from ".";
import { ErrorBoundary } from "react-error-boundary";

describe("Home Component", () => {
  it("Render component correctly", () => {
    const container = render(
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Home />
      </ErrorBoundary>
    );
    expect(container).toMatchSnapshot();
  });
});
