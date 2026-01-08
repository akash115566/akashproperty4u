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
import Footer from "./Pages/Footer";
import Contact from "./Pages/Contact";
import Terms from "./Pages/Terms";
import Services from "./Pages/Services";
import Legal from "./Pages/Legal";
import Privacy from "./Pages/Privacy";
import Apex from "./Pages/Apex";
import Spect from "./Pages/Spect";
import ScrollToTop from "./Pages/ScrollToTop";  // <-- yaha import fix

const App = () => {
  
  // const location = useLocation();
  //  const hideLayout = location.pathname === "/spect";
  return (
    <BrowserRouter>
       { <Navbar />}
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
                <Route path="/footer" element={<Footer />} />
                  <Route path="/terms" element={<Terms />} />
                   <Route path="/services" element={<Services />} />
                   <Route path="/legal" element={<Legal />} />
                    <Route path="/privacy" element={<Privacy />} />
                       <Route path="/apex" element={<Apex />} />
                            <Route path="/spect" element={<Spect />} />

        {/* Baaki routes yaha add kar sakte ho */}
      </Routes>
      { <Footer />}
    </BrowserRouter>
  );
};

export default App;
