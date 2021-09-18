import React from "react";

const TodoHeaders = ({headers, onClickHandler}) => {

  const handleClick = (ev) => {
    if(!ev.target.dataset.order) {
      ev.target.dataset.order = "ASC";
    } else {
      let order = "";

      switch (ev.target.dataset.order) {
        case "ASC":
          order = "DESC";
          break;

        case "DESC":
          order = "ASC";
          break;
      
        default:
          break;
      }

      ev.target.dataset.order = order;
    }

    onClickHandler(ev);
  }

  return <>
    { 
      headers.map((unTrimmedHeader, idx) => {
        const header = unTrimmedHeader.trim();
        return <th onClick={handleClick} data-header-name={header} className={`th--${header} theader`} key={idx}>{header}</th>
      })
    } 
  </>
};

export default TodoHeaders;