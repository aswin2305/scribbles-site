import { pool } from "../config/db.js";

export async function createEnquiry(req, res) {
  try {
    // Honeypot: real people never fill this hidden field.
    if (req.body.website) {
      return res.status(201).json({ ok: true });
    }

    const { parentName, phone, childAge, message } = req.body;

    await pool.query(
      `insert into enquiries (parent_name, phone, child_age, message)
       values ($1, $2, $3, $4)`,
      [parentName, phone, childAge, message || ""]
    );

    res.status(201).json({ ok: true });
  } catch (err) {
    console.error("Create enquiry failed:", err.message);
    res.status(500).json({ error: "Something went wrong. Please call us instead." });
  }
}