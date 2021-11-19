import React from "react";

const searchStyle = {
  position: "relative",
  top: "-20px",
  // left: "30px",
  width: "300px",
};

function Search({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(event.target.elements.filter.value);
  };

  return (
    <form onSubmit={handleSubmit} style={searchStyle}>
      <input name="filter" />
      <button>Search</button>
    </form>
  );
}

export default Search;
