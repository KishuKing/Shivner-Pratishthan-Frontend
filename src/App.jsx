import AdminDashboard from "./Components/dashboards/AdminDashboard";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="px-3">
        <AdminDashboard />
      </div>
    </div>
  );
};

export default App;
