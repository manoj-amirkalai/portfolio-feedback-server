import Feedbackform from "../model/feedbackform.js";
import Feedback from "../model/feedback.js";

const getFeedbackform = async (req, res) => {
  const id = "66d543095597ddd377d3b77b";
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
  const id = "66d543095597ddd377d3b77b";
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
    const count = feedbackform.length;

    const id = "66d543095597ddd377d3b77b";
    const data = await Feedbackform.findByIdAndUpdate(id, {
      submitted: count,
    });
    if (!data) return res.status(404).json({ message: "Not found" });

    return res.status(200).json({ message: "Success" });
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
      formid: "66d543095597ddd377d3b77b",
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
