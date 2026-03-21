import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AppDetails from "./pages/AppDetails";
import MyInstallation from "./pages/MyInstallation";
import AllApps from "./pages/AllApps";
import Error from "./pages/Error"; 

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

 
  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">

    
      <Toaster position="top-right" />

      
      <Header />

      
      {loading ? (
        <div className="flex justify-center items-center h-[60vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-purple-600"></div>
        </div>
      ) : (
        <main className="flex-grow p-10">
          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/all-apps" element={<AllApps />} />

            <Route path="/app/:id" element={<AppDetails />} />

            <Route path="/my-installation" element={<MyInstallation />} />

            
            <Route path="/not-found" element={<Error />} />

            
            <Route path="*" element={<Error />} />

          </Routes>
        </main>
      )}

     
      <Footer />
    </div>
  );
}

export default App;