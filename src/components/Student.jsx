function Student({ name, rollNo, course, college }) {
  return (
    <div className="student-card">
      <h2>Student Profile</h2>

      <p><b>Name:</b> {name}</p>
      <p><b>Roll No:</b> {rollNo}</p>
      <p><b>Course:</b> {course}</p>
      <p><b>College:</b> {college}</p>
    </div>
  );
}

export default Student;