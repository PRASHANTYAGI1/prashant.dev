import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion"; // Add framer-motion
import Navbar from "./components/Nav";
import Home from "./pages/Home";
import Projects from "./pages/Project";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

// Wrapper to animate pages
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // when page loads
      animate={{ opacity: 1, y: 0 }}   // when page is visible
      exit={{ opacity: 0, y: -20 }}     // when page exits
      transition={{ duration: 0.5 }}    // animation timing
    >
      {children}
    </motion.div>
  );
}

// Animated Routes Setup
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

// Main App
function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20"> {/* Padding to prevent content under navbar */}
        <AnimatedRoutes />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
