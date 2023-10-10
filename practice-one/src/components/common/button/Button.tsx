import "./Button.css";

interface CustomBtnProps {
  textBtn: string;
  className?: string;
  isHomePage?: boolean;
}

const Button = ({ className, textBtn, isHomePage }: CustomBtnProps) => {
  const buttonClassName = isHomePage ? "btn-primary" : "btn-secondary";
  return (
    <button className={`${buttonClassName} font-family ${className}`}>
      {textBtn}
    </button>
  );
};

export default Button;
