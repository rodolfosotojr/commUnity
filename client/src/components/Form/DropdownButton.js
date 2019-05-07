import React from "react";

export function DropdownButton(props) {
  return (
    <div
      ClassName="dropdown-item-button"
      title="Dropdown button"
      >
      <Dropdown
      onClick= {props.handleBtnClick}
      data-value="volunteer"
      />
      <Dropdown
      onClick= {props.handleBtnClick}
      data-value="user"
      />
    </div>
  );
}
