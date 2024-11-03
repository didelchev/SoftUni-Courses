import { Router } from "express";

const planetController = Router();

planetController.get("/planets", (req, res) => {
  try {
    console.log("Works");
  } catch (err) {
    console.log(err.message);
  }
});

export default planetController;
