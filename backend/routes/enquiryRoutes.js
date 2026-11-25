import { Router } from "express";
import { createEnquiry } from "../controllers/enquiryController.js";
import { enquiryLimiter } from "../middleware/rateLimiter.js";
import { enquiryRules, handleValidation } from "../middleware/validate.js";

const router = Router();

router.post("/", enquiryLimiter, enquiryRules, handleValidation, createEnquiry);

export default router;