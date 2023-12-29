import React from "react";

export const HeaderMenu = ({title}) => {
  return (
    <div>
      <div className="p-8">
        <h3 className="text-center text-2xl text-color-whity">{title}</h3>
      </div>
    </div>
  );
};
