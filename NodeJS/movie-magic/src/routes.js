import { Router } from "express";

const router = Router();

import authController from "./controllers/auth-controller.js";
import castsController from "./controllers/casts-controller.js";
import homeController from "./controllers/home-controller.js";
import movieController from "./controllers/movie-controller.js";
import { isAuth } from "./middlewares/authMiddleware.js";

router.use(homeController);

router.use("/movies", movieController);

router.use("/casts", isAuth, castsController);

router.use("/auth", authController);

router.all("*", (req, res) => {
  res.render("404");
});

export default router;
