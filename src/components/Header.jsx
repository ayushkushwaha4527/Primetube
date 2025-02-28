import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { SiYoutube } from "react-icons/si";
import { BiVideoPlus } from "react-icons/bi";
import { GrSearch } from "react-icons/gr";
import { BiSolidUserCircle } from "react-icons/bi";
import { MdOutlineClear } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HAMBURGER_URL, USER_ICON_URL, YOUTUBE_ICON_URL, YOUTUBE_SEARCH_API, GOOGLE_API_KEY, YOUTUBE_SEARCH_RESULTS_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { clearSearchQuery, getSearchQuery, getSearchSuggestionData, getSearchSuggestionQuery } from "../utils/searchSlice";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const searchQuery1 = useSelector((store) => store.search.searchQuery);
  const navigate = useNavigate();
  const [searchSuggestions, setSearchSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchSuggestionList = useSelector((store) => store.search.searchSuggestionQuery);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const getSearchSuggestions = async () => {
    try {
      if (searchQuery1.length > 0) {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery1);
        const result = await data.json();
        dispatch(getSearchSuggestionQuery(result?.data[1]));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getSearchSuggestionsResults = async (e) => {
    try {
      e.preventDefault();
      if (searchQuery1.length > 0) {
        navigate(`/results?search_query=${searchQuery1}`);
        const data = await fetch(`${YOUTUBE_SEARCH_RESULTS_API}q=${searchQuery1}&key=${GOOGLE_API_KEY}`);
        const result = await data.json();
        dispatch(getSearchSuggestionData(result?.items));
        setSearchSuggestions(false);
        dispatch(getSearchSuggestionQuery(""));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery1]);

  return (
    <div className="flex justify-between items-center p-2 md:p-4 shadow-lg w-full relative bg-white">
      <div className="flex items-center gap-4">
        <button onClick={toggleMenuHandler} className="text-3xl">
          <GiHamburgerMenu />
        </button>
        <Link to="/" className="flex items-center gap-2">
          <SiYoutube className="text-4xl text-red-600" />
          <span className="text-lg font-bold">Primetube</span>
        </Link>
      </div>
      
      <form
        className="flex items-center w-3/6"
        onSubmit={getSearchSuggestionsResults}
      >
        <div className="flex w-full relative">
          <input
            type="text"
            value={searchQuery1}
            onChange={(e) => dispatch(getSearchQuery(e.target.value))}
            className="flex-1 border border-black p-2 rounded-l-full placeholder:text-sm"
            placeholder="Search"
            onFocus={() => setSearchSuggestions(true)}
          />
          {searchQuery1 && (
            <button
              type="button"
              className="text-xl text-red-600 ml-2"
              onClick={() => dispatch(clearSearchQuery())}
            >
              <MdOutlineClear />
            </button>
          )}
          <button type="submit" className="border border-black p-2 rounded-r-full bg-gray-200">
            <GrSearch />
          </button>
          {searchSuggestions && searchSuggestionList?.length > 0 && (
            <div className="absolute z-40 bg-white w-full shadow-lg rounded-xl p-2 mt-9">
              {searchSuggestionList.map((result, i) => (
                <button
                  key={i}
                  className="w-full flex items-center hover:bg-gray-200 p-2"
                  onClick={() => {
                    dispatch(getSearchQuery(result));
                    setSearchSuggestions(false);
                  }}
                >
                  <GrSearch className="text-xl mr-2" />
                  {result}
                </button>
              ))}
            </div>
          )}
        </div>
      </form>
      
      <div className="flex items-center gap-4">
        <BiVideoPlus className="text-2xl hidden md:block" />
        <IoMdNotificationsOutline className="text-2xl hidden md:block" />
        <BiSolidUserCircle className="text-3xl" />
      </div>
    </div>
  );
};

export default Header;
