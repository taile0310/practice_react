// CSS
import "./Confirm.css";

// React
import { FC } from "react";

// Library
import { useShallow } from "zustand/react/shallow";

// Store
import { productStore } from "../../stores";

// Component
import { Button } from "..";

//Type
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
    productStore(
      useShallow((state) => ({
        productInfo: state.productInfo,
        productId: state.productId,
        isVisible: state.isVisible,
        showConfirm: state.showConfirm,
        hideConfirm: state.hideConfirm,
      }))
    );

  // Handler function for confirmation button
  const handleConfirm = () => {
    showConfirm(productId, children, productInfo!);
    onConfirm();
  };

  // Handler function for cancellation button
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
