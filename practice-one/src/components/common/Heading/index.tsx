// Type
import { THeading } from "../../../types/Heading";

// Helper
import { getFontSize } from "../../../helpers/FontSize";

export type HeadingProps = {
  className?: string;
  element: THeading;
  children: React.ReactNode;
};

// Component Heading
const Heading: React.FC<HeadingProps> = ({
  element,
  children,
  className,
}): React.ReactElement => {
  const headingStyles = {
    fontSize: getFontSize(element),
  };

  const HeadingTag = element;

  return (
    <HeadingTag className={`${className} font-family`} style={headingStyles}>
      {children}
    </HeadingTag>
  );
};

export default Heading;
