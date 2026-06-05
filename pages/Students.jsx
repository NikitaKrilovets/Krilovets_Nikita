import { useEffect, useState } from "react";
import StudentList from "../components/StudentList";

function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/students")
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>Students</h1>
      <StudentList students={students} />
    </>
  );
}

export default Students;