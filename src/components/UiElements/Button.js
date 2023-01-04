import React from "react";
import { Button } from "react-bootstrap";

const Buttonn = ({ type, onClick, variant, text, disabled }) => {
  return (
    <Button
      size="sm"
      disabled={disabled}
      className="mt-4"
      onClick={onClick}
      type={type}
      variant={variant || "primary"}
    >
      {text}
    </Button>
  );
};

export default Buttonn;
