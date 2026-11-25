import Photo from "./Photo.jsx";

const SLIDES = ["hero-1.jpg", "hero-2.jpg", "hero-3.jpg"];

export default function HeroCarousel() {
  return (
    <div
      id="heroCarousel"
      className="carousel slide carousel-fade hero-carousel"
      data-bs-ride="carousel"
      data-bs-interval="4000"
    >
      <div className="carousel-indicators">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to={i}
            className={i === 0 ? "active" : ""}
            aria-current={i === 0 ? "true" : undefined}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="carousel-inner">
        {SLIDES.map((file, i) => (
          <div key={file} className={`carousel-item ${i === 0 ? "active" : ""}`}>
            <Photo file={file} alt="Children at Scribbles Montessori" ratio="4 / 3" />
          </div>
        ))}
      </div>

      <button className="carousel-control-prev" type="button"
        data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button"
        data-bs-target="#heroCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}