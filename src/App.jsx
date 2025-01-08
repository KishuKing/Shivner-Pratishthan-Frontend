import React, { useState } from "react";
import AdminDashboard from "./Components/dashboards/AdminDashboard";
import Home from "./Components/Pages/Home";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import WhatWeDo from "./Components/Pages/WhatWeDo";
import DonationForm from "./Components/Pages/DonationForm";
import ContactUs from "./Components/Pages/ContactUs";
import EventDetails from "./Components/EventDetails";
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
            <Route path="/events/:id" element={<EventDetails />} />
            {/* Add more routes here as needed */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
