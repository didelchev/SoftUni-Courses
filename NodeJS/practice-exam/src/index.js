import express from "express";
import expressInit from "./config/expressInit.js";
import handlebarsInit from "./config/handlebarsInit.js";
import mongooseInit from "./config/mongooseInit.js";
import routes from "./routes.js";

const app = express();

expressInit(app);
handlebarsInit(app);
mongooseInit();

app.use(routes);

app.listen(5000, () => {
  console.log("Server is listenning on http://localhost:5000 ...");
});
