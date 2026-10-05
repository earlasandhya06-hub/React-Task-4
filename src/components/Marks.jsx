import { useState } from "react";

function Marks({ subject, initialMarks }) {
  const [marks, setMarks] = useState(initialMarks);

  return (
    <div className="marks-card">
      <h2>Student Marks</h2>

      <p><b>Subject:</b> {subject}</p>
      <p><b>Marks:</b> {marks}</p>

      <button onClick={() => setMarks(marks + 1)}>
        Add Mark
      </button>

      <button onClick={() => setMarks(marks - 1)}>
        Remove Mark
      </button>
    </div>
  );
}

export default Marks;