import { useState } from "react";
import { sendMessage } from "../api/messageService";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await sendMessage(form);
      setSent(true);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return <p style={{ padding: "2rem" }}>Thanks for your message!</p>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Contact Us</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
        <input
          name="name"
          placeholder="Your Name"
          onChange={e => setForm({ ...form, name: e.target.value })}
        />

        <input
          name="email"
          placeholder="Your Email"
          onChange={e => setForm({ ...form, email: e.target.value })}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          onChange={e => setForm({ ...form, message: e.target.value })}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Sending…" : "Send"}
        </button>
      </form>
    </div>
  );
}
