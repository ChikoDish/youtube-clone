import React, { useState } from "react";

const Searchbar = ({ handleFormSubmit }) => {
  const [searchText, setSearchText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(searchText);
  };
  return (
    <div className="search-bar ui segment">
      <form onSubmit={handleSubmit} className="ui form">
        <div className="field">
          <label htmlFor="video-search">Video Search</label>
          <input
            onChange={(e) => setSearchText(e.target.value)}
            name="video-search"
            type="text"
            value={searchText}
          />
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
