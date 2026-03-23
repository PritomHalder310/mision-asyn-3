import React, { useState } from "react";
import { useParams } from "react-router-dom";
import appsData from "../data/apps.json";
import toast from "react-hot-toast";

import img1 from "../assets/demo-app (1).webp";
import img2 from "../assets/demo-app (2).webp";
import img3 from "../assets/demo-app (3).webp";
import img4 from "../assets/demo-app (4).webp";
import img5 from "../assets/demo-app (5).webp";
import img6 from "../assets/demo-app (6).webp";

const localImages = [img1, img2, img3, img4, img5, img6];

const formatNumber = (num) => {
  if (num >= 1000000) return (num / 1000000).toFixed(1).replace(".0", "") + "M";
  if (num >= 1000) return (num / 1000).toFixed(1).replace(".0", "") + "K";
  return num;
};

const getInstalledApps = () => JSON.parse(localStorage.getItem("installedApps")) || [];
const saveInstalledApps = (apps) => localStorage.setItem("installedApps", JSON.stringify(apps));

const AppDetails = () => {
  const { id } = useParams();
  const app = appsData.find(a => a.id === parseInt(id));

  if (!app) {
    return (
      <div className="text-center mt-20 px-4 md:px-6 lg:px-0">
        <img src={img1} alt="App Not Found" className="mx-auto w-40 md:w-52 lg:w-64 h-40 md:h-52 lg:h-64 object-cover" />
        <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold mt-6">App Not Found</h1>
      </div>
    );
  }

  const image = app.image?.startsWith("http") ? app.image : localImages[(app.id - 1) % 6];

  const [installed, setInstalled] = useState(() =>
    getInstalledApps().some(a => a.id === app.id)
  );

  const totalRatings = app.ratings?.reduce((sum, r) => sum + r.count, 0) || 0;
  const ratingsOrder = { "5": 5, "4": 4, "3": 3, "2": 2, "1": 1 };
  const ratingsData = [...(app.ratings || [])]
    .sort((a,b) => ratingsOrder[b.name]-ratingsOrder[a.name])
    .map(r => ({ ...r, percent: totalRatings ? (r.count / totalRatings) * 100 : 0 }));

  const handleInstall = () => {
    const storedApps = getInstalledApps();
    if (storedApps.find(a => a.id === app.id)) {
      toast.error("Already Installed ⚠️");
      return;
    }
    const appData = { id: app.id, title: app.title, image, downloads: app.downloads, rating: app.ratingAvg, size: app.size };
    saveInstalledApps([...storedApps, appData]);
    setInstalled(true);
    toast.success("App Installed Successfully ✅");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-4 py-10">

      {/* HEADER */}
      <div className="flex items-center gap-6 border p-6 rounded-xl flex-col md:flex-col lg:flex-row">
        <img src={image} alt={app.title} className="w-24 md:w-28 lg:w-28 h-24 md:h-28 lg:h-28 rounded-xl object-cover"/>
        
        <div className="flex-1 text-center md:text-center lg:text-left">
          <h2 className="text-xl md:text-2xl lg:text-2xl font-bold">{app.title}</h2>
          <p className="text-gray-500 text-sm mt-1">Developed by {app.companyName}</p>

          {/* STATS */}
          <div className="flex gap-6 md:gap-8 lg:gap-10 mt-4 flex-wrap justify-center md:justify-center lg:justify-start">
            <div><p className="text-green-600 text-sm">⬇ Downloads</p><h3 className="font-bold text-base md:text-lg lg:text-lg">{formatNumber(app.downloads)}</h3></div>
            <div><p className="text-orange-500 text-sm">⭐ Average</p><h3 className="font-bold text-base md:text-lg lg:text-lg">{app.ratingAvg}</h3></div>
            <div><p className="text-purple-500 text-sm">📊 Reviews</p><h3 className="font-bold text-base md:text-lg lg:text-lg">{app.reviews}</h3></div>
          </div>

          {/* INSTALL BUTTON */}
          <button
            onClick={handleInstall}
            disabled={installed}
            className={`mt-4 px-5 py-2 rounded-md text-white text-sm ${installed ? "bg-gray-400 cursor-not-allowed" : "bg-green-600"}`}
          >
            {installed ? "Installed" : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>

      {/* RATINGS */}
      <div className="mt-10 border p-4 md:p-5 lg:p-6 rounded-xl">
        <h3 className="font-bold mb-4">Ratings</h3>
        <div className="space-y-3">
          {ratingsData.map((r,index)=>(
            <div key={index} className="flex items-center gap-2 md:gap-3 lg:gap-3">
              <span className="w-10 md:w-12 lg:w-14 text-xs md:text-sm lg:text-sm">{r.name}</span>
              <div className="flex-1 bg-gray-200 h-2 md:h-3 lg:h-3 rounded">
                <div className="bg-orange-500 h-2 md:h-3 lg:h-3 rounded" style={{width:`${r.percent}%`}}></div>
              </div>
              <span className="text-[10px] md:text-xs lg:text-xs text-gray-500 w-8 md:w-9 lg:w-10">{r.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="mt-10 border p-4 md:p-5 lg:p-6 rounded-xl">
        <h3 className="font-bold text-lg md:text-xl lg:text-xl mb-4">Description</h3>
        <p className="text-gray-600 leading-relaxed text-sm md:text-base lg:text-base">{app.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;