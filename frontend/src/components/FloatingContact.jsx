import { SCHOOL } from "../config.js";

export default function FloatingContact() {
  return (
    <div className="floating-contact">
      <a className="float-call" href={SCHOOL.phoneLink}>Call</a>
      <a className="float-wa" href={SCHOOL.whatsappLink} target="_blank" rel="noreferrer">
        WhatsApp
      </a>
    </div>
  );
}