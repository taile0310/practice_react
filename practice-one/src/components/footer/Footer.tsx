// interface
import { CustomFooterProps } from "../../types/interface";

// Component Footer
const Footer = ({ className }: CustomFooterProps) => {
  return (
    <div className={className}>
      <span className="text-x-small font-family">
        Copyright &copy 2021 Sushi Restaurant
      </span>
    </div>
  );
};

export default Footer;
