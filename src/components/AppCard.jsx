import React from "react";
import { useNavigate } from "react-router-dom";

const AppCard = ({ app }) => {
  const navigate = useNavigate();

  const formatDownloads = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(0) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + "K";
    } else {
      return num;
    }
  };

  return (
    <div
      onClick={() => navigate(`/app/${app.id}`)}  
      className="bg-white rounded-xl shadow-md hover:shadow-xl cursor-pointer transition overflow-hidden w-[316px]"
    >
      {/* Image */}
      <figure className="w-[316px] h-[316px] overflow-hidden rounded-t-lg">
        <img
          src={app.image}
          alt={app.title}
          className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
        />
      </figure>

      {/* Content */}
      <div className="p-4 w-[316px]">
        <h3 className="font-semibold text-lg">{app.title}</h3>

        <div className="flex items-center justify-between mt-2">
          <span className="bg-green-100 text-green-600 text-sm px-2 py-1 rounded-md font-medium">
            ⬇ {formatDownloads(app.downloads)}
          </span>

          <span className="text-yellow-500 font-semibold">
            ⭐ {app.ratingAvg}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AppCard;