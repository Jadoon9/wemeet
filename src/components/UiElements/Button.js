import React from "react";
import { Button } from "react-bootstrap";

const Buttonn = ({ type, onClick, variant, text, disabled }) => {
  return (
    <Button
      size="sm"
      disabled={disabled}
      className="mt-4 btn btn-primary"
      onClick={onClick}
      type={type}
      variant={variant}
    >
      {text}
    </Button>
  );
};

export default Buttonn;
