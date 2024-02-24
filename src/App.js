import './App.css';
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Project1 from './Project1';
import Project3 from './Project3';
import Project4 from './Project4';

function App() {
  return (
    <div className="App">
      {/* <h1>Project</h1>
      <Project2 /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/1" element={<Project1 />} />
          <Route path="/3" element={<Project3 />} />
          <Route path="/4" element={<Project4 />} />
          {/* <Route path="/htmlPage" element={<Page2 />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
