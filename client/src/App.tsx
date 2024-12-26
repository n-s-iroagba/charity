import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import DonationForm from "./pages/DonationForm";
import DonorPage from "./pages/Donors";
import FinancialReportsPage from "./pages/FinancialReportsPage";
import InquiryForm from "./pages/InquiryForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<DonationForm />} />
        <Route path='/expenses' element ={<FinancialReportsPage />} />
        <Route path="/donors" element={<DonorPage />} />
        <Route path="/subscription" element={<InquiryForm />} /> 
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};
export default App;
