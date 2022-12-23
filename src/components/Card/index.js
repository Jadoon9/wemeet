import React from "react";

const Card = ({ image, title, description, footer1, footer2 }) => {
  return (
    <div className="col-md-6 col-xl-3">
      <div className="card">
        {image && (
          <img className="card-img-top img-fluid" src={image} alt="Card  cap" />
        )}
        <div className="card-body">
          {title && <h4 className="card-title">{title}</h4>}
          {description && <p className="card-text">{description}</p>}
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
