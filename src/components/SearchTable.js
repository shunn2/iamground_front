import React from "react";
import SearchIcon from '@mui/icons-material/Search';

const searchStyle = {
  width: "300px",
  marginBottom:'15px',
  display:'flex',
  alignItems:'center'
};

function Search({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(event.target.elements.filter.value);
  };

  return (
    <form onSubmit={handleSubmit} style={searchStyle}>
      <SearchIcon/>
      <input name="filter" />
    </form>
  );
}

export default Search;
