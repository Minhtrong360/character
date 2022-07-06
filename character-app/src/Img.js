import React from "react";

function Img({ item, handleClick }) {
  return (
    <img
      key={item.props.id}
      id={item.props.id}
      name={item.props.name}
      className={item.props.className}
      src={item.props.src}
      alt="PNG"
      onClick={() => handleClick(item)}
      choose={item}
    />
  );
}

export default Img;
