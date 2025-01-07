import AdminDashboard from "./Components/dashboards/AdminDashboard";
import Home from "./Components/Pages/Home";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import WhatWeDo from "./Components/Pages/WhatWeDo";
import DonationForm from "./Components/Pages/DonationForm";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="px-3">
        {/* If you want to add any Component/Page add it in this div */}
      </div>
      <Footer />
    </div>
  );
};

export default App;
