import React from "react";

const index = ({ alertColor, onClick, showAlert, text }) => {
  return (
    <>
      {showAlert && (
        <div className="">
          <div
            className={`alert ${alertColor} alert-dismissible fade show`}
            role="alert"
          >
            <button
              onClick={onClick}
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
            {text}
          </div>
        </div>
      )}
    </>
  );
};

export default index;
