import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const MyInstallation = () => {
  const [apps, setApps] = useState([]);
  const [sortType, setSortType] = useState("");

  // 🔥 number format
  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(0) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num;
  };

  // 🔥 load data
  useEffect(() => {
    const storedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    setApps(storedApps);
  }, []);

  // 🔥 uninstall
  const handleUninstall = (id) => {
    const updatedApps = apps.filter((app) => app.id !== id);

    setApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));

    toast.success("App Uninstalled ❌");
  };

  // 🔥 SORTING LOGIC
  const sortedApps = [...apps].sort((a, b) => {
    if (sortType === "high") return b.downloads - a.downloads;
    if (sortType === "low") return a.downloads - b.downloads;
    return 0;
  });

  return (
    <div className="max-w-6xl mx-auto">

      {/* TITLE */}
      <h2 className="text-3xl font-bold text-center">
        Your Installed Apps
      </h2>

      <p className="text-center text-gray-500 mt-2 mb-10">
        Explore All Trending Apps on the Market developed by us
      </p>

      {/* TOP BAR */}
      <div className="flex justify-between items-center mb-6">
        <p className="font-medium">{apps.length} Apps Found</p>

        {/* 🔥 WORKING SORT DROPDOWN */}
        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          className="border px-4 py-2 rounded-lg text-sm bg-white"
        >
          <option value="">Sort By Downloads</option>
          <option value="high">High → Low</option>
          <option value="low">Low → High</option>
        </select>
      </div>

      {/* LIST */}
      <div className="space-y-4">
        {sortedApps.length === 0 ? (
          <p className="text-center text-gray-500">
            No Installed Apps
          </p>
        ) : (
          sortedApps.map((app) => (
            <div
              key={app.id}
              className="flex items-center justify-between bg-gray-100 p-4 rounded-xl hover:shadow-md transition"
            >
              {/* LEFT */}
              <div className="flex items-center gap-4">

                <img
                  src={app.image}
                  alt=""
                  className="w-16 h-16 rounded-lg object-cover"
                />

                <div>
                  <h3 className="font-semibold text-gray-800">
                    {app.title}
                  </h3>

                  {/* STATS */}
                  <div className="flex items-center gap-4 text-sm mt-1">

                    {/* Downloads */}
                    <span className="flex items-center gap-1 text-green-600 font-medium">
                      ⬇ {formatNumber(app.downloads)}
                    </span>

                    {/* Rating */}
                    <span className="flex items-center gap-1 text-orange-500 font-medium">
                      ⭐ {app.rating}
                    </span>

                    {/* Size */}
                    <span className="text-gray-400">
                      {app.size} MB
                    </span>

                  </div>
                </div>

              </div>

              {/* RIGHT */}
              <button
                onClick={() => handleUninstall(app.id)}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
              >
                Uninstall
              </button>
            </div>
          ))
        )}
      </div>

    </div>
  );
};

export default MyInstallation;