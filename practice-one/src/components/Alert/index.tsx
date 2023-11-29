import "./Alert.css";
import { FC, ReactNode, useEffect } from "react";
import { useAlertStore } from "../../stores/useAlertStore";
import { ERROR_MESSAGES, NOTIFY } from "../../constants";
type TAlertProps = {
  children: ReactNode;
};
const Alert: FC<TAlertProps> = ({ children }) => {
  const { message, isAlertVisible, hideAlert } = useAlertStore();

  useEffect(() => {
    if (isAlertVisible) {
      const timeoutId = setTimeout(() => {
        hideAlert();
      }, 2000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isAlertVisible, hideAlert]);

  return (
    <div
      className={`alert ${isAlertVisible && "show"} ${
        message === ERROR_MESSAGES.FETCH
          ? "alert-error"
          : message === NOTIFY.EMPTY
          ? "alert-warning"
          : "alert-success"
      }`}>
      <p className="alert-content">
        {children}
        {message}
      </p>
    </div>
  );
};

export default Alert;
