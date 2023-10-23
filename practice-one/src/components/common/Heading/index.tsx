// Type

// Helper
import { getFontSize } from "../../../helpers/font-size";
import { THeading } from "../../../types/THeading";

export type HeadingProps = {
  className?: string;
  element: THeading;
  content: React.ReactNode;
};

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
