import React from "react";

const Card = ({ children, image, title, description, footer1, footer2 }) => {
  return (
    <div className="col-sm-12 col-md-12 col-xl-12">
      <div className="card">
        {image && (
          <img className="card-img-top img-fluid" src={image} alt="Card  cap" />
        )}
        <div className="card-body">
          {title && <h4 className="card-title">{title}</h4>}
          {description && <p className="card-text">{description}</p>}
          {children}
        </div>

        {footer1 && (
          <div className="card-body">
            <a href="#/" className="card-link">
              {footer1}
            </a>
            <a href="#/" className="card-link">
              {footer2}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
