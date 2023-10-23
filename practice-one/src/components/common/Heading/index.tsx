// Type
import { HeadingProps } from "../../../types";

// Helper
import { getFontSize } from "../../../helpers/font-size";

// Component Heading
const Heading: React.FC<HeadingProps> = ({ element, content, className }) => {
  const headingStyles = {
    fontSize: getFontSize(element),
  };

  const HeadingTag = element;

  return (
    <HeadingTag className={`${className} font-family`} style={headingStyles}>
      {content}
    </HeadingTag>
  );
};

export default Heading;
