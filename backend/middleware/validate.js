import { body, validationResult } from "express-validator";

export const enquiryRules = [
  body("parentName").trim().notEmpty().withMessage("Name is required").isLength({ max: 100 }),
  body("phone")
    .trim()
    .matches(/^[0-9+\s-]{10,15}$/)
    .withMessage("Enter a valid phone number"),
  body("childAge").trim().notEmpty().withMessage("Child's age is required").isLength({ max: 50 }),
  body("message").optional({ values: "falsy" }).trim().isLength({ max: 1000 }),
];

export function handleValidation(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }
  next();
}