import Student from "./components/Student.jsx";
import Marks from "./components/Marks.jsx";

function Students({ onLogout }) {
  return (
    <div className="students-page">

      <div className="header">
        <h1>Students Page</h1>

        <button onClick={onLogout}>
          Logout
        </button>
      </div>

      <Student
        name="Sandhya"
        rollNo="101"
        course="Computer Science"
        college="ABC College"
      />

      <Marks
        subject="React"
        initialMarks={85}
      />

    </div>
  );
}

export default Students;