import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project"
import Drone from "./Pages/Drone";
import Internet from "./Pages/Internet";
import Special from "./Pages/Special";
import Brokerage from "./Pages/Brokerage";
import Media from "./Pages/Media";
import Contact from "./Pages/Contact";
import ScrollToTop from "./Pages/ScrollToTop";  // <-- yaha import fix

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/service" element={<About />} />
         <Route path="/project" element={<Project />} />
         <Route path="/drone" element={<Drone />} />
         <Route path="/internet" element={<Internet />} />
          <Route path="/special" element={<Special />} />
              <Route path="/brokerage" element={<Brokerage />} />
              <Route path="/media" element={<Media />} />
               <Route path="/contact" element={<Contact />} />

        {/* Baaki routes yaha add kar sakte ho */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
