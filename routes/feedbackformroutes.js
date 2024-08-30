import express from "express";
import {
  getFeedbackform,
  createFeedback,
  updateCount,
} from "../controllers/feedbackformcontroller.js";

const router = express.Router();
router.get("/feedbackform/:id", getFeedbackform);
router.post("/feedbackform/:id", updateCount);
router.post("/createfeedback", createFeedback);
export default router;
