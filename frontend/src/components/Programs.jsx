// PLACEHOLDER: confirm real program names, ages and timings with the school.
const PROGRAMS = [
  { name: "Play Group", age: "Age: to be confirmed", text: "A gentle first step into school life through play and routine." },
  { name: "Nursery", age: "Age: to be confirmed", text: "Language, number and sensory activities with Montessori materials." },
  { name: "Kindergarten", age: "Age: to be confirmed", text: "Preparing children for primary school with reading, writing and maths readiness." },
];

export default function Programs() {
  return (
    <section id="programs" className="section section-alt">
      <div className="container">
        <h2>Our Programs</h2>
        <p className="section-sub">Programs for different age groups, all built on the Montessori approach.</p>
        <div className="row g-4">
          {PROGRAMS.map((p) => (
            <div className="col-12 col-md-4" key={p.name}>
              <div className="card-soft">
                <span className="tag">{p.age}</span>
                <h3 className="mt-3">{p.name}</h3>
                <p className="mb-0">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}