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
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </>
  );
};

export default Modall;
