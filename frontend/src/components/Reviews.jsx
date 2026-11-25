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
        <h2 className="text-center">What parents say</h2>
        <p className="section-sub text-center mx-auto">
          Rated {SCHOOL.rating} out of 5 by {SCHOOL.reviewCount} parents on Google.
        </p>

        <div
          id="reviewsCarousel"
          className="carousel slide reviews-carousel"
          data-bs-ride="carousel"
          data-bs-interval="6000"
        >
          <div className="carousel-inner">
            {REVIEWS.map((r, i) => (
              <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
                <div className="review-slide">
                  <p className="quote">"{r.text}"</p>
                  <p className="quote-by">{r.by}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-control-prev" type="button"
            data-bs-target="#reviewsCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button"
            data-bs-target="#reviewsCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>

          <div className="carousel-indicators">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                type="button"
                data-bs-target="#reviewsCarousel"
                data-bs-slide-to={i}
                className={i === 0 ? "active" : ""}
                aria-current={i === 0 ? "true" : undefined}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}