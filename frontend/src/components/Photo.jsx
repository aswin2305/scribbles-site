import { useState } from "react";

export default function Photo({ file, alt, ratio = "4 / 3", className = "" }) {
  const [missing, setMissing] = useState(false);

  return (
    <div className={`photo ${className}`} style={{ aspectRatio: ratio }}>
      {missing ? (
        <div className="photo-empty">Photo: {file}</div>
      ) : (
        <img
          src={`/images/${file}`}
          alt={alt}
          loading="lazy"
          onError={() => setMissing(true)}
        />
      )}
    </div>
  );
}