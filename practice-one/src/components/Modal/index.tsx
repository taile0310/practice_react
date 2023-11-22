// CSS class
import "./Modal.css";

import { FC, ReactElement } from "react";
import { TOGGLE } from "../../types/Toggle";
import { Button, Heading, Input, Label } from "..";
import { VARIANT } from "../../types/Variant";

export type TCustomModalProps = {
  toggle: TOGGLE;
};

const Modal: FC<TCustomModalProps> = ({
  toggle = TOGGLE.OFF,
}): ReactElement => {
  return (
    <form action="" className={`toggle-${toggle} form-container`}>
      <div className="modal-header">
        <Heading className="text-h4" element="h4">
          UPDATE PRODUCT
        </Heading>
      </div>
      <div className="modal-body">
        <div className="modal-content">
          <div className="modal-label">
            <Label className="text-small" titleLabel="Name" />
          </div>
          <Input className="modal-input" type="text" name="name" />
        </div>

        <div className="modal-content">
          <div className="modal-label">
            <Label className="text-small" titleLabel="Image" />
          </div>
          <Input
            className="modal-input"
            type="file"
            name="image"
            accept="image/*"
          />
        </div>

        <div className="modal-content">
          <div className="modal-label">
            <Label className="text-small" titleLabel="Price" />
          </div>
          <Input className="modal-input" type="number" name="price" />
        </div>
      </div>

      <div className="modal-footer">
        <Button
          className="text-small"
          variants={VARIANT.TRANSPARENT}
          typeText="uppercase"
          children="Save changes"
        />
        <Button
          className="text-small"
          variants={VARIANT.TRANSPARENT}
          typeText="uppercase"
          children="Close"
        />
      </div>
    </form>
  );
};

export default Modal;
