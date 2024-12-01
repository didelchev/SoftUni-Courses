import express from "express";
import routes from "./routes.js";
import handlebars from "express-handlebars";
import cookieParser from "cookie-parser";
import 'dotenv/config'

import mongoose from "mongoose";
import { authMiddleware } from "./middleware/authMiddleware.js";

const app = express();

const url = "mongodb://localhost:27017";
mongoose
  .connect(url, { dbName: "cosmic" })
  .then(() => console.log("DB Connecter"))
  .catch((err) => console.log(`DB failed ${err}`));

app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
  })
);

app.set("views", "src/views");

app.set("view engine", "hbs");

app.use("/static", express.static("src/public"));

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(authMiddleware)

app.use(routes);

app.listen(3000, () =>
  console.log("Server is running on http://localhost:3000")
);
