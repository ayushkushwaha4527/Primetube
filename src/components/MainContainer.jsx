import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { classMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";

const MainContainer = () => {
  const dispatch = useDispatch();
  const searchVideos = useSelector((store) => store.search.searchSuggestionData);

  return (
    <div
      className="flex-1 flex flex-col items-center gap-6 w-full px-4 md:px-8"
      onFocus={() => dispatch(classMenu())}
    >
      {/* Display button list only if there are no search results */}
      {!searchVideos && <ButtonList />}

      {/* Video content */}
      <div className="w-full max-w-screen-xl">
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
