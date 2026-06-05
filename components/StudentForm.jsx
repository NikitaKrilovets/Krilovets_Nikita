import { useState } from "react";

function StudentForm() {
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    group: "",
    age: "",
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:3001/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    });

    setStudent({
      firstName: "",
      lastName: "",
      group: "",
      age: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="firstName"
        placeholder="First Name"
        value={student.firstName}
        onChange={handleChange}
      />

      <input
        name="lastName"
        placeholder="Last Name"
        value={student.lastName}
        onChange={handleChange}
      />

      <input
        name="group"
        placeholder="Group"
        value={student.group}
        onChange={handleChange}
      />

      <input
        name="age"
        placeholder="Age"
        value={student.age}
        onChange={handleChange}
      />

      <button type="submit">Add Student</button>
    </form>
  );
}

export default StudentForm;