export default function ClassCard({ title, description, image }) {
  return (
    <div style={{ border: "1px solid #ddd", borderRadius: 8, overflow: "hidden" }}>
      <img src={image} alt={title} style={{ width: "100%", height: 180, objectFit: "cover" }} />
      <div style={{ padding: "1rem" }}>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{level}</p>
        <p>{schedule}</p>
      </div>
    </div>
  );
}
