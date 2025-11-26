import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Navbar from "./Dashboard/Navbar";
import Dashboard from "./Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user" element={<Navbar />} />
        <Route path="/" element={<Courses />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
