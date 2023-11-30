import { FC } from "react";
import "./Confirm.css";
import { useConfirmStore } from "../../stores/useConfirmStores";
import { Button } from "..";
import { VARIANT } from "../../types";

// Define props for confirm
interface ConfirmProps {
  children: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Confirm: FC<ConfirmProps> = ({ children, onConfirm, onCancel }) => {
  // Use hooks to get functions
  const { productInfo, productId, isVisible, showConfirm, hideConfirm } =
    useConfirmStore();

  const handleConfirm = () => {
    showConfirm(productId, children, productInfo!);
    onConfirm();
  };

  const handleCancel = () => {
    hideConfirm();
    onCancel();
  };

  return (
    <div className={`confirm-container ${isVisible ? "visible" : ""}`}>
      <div className="confirm-box">
        <p>{children}</p>
        <div className="button-container">
          <Button
            className=""
            variants={VARIANT.PRIMARY}
            typeText="capitalize"
            onClick={handleConfirm}
            children="Yes"
          />
          <Button
            className=""
            variants={VARIANT.PRIMARY}
            typeText="capitalize"
            onClick={handleCancel}
            children="No"
          />
        </div>
      </div>
    </div>
  );
};

export default Confirm;
