import { Router } from "express";
import authController from "./controllers/authController.js";
import homeController from "./controllers/homeController.js";
import planetController from "./controllers/planetController.js";

const routes = Router();

routes.use(homeController);

routes.use("/auth", authController);

routes.use("/planets", planetController);

// routes.all("*", (req, res) => {
//   res.render("home/404");
// });
export default routes;
