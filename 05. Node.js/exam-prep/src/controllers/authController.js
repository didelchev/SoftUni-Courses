import { Router } from "express";
import authService from "../services/authService.js";

const authController = Router();

authController.get("/register", (req, res) => {
  res.render("auth/register");
});

authController.post("/register", async (req, res) => {
  const { username, email, password, rePassword } = req.body;

  try {
    await authService.register(username, email, password);

    res.redirect("/auth/login");
  } catch (error) {
    res.render("auth/register", { title: "Register page", username, email });
  }
});

authController.get("/login", (req, res) => {
  res.render("auth/login");
});

authController.post("/login", (req, res) => {
  const { email, password } = req.body;

  const token = authService.login(email, password);
});
export default authController;
