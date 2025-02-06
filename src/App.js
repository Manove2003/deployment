import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mansions from "./pages/Mansions";
import Penthouses from "./pages/Penthouses";
import About from "./pages/About";
import Register from "./pages/Register";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Magazine from "./pages/Magazine";
import BlogPage from "./pages/BlogPage";
import ListingPage from "./pages/ListingPage";
import DashboardAdmin from "./pages/DashboardAdmin";
import CreatePost from "./components/CreatePost";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/mansions" element={<Mansions />} />
          <Route path="/penthouses" element={<Penthouses />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/magazine" element={<Magazine />} />
          <Route path="/blogpage" element={<BlogPage />} />
          <Route path="/listingpage" element={<ListingPage />} />
          <Route path="/dashboard" element={<DashboardAdmin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
