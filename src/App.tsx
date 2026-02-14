import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Private from "./pages/Private";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Private> {/* Optional password protection */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Private>
    </BrowserRouter>
  );
};

export default App;
