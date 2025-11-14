import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import HomePage from "./pages/HomePage.jsx";
import JelajahiPage from "./pages/JelajahiPage.jsx";
import UMKMPage from "./pages/UMKMPage.jsx";
import DetailUMKMPage from "./pages/DetailUMKMPage.jsx";

// Routes
function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/jelajahi" element={<JelajahiPage />} />
        <Route path="/UMKM" element={<UMKMPage />} />
        <Route path="/UMKM/:id" element={<DetailUMKMPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
