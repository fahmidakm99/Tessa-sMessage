import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import Gallery from "./pages/Gallery";
import Notes from "./pages/Notes";
import Private from "./pages/Private";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Private> {/* Optional password protection */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<OurStory />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </Private>
    </BrowserRouter>
  );
};

export default App;
