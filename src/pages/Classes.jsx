import { useEffect, useState } from "react";
import { getClasses } from "../api/classService";
import ClassCard from "../components/ClassCard";

export default function Classes() {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadClasses() {
      try {
        const data = await getClasses();
        setClasses(data);
      } catch (err) {
        setError("Failed to load classes. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    loadClasses();
  }, []);

  if (loading) {
    return <p style={{ padding: "2rem" }}>Loading classes…</p>;
  }

  if (error) {
    return <p style={{ padding: "2rem", color: "red" }}>{error}</p>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Our Classes</h2>

      <div className="classes-grid">
        {classes.map(c => (
          <ClassCard key={c._id} {...c} />
        ))}
      </div>
    </div>
  );
}
