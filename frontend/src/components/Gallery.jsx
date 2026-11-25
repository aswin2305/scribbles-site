import { useEffect, useState } from "react";

const FILES = [1, 2, 3, 4, 5, 6].map((n) => `gallery-${n}.jpg`);

export default function Gallery() {
  const [missing, setMissing] = useState({});
  const [open, setOpen] = useState(null);

  const available = FILES.filter((f) => !missing[f]);
  const idx = available.indexOf(open);

  const close = () => setOpen(null);
  const step = (d) =>
    setOpen(available[(idx + d + available.length) % available.length]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, missing]);

  return (
    <section id="gallery" className="section">
      <div className="container">
        <h2>Life at Scribbles</h2>
        <p className="section-sub">A look inside our classroom and activities. Tap a photo to enlarge.</p>

        <div className="row g-3">
          {FILES.map((f) => (
            <div className="col-6 col-md-4" key={f}>
              {missing[f] ? (
                <div className="photo" style={{ aspectRatio: "1 / 1" }}>
                  <div className="photo-empty">Photo: {f}</div>
                </div>
              ) : (
                <button className="gallery-btn" onClick={() => setOpen(f)}
                  aria-label="Open photo">
                  <img
                    src={`/images/${f}`}
                    alt="Activity at Scribbles Montessori"
                    loading="lazy"
                    onError={() => setMissing((m) => ({ ...m, [f]: true }))}
                  />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {open !== null && idx >= 0 && (
        <div className="lightbox" onClick={close} role="dialog" aria-modal="true">
          <button className="lb-btn lb-close" onClick={close} aria-label="Close">✕</button>
          {available.length > 1 && (
            <>
              <button className="lb-btn lb-prev" aria-label="Previous photo"
                onClick={(e) => { e.stopPropagation(); step(-1); }}>‹</button>
              <button className="lb-btn lb-next" aria-label="Next photo"
                onClick={(e) => { e.stopPropagation(); step(1); }}>›</button>
            </>
          )}
          <img
            src={`/images/${open}`}
            alt="Activity at Scribbles Montessori"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}