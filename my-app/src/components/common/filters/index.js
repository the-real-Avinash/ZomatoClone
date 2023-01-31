import React from "react";
import "./filters.css";
import FilterItem from "./filterItem";
const Filters = ({ filterList }) => {
  return (
    <div className="filters cur-por">
      {filterList &&
        filterList.map((filter) => {
          return <FilterItem filter={filter} key={filter.id} />;
        })}
    </div>
  );
};

export default Filters;
