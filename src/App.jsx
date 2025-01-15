import React, { useState } from "react";
import AdminDashboard from "./Components/dashboards/AdminDashboard";
import Home from "./Components/Pages/Home";
import Footer from "./Components/Footer";
import Navbar from "./components/Navbar";
import WhatWeDo from "./components/Pages/WhatWeDo";
import DonationForm from "./components/Pages/DonationForm";
import ContactUs from "./Components/Pages/ContactUs";
import EventDetails from "./components/EventDetails (1)";
import DonatePage from "./components/Pages/donatepage";
import VolunteerPage from "./components/Pages/VolunteerPage";
import VolunteerForm from "./components/Pages/volunteerform";
import StoriesPage from "./components/Pages/StoriesPage";
import AboutUs from "./components/Pages/AboutUs (1)";
// import FamilyMemberView from "./components/FamilyMemberView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="px-3">
          {/* Define the Routes for your application */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<WhatWeDo />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/donation/donationform" element={<DonationForm />} />
            <Route path="/eventdetails" element={<EventDetails />}/>
            <Route path="/admindashboard" element={<AdminDashboard />} />
            <Route path="/volunteer" element={<VolunteerPage />} />
            <Route path="/volunteer/volunteerform" element={<VolunteerForm />} />
            <Route path="/donation" element={<DonatePage />} />
            <Route path="/stories" element={<StoriesPage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            {/* <Route path="/familymember" element={<FamilyMemberView />} /> */}
            

            
            {/* Add more routes here as needed */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
