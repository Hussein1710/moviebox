import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSearch(searchText);
  };

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleFormSubmit} className="flex justify-between items-center border w-[380px] rounded-md">
        <input
          className="text-white outline-none px-2 py-1 bg-inherit w-full"
          type="text"
          placeholder="What do you want to watch?"
          value={searchText}
          onChange={handleInputChange}
        />
          <AiOutlineSearch size={20} className="mr-2 text-white"/>
      </form>{" "}
    </div>
  );
};

export default SearchBar;
