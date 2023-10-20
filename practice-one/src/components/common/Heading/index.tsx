import { HeadingProps } from "../../../types";

const Heading: React.FC<HeadingProps> = ({ element, content, className }) => {
  const headingStyles = {
    fontSize: getFontSize(element),
  };

  function getFontSize(size: string) {
    switch (size) {
      case "h1":
        return "var(--fs-x-huge)";
      case "h2":
        return "var(--fs-large)";
      case "h3":
        return "var(--fs-x-large)";
      case "h4":
        return "30";
      case "h5":
        return "20";
      case "h6":
        return "10";
    }
  }

  const HeadingTag = element;
  return (
    <HeadingTag className={`${className} font-family`} style={headingStyles}>
      {content}
    </HeadingTag>
  );
};

export default Heading;
