import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "./Button";

const Modall = ({
  children,
  title,
  body,
  deleteButton,
  closeButton,
  saveButton,
  onClose,
  showModal,
}) => {
  return (
    <>
      <Modal show={showModal} onHide={() => onClose(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {body && <p>{body}</p>}
          {children}
        </Modal.Body>
        <Modal.Footer>
          {/* {<Button type="submit" text="Submit" variant="primary" />} */}
          {closeButton && (
            <Button
              variant="secondary"
              text="Cancel"
              onClick={() => onClose(false)}
            />
          )}
          {saveButton && <Button variant="primary" text="Save Changes" />}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Modall;
