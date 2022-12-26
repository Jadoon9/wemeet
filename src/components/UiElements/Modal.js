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
}) => {
  return (
    <>
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {body && <p>{body}</p>}
            {children}
          </Modal.Body>

          <Modal.Footer>
            {closeButton && <Button variant="secondary" label="Cancel" />}
            {saveButton && <Button variant="primary" label="Save Changes" />}
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </>
  );
};

export default Modall;
