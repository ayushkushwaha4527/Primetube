import React from "react";

const SearchVideoCard = ({ id, thumbnail, title, channelTitle, description }) => {
  return (
    <div className="flex flex-col md:flex-row gap-3 p-3 bg-white shadow-md rounded-lg hover:shadow-lg transition duration-300">
      {/* Thumbnail Section */}
      <div className="w-full md:w-2/5 rounded-lg overflow-hidden">
        <img
          src={thumbnail}
          alt="thumbnail"
          className="w-full h-full object-cover rounded-lg hover:scale-105 transition duration-300"
        />
      </div>

      {/* Video Info Section */}
      <div className="flex flex-col gap-2 w-full md:w-3/5">
        {/* Title */}
        <p className="font-bold text-lg md:text-xl line-clamp-2">
          {title}
        </p>

        {/* Channel Name */}
        <p className="font-semibold text-gray-700">{channelTitle}</p>

        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SearchVideoCard;
