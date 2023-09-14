import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";

const SearchBar = ({onSearch}) => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleFormSubmit = async (query) => {
    query.preventDefault();

    try {
      const apiKey = "ac19c1209b3c6763bb59ab9edd1e1202";
      // Make a GET request to the TMDB API search endpoint
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie`,
        {
          params: {
            api_key: apiKey,
            query: searchText,
          },
        }
      );

      // Pass the search results to the onSearch callback
      console.log(response.data.results)
      // onSearch(response.data.results);
    } catch (error) {
      console.error("Error fetching movie search results: ", error);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleFormSubmit}
        className="flex justify-between items-center border w-[380px] rounded-md"
      >
        <input
          className="text-white outline-none px-2 py-1 bg-inherit w-full"
          type="text"
          placeholder="What do you want to watch?"
          value={searchText}
          onChange={handleInputChange}
        />
        <button type="submit" className="mr-2">
          <AiOutlineSearch size={20} className="text-white" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
