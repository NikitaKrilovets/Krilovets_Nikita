import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import StudentDetails from "./pages/StudentDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/students">Students</Link> |{" "}
        <Link to="/add-student">Add Student</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/students/:id" element={<StudentDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;