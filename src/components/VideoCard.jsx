import React from "react";
import moment from "moment";
import { numFormatter } from "../utils/constants";

const VideoCard = ({
  thumbnail,
  title,
  channelTitle,
  releaseDate,
  viewsCount,
}) => {
  return (
    <div className="flex flex-col gap-1 w-[320px] h-[260px] rounded-lg overflow-hidden shadow-lg">
      <div className="relative w-full h-[180px]">
        <img
          className="w-full h-full object-cover"
          src={thumbnail}
          alt="thumbnail"
        />
      </div>
      <div className="flex flex-col p-2">
        <h3 className="font-semibold text-md truncate overflow-hidden">
          {title}
        </h3>
        <p className="text-sm text-gray-500 truncate">{channelTitle}</p>
        <div className="flex gap-3 text-xs text-gray-500">
          <span>{numFormatter(viewsCount)} views</span>
          <span>{moment(releaseDate).fromNow()}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
