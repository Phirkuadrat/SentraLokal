import { Routes, Route } from "react-router-dom";

// Import Halaman
import HomePage from "./pages/HomePage";

// Routing Aplikasi
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
