import React from "react";

function Img({ item, handleClick }) {
  return (
    <img
      key={Date.now()}
      id={item.props.id}
      name={item.props.name}
      className={item.props.className}
      src={item.props.src}
      width="50px"
      alt="PNG"
      onClick={() => handleClick(item)}
      choose={item}
    />
  );
}

export default Img;
