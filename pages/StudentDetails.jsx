import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function StudentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/students/${id}`)
      .then((response) => response.json())
      .then((data) => setStudent(data))
      .catch((error) => console.log(error));
  }, [id]);

  const handleDelete = async () => {
    await fetch(`http://localhost:3001/students/${id}`, {
      method: "DELETE",
    });

    navigate("/students");
  };

  if (!student) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h1>
        {student.firstName} {student.lastName}
      </h1>

      <p>Group: {student.group}</p>
      <p>Age: {student.age}</p>

      <button onClick={handleDelete}>
        Delete Student
      </button>
    </>
  );
}

export default StudentDetails;