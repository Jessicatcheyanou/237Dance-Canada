import { useEffect, useState } from "react";

export default function Instructors() {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/instructors")
      .then(res => res.json())
      .then(data => setInstructors(data));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Meet Our Instructors</h2>

      {instructors.map(i => (
        <div key={i._id} style={{ marginBottom: "1.5rem" }}>
          <h3>{i.name}</h3>
          <p>{i.bio}</p>
          <p><strong>Styles:</strong> {i.styles.join(", ")}</p>
        </div>
      ))}
    </div>
  );
}
