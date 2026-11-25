// PLACEHOLDER: replace with the school's real daily schedule.
const ROUTINE = [
  ["Morning", "Arrival, greeting and free choice of activities"],
  ["Mid-morning", "Group time: songs, stories and conversation"],
  ["Midday", "Snack, lunch and rest"],
  ["Afternoon", "Creative work, outdoor play and wrap-up"],
];

export default function DailyRoutine() {
  return (
    <section id="routine" className="section">
      <div className="container">
        <h2>A Day at Scribbles</h2>
        <p className="section-sub">A simple, predictable routine helps children feel safe and ready to learn.</p>
        <ul className="timeline">
          {ROUTINE.map(([time, text]) => (
            <li key={time}>
              <span className="time">{time}</span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}