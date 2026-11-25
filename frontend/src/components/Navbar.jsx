import { useState } from "react";
import { SCHOOL } from "../config.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
  ["Why Montessori", "#why"],
  ["Programs", "#programs"],
  ["Our Day", "#routine"],
  ["Gallery", "#gallery"],
  ["Reviews", "#reviews"],
  ["Visit Us", "#visit"],
];

  return (
    <nav className="site-nav">
      <div className="container d-flex align-items-center justify-content-between py-3">
        <a href="#top" className="fw-bold fs-5">{SCHOOL.name}</a>

        <button
          className="btn d-md-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>

        <div className="nav-links d-none d-md-block">
          {links.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
          <a href="#enquiry" className="btn-sage ms-3">Enquire</a>
        </div>
      </div>

      {open && (
        <div className="container pb-3 d-md-none d-flex flex-column gap-2">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a href="#enquiry" className="btn-sage text-center" onClick={() => setOpen(false)}>
            Enquire
          </a>
        </div>
      )}
    </nav>
  );
}