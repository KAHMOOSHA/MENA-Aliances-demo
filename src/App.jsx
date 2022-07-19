import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WorkFields from "./pages/WorkFields";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="work-fields" element={<WorkFields />} />
          <Route path="developers" element={<h1>hi!</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
