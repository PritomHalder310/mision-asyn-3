import React, { useState } from 'react';
import apps from "../data/apps.json";
import AppCard from "../components/AppCard";
import heroImg from '../assets/hero.png';
import googleIcon from '../assets/google-play.png';
import appleIcon from '../assets/apple-logo.png';
import { useNavigate } from "react-router-dom";


import img1 from "../assets/demo-app (1).webp";
import img2 from "../assets/demo-app (2).webp";
import img3 from "../assets/demo-app (3).webp";
import img4 from "../assets/demo-app (4).webp";
import img5 from "../assets/demo-app (5).webp";
import img6 from "../assets/demo-app (6).webp";

const localImages = [img1, img2, img3, img4, img5, img6];

const Home = () => {

    const [activeBtn, setActiveBtn] = useState(null);
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white">

            {/* Banner Section */}
            <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-b from-gray-50 to-white">

                <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight max-w-4xl">
                    We Build <br />
                    <span className="text-purple-600">
                        Productive <span className="text-gray-900">Apps</span>
                    </span>
                </h1>

                <p className="mt-6 text-gray-500 text-lg max-w-2xl">
                    At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                </p>

                {/* Buttons */}
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <button
                        onClick={(e) => { e.stopPropagation(); setActiveBtn('appStore'); }}
                        className={`px-6 py-3 rounded-xl font-bold border-2 flex items-center gap-2 ${activeBtn === 'appStore' ? 'bg-black text-white' : 'bg-white text-black'}`}
                    >
                        <img src={googleIcon} alt="" className="w-6 h-6" />
                        Google Play
                    </button>

                    <button
                        onClick={(e) => { e.stopPropagation(); setActiveBtn('playStore'); }}
                        className={`px-6 py-3 rounded-xl font-bold border-2 flex items-center gap-2 ${activeBtn === 'playStore' ? 'bg-black text-white' : 'bg-white text-black'}`}
                    >
                        <img src={appleIcon} alt="" className="w-6 h-6" />
                        App Store
                    </button>
                </div>

                {/* Hero Image */}
                <div className="mt-16 w-full max-w-5xl mx-auto px-6">
                    <img src={heroImg} alt="Hero Banner" className="w-full h-auto" />
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-20">
                        Trusted By Millions, Built For You
                    </h2>

                    <div className="grid grid-cols-3 gap-16">
                        <div className="text-center">
                            <p>Total Downloads</p>
                            <h3 className="text-5xl font-bold">29.6M</h3>
                        </div>

                        <div className="text-center">
                            <p>Total Reviews</p>
                            <h3 className="text-5xl font-bold">906K</h3>
                        </div>

                        <div className="text-center">
                            <p>Active Apps</p>
                            <h3 className="text-5xl font-bold">132+</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trending Apps */}
            <div className="py-16 px-6">
                <div className="max-w-[1350px] mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-5">Trending Apps</h2>
                    <p className="text-center text-gray-600 mb-10">
                        Explore All Trending Apps
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">

                        {apps.slice(0, 8).map((app) => {
                            const image =
                                app.image.startsWith("http")
                                    ? app.image
                                    : localImages[(app.id - 1) % 6];

                            return (
                                <AppCard
                                    key={app.id}
                                    app={{ ...app, image }}
                                />
                            );
                        })}

                    </div>

                    {/* Show All Button */}
                    <div className="flex justify-center mt-10">
                        <button
                            onClick={() => navigate("/all-apps")}
                            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
                        >
                            Show All
                        </button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Home;