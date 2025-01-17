import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import AdminDashboard from "./Components/dashboards/AdminDashboard";
import Home from "./Components/Pages/Home";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import WhatWeDo from "./Components/Pages/WhatWeDo";
import DonationForm from "./Components/Pages/DonationForm";
import ContactUs from "./Components/Pages/ContactUs";
import EventDetails from "./Components/EventDetails";
import VolunteerPage from "./Components/Pages/VolunteerPage";
import DonatePage from "./Components/Pages/DonatePage";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";
import StoriesPage from "./Components/Pages/StoriesPage";
import AboutUs from "./Components/Pages/AboutUs";
import Staff from "./Components/dashboards/subDashBoardPages/Staff";
import Event from "./Components/dashboards/subDashBoardPages/Event";
import Patient from "./Components/dashboards/subDashBoardPages/Patient";
import Donation from "./Components/dashboards/subDashBoardPages/Donation";
import VolunteerForm from "./Components/Pages/VolunteerForm";
import FamilyMemberView from "./Components/FamilyMemberView";

const App = () => {
  const location = useLocation();

  // Define the paths where Navbar and Footer should not be visible
  const hideNavAndFooter = ["/login", "/register"];

  return (
    <div>
      {/* Conditionally render Navbar */}
      {!hideNavAndFooter.includes(location.pathname) && <Navbar />}

      <div className="px-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<WhatWeDo />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/donation" element={<DonatePage />} />
          <Route path="/donation/donationform" element={<DonationForm />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/admin/admin-dashboard" element={<AdminDashboard />}>
            <Route path="staffs" element={<Staff />} />
            <Route path="events" element={<Event />} />
            <Route path="patients" element={<Patient />} />
            <Route path="donations" element={<Donation />} />
          </Route>
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/volunteer" element={<VolunteerPage />} />
          <Route path="/volunteer/volunteerform" element={<VolunteerForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/familygiverportal" element={<FamilyMemberView />} />
        </Routes>
      </div>

      {/* Conditionally render Footer */}
      {!hideNavAndFooter.includes(location.pathname) && <Footer />}
    </div>
  );
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
