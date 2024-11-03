import { Router } from "express";

const homeController = Router();

homeController.get("/", (req, res) => {
  res.render("home", { title: "Cosmic Exploler" });
});

export default homeController;
