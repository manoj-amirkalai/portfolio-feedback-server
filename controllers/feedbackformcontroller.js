import Feedbackform from "../model/feedbackform.js";
import Feedback from "../model/feedback.js";

const getFeedbackform = async (req, res) => {
  const id = "66cec8029f09bd6ae0d6d136";
  try {
    const feedbackform = await Feedbackform.findById(id);
    if (!feedbackform) return res.status(404).json({ message: "Not found" });
    res.status(200).json({ feedbackform });
  } catch (error) {
    if (error.name === "CastError" && error.kind == "ObjectId") {
      return res.status(400).json({ message: "Invalid ID" });
    }
    res.status(500).json({ message: error.message });
  }
};

const updateCount = async (req, res) => {
  const id = "66cec8029f09bd6ae0d6d136";
  const feedbackform = await Feedbackform.findById(id);
  if (!feedbackform) return res.status(404).json({ message: "Not found" });

  const count = feedbackform.viewed + 1;
  try {
    const feedbackform = await Feedbackform.findByIdAndUpdate(id, {
      viewed: count,
    });
    if (!feedbackform) return res.status(404).json({ message: "Not found" });
    res.status(200).json({ feedbackform });
  } catch (error) {
    if (error.name === "CastError" && error.kind == "ObjectId") {
      return res.status(400).json({ message: "Invalid ID" });
    }
    res.status(500).json({ message: error.message });
  }
};
const getFeedback = async (req, res) => {
  try {
    const feedbackform = await Feedback.find();
    if (!feedbackform) return res.status(404).json({ message: "Not found" });
    const count = feedbackform.length + 1;
    console.log("count", count);

    const id = "66cec8029f09bd6ae0d6d136";
    const data = await Feedbackform.findByIdAndUpdate(id, {
      submitted: count,
    });
    if (!data) return res.status(404).json({ message: "Not found" });

    console.log("countup", data.submitted);
    return;
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const createFeedback = async (req, res) => {
  const {
    formid,
    textarea,
    numberrating,
    smile,
    star,
    singleline,
    radio,
    category,
  } = req.body;

  try {
    const feedback = await Feedback.create({
      formid: "66cec8029f09bd6ae0d6d136",
      textarea: textarea,
      numberrating: numberrating,
      smile: smile,
      star: star,
      singleline: singleline,
      radio: radio,
      category: category,
    });
    res.status(201).json({ feedback });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export { getFeedbackform, createFeedback, updateCount, getFeedback };
