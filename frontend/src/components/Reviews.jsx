import { SCHOOL } from "../config.js";

// SAMPLE WORDING based on themes in the school's Google reviews.
// Replace with real reviews, with the parents' permission, before going live.
const REVIEWS = [
  { text: "Teachers give every child individual attention, and my child is happy to go to school.", by: "Parent" },
  { text: "A clean, safe and caring environment with kind teachers.", by: "Parent" },
  { text: "A good balance of academics and extra activities.", by: "Parent" },
];

export default function Reviews() {
  return (
    <section id="reviews" className="section section-alt">
      <div className="container">
        <h2>What parents say</h2>
        <p className="section-sub">
          Rated {SCHOOL.rating} out of 5 by {SCHOOL.reviewCount} parents on Google.
        </p>
        <div className="row g-4">
          {REVIEWS.map((r, i) => (
            <div className="col-12 col-md-4" key={i}>
              <div className="card-soft">
                <p className="quote">"{r.text}"</p>
                <p className="quote-by">{r.by}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}