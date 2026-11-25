const POINTS = [
  {
    title: "Learning at their own pace",
    text: "Children choose activities and move forward when they are ready, without pressure.",
  },
  {
    title: "Hands-on materials",
    text: "Real objects and simple tools help young children understand ideas by touching and doing.",
  },
  {
    title: "Independence and confidence",
    text: "Small daily tasks teach children to look after themselves and their classroom.",
  },
  {
    title: "Individual attention",
    text: "Teachers observe each child and guide them one to one.",
  },
];

export default function WhyMontessori() {
  return (
    <section id="why" className="section">
      <div className="container">
        <h2>Why Montessori?</h2>
        <p className="section-sub">
          A child-centred way of learning that builds curiosity, focus and confidence.
        </p>
        <div className="row g-4">
          {POINTS.map((p) => (
            <div className="col-12 col-md-6 col-lg-3" key={p.title}>
              <div className="card-soft">
                <h3>{p.title}</h3>
                <p className="mb-0">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}