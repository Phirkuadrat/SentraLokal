import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import HomePage from "./pages/HomePage.jsx";
import JelajahiPage from "./pages/JelajahiPage.jsx";
import UMKMPage from "./pages/UMKMPage.jsx";

// Routes
function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/jelajahi" element={<JelajahiPage />} />
        <Route path="/UMKM" element={<UMKMPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
