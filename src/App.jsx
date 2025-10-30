import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import JelajahiPage from "./pages/JelajahiPage.jsx";
import UMKMPage from "./pages/UMKMPage.jsx";


// Routes
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/jelajahi" element={<JelajahiPage />} />
      <Route path="/UMKM" element={<UMKMPage />} />
    </Routes>
  );
}

export default App;
