import { Component, ErrorInfo, ReactNode } from "react";
import { ERROR_MESSAGES } from "../../constants";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.log("Error:", error);
    console.log("Error Info:", info);
    this.setState({ hasError: true });
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <h1>{ERROR_MESSAGES.FETCH}</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
