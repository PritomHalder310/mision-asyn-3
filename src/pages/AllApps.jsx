import React, { useState } from "react";
import appsData from "../data/apps.json";
import AppCard from "../components/AppCard";

// Local images import
import img1 from "../assets/demo-app (1).webp";
import img2 from "../assets/demo-app (2).webp";
import img3 from "../assets/demo-app (3).webp";
import img4 from "../assets/demo-app (4).webp";
import img5 from "../assets/demo-app (5).webp";
import img6 from "../assets/demo-app (6).webp";

const localImages = [img1, img2, img3, img4, img5, img6];

const AllApps = () => {
  const [search, setSearch] = useState("");

  // search filter
  const filteredApps = appsData.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="py-16 px-6">
      <div className="max-w-[1350px] mx-auto">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center">Our All Applications</h2>
        <p className="text-center text-gray-500 mt-2 mb-10">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>

        {/* Search + Count */}
        <div className="flex justify-between items-center mb-8">
          <p className="font-mono text-2xl">Total Apps: {filteredApps.length}</p>

          <input
            type="text"
            placeholder="Search apps..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-4 py-2 rounded-lg"
          />
        </div>

        {/* Apps */}
        {filteredApps.length === 0 ? (
          <div className="text-center">
            <p className="text-gray-500 font-semibold text-5xl mb-6">
              No App Found
            </p>

            <button
              onClick={() => setSearch("")}
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
            >
              Show All
            </button>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-6">
            {filteredApps.map((app) => {
              const image =
                app.image.startsWith("http")
                  ? app.image
                  : localImages[(app.id - 1) % 6];

              return <AppCard key={app.id} app={{ ...app, image }} />;
            })}
          </div>
        )}

      </div>
    </div>
  );
};

export default AllApps;