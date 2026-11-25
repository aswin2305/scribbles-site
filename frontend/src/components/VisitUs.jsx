import { SCHOOL } from "../config.js";

export default function VisitUs() {
  return (
    <section id="visit" className="section section-alt">
      <div className="container">
        <h2>Visit us</h2>
        <div className="row g-4 mt-1">
          <div className="col-12 col-md-5">
            <div className="card-soft">
              <h3>Address</h3>
              <p>{SCHOOL.address}</p>
              <h3>Timings</h3>
              <p>{SCHOOL.hours}</p>
              <h3>Phone</h3>
              <p><a href={SCHOOL.phoneLink}>{SCHOOL.phone}</a></p>
            </div>
          </div>
          <div className="col-12 col-md-7">
            <iframe
              className="map-frame"
              title="Scribbles Montessori Pre School location"
              src="https://maps.google.com/maps?q=11.9116618,79.8114427&z=17&output=embed"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}