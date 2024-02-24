import './App.css';
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Project4 from './Project4';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/4" element={<Project4 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
