import express from "express";
import {
  getFeedbackform,
  createFeedback,
} from "../controllers/feedbackformcontroller.js";

const router = express.Router();
router.get("/feedbackform/:id", getFeedbackform);
router.post("/createfeedback", createFeedback);
export default router;
