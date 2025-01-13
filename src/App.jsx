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
import VolunteerPage from "./Components/Pages/VolunteerPage ";
import DonatePage from "./Components/Pages/DonatePage ";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";
import StoriesPage from "./Components/Pages/StoriesPage";
import AboutUs from "./Components/Pages/AboutUs";

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
            <Route path="/donation" element={<DonatePage />} />
            <Route path="/donation/donationform" element={<DonationForm />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/admin/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/stories" element={<StoriesPage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* For short time addition */}
            <Route path="/volunteer" element={<VolunteerPage />} />
            {/* Add more routes here as needed */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

