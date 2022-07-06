import React from "react";

function Img({ item, handleClick }) {
  return (
    <div className="square">
      <img
        key={item.props.id}
        id={item.props.id}
        name={item.props.name}
        className={item.props.className}
        src={item.props.src}
        width={item.props.width}
        alt="PNG"
        onClick={() => handleClick(item)}
      />
    </div>
  );
}

export default Img;
