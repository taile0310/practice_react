export const getFontSize = (size: string) => {
  switch (size) {
    case "h1":
      return "var(--fs-x-huge)";
    case "h2":
      return "var(--fs-large)";
    case "h3":
      return "var(--fs-x-large)";
    case "h4":
      return "30px";
    case "h5":
      return "24px";
    case "h6":
      return "16px";
  }
};
