import { useState } from "react";

export default function EnquiryForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    parentName: "", phone: "", childAge: "", message: "", website: "",
  });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (form.website) return; // honeypot: bots fill this hidden field
    // DEMO ONLY: later this will POST to the Express API.
    setSent(true);
  };

  return (
    <section id="enquiry" className="section">
      <div className="container" style={{ maxWidth: 640 }}>
        <h2>Admission enquiry</h2>
        <p className="section-sub">Leave your details and we will call you back.</p>

        {sent ? (
          <div className="form-success">
            Thank you! We have received your enquiry and will call you soon.
          </div>
        ) : (
          <form className="form-card" onSubmit={submit}>
            <div className="mb-3">
              <label htmlFor="parentName">Parent name</label>
              <input id="parentName" name="parentName" className="form-control"
                required value={form.parentName} onChange={update} />
            </div>
            <div className="mb-3">
              <label htmlFor="phone">Phone number</label>
              <input id="phone" name="phone" type="tel" className="form-control"
                required pattern="[0-9+\s-]{10,15}" value={form.phone} onChange={update} />
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

            <button type="submit" className="btn-sage">Send enquiry</button>
          </form>
        )}
      </div>
    </section>
  );
}