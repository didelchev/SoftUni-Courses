import { Router } from "express";
import authService from "../services/authServices.js";

const authController = Router();

authController.get("/register", (req, res) => {
  res.render("auth/register");
});

authController.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  await authService.register(username, email, password);

  res.redirect("/");
});

authController.get("/login", (req, res) => {
  res.render("auth/login");
});

authController.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const token = await authService.login(username, password);
  res.cookie("auth", token, { httpOnly: true });
  res.redirect("/");
});

authController.get("/logout", (req, res) => {
  res.clearCookie("auth");
  res.redirect("/");
});
export default authController;
