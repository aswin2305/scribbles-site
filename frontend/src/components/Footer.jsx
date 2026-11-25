import { SCHOOL } from "../config.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container d-flex flex-wrap justify-content-between gap-2">
        <span>© {new Date().getFullYear()} {SCHOOL.name}</span>
        <span>{SCHOOL.address}</span>
      </div>
    </footer>
  );
}