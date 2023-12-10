import React from "react";

function Logo() {
  return (
    <div>
      <a href="/">
        <img src="/logo.png" alt="eve" />
      </a>
    </div>
  );
}

export default Logo;

export const layout = {
  areaId: "header",
  sortOrder: 5,
};
