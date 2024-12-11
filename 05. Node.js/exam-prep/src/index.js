import cookieParser from "cookie-parser";
import express from "express";
import handlebars from "express-handlebars";
import mongoose from "mongoose";
import routes from "./routes.js";

const app = express();
const url = "mongodb://localhost:27017";

mongoose
  .connect(url, { dbName: "Volcanoes" })
  .then(() => console.log("DB Connected"))
  .catch(() => console.log(`DB Failed:${err}`));

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

app.use(routes);
app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000 ...");
});
