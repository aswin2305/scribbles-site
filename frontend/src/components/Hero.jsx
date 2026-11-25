import { SCHOOL } from "../config.js";

export default function Hero() {
  return (
    <header id="top" className="hero">
      <div className="container">
        <span className="rating-badge">
          ★ {SCHOOL.rating} on Google · {SCHOOL.reviewCount} reviews
        </span>
        <h1 className="mt-3">
          A calm, caring start to <br />
          your child's learning
        </h1>
        <p className="lead mt-3" style={{ maxWidth: 560 }}>
          Montessori pre-school in Thengaithittu, Puducherry, where every child
          learns at their own pace.
        </p>
        <div className="d-flex flex-wrap gap-3 mt-4">
          <a href={SCHOOL.phoneLink} className="btn-sage">Call {SCHOOL.phone}</a>
          <a href={SCHOOL.whatsappLink} className="btn-outline-sage" target="_blank" rel="noreferrer">
            WhatsApp us
          </a>
        </div>
      </div>
    </header>
  );
}