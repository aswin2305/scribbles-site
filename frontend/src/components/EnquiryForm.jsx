import { useEffect, useState } from "react";
import { api } from "../api/client.js";
import { SCHOOL } from "../config.js";

const EMPTY = { parentName: "", phone: "", childAge: "", message: "", website: "" };

export default function EnquiryForm() {
  const [form, setForm] = useState(EMPTY);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [popupName, setPopupName] = useState(null); // null = hidden

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const closePopup = (e) => {
  if (e) e.preventDefault();
  setPopupName(null);
  // wait for the popup to unmount and the page lock to release, then go to the top
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 50);
};

  const submit = async (e) => {
    e.preventDefault();
    if (form.website) return; // honeypot
    setLoading(true);
    setError("");
    try {
      await api.post("/api/enquiries", form);
      setPopupName(form.parentName);
      setForm(EMPTY);
    } catch (err) {
      setError(
        err.response?.data?.error ||
          "We could not send your enquiry. Please call us instead."
      );
    } finally {
      setLoading(false);
    }
  };

  // Esc key closes the popup, and the page behind it is locked while it is open
  useEffect(() => {
    if (popupName === null) return;
    const onKey = (e) => e.key === "Escape" && closePopup();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [popupName]);

  return (
    <section id="enquiry" className="section">
      <div className="container" style={{ maxWidth: 640 }}>
        <h2>Admission enquiry</h2>
        <p className="section-sub">Leave your details and we will call you back.</p>

        <form className="form-card" onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="parentName">Parent name</label>
            <input id="parentName" name="parentName" className="form-control"
              required value={form.parentName} onChange={update} />
          </div>
          <div className="mb-3">
            <label htmlFor="phone">Phone number</label>
            <input id="phone" name="phone" type="tel" className="form-control"
              required pattern="[0-9+\s\-]{10,15}" value={form.phone} onChange={update} />
          </div>
          <div className="mb-3">
            <label htmlFor="childAge">Child's age</label>
            <input id="childAge" name="childAge" className="form-control"
              placeholder="e.g. 2 years 6 months" required
              value={form.childAge} onChange={update} />
          </div>
          <div className="mb-3">
            <label htmlFor="message">Message (optional)</label>
            <textarea id="message" name="message" rows="3" className="form-control"
              value={form.message} onChange={update} />
          </div>

          {/* Honeypot: hidden from people */}
          <input className="hp-field" name="website" tabIndex="-1"
            autoComplete="off" value={form.website} onChange={update} />

          {error && <p className="text-danger mb-3">{error}</p>}
          <button type="submit" className="btn-sage" disabled={loading}>
            {loading ? "Sending..." : "Send enquiry"}
          </button>
        </form>
      </div>

      {popupName !== null && (
        <div className="popup-backdrop" onClick={closePopup}
          role="dialog" aria-modal="true" aria-labelledby="popup-title">
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <div className="popup-icon">✓</div>
            <h3 id="popup-title">Thank you{popupName ? `, ${popupName}` : ""}!</h3>
            <p>
              We have received your enquiry and will call you soon.
              <br />
              Our timings: {SCHOOL.hours}.
            </p>
            <button type="button" className="btn-sage" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}