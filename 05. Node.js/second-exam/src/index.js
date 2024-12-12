import express from "express";
import handlebars from "express-handlebars";
import routes from "./routes.js";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { authMiddleware } from "./middlewares/authMiddleware.js";

const app = express();
const url = "mongodb://localhost:27017";

mongoose
    .connect(url, {dbName: "alchemy"})
    .then(() => console.log('DB Connected'))
    .catch(() => console.log(`DB Failed ${err}`))



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

app.listen(3000, () => {
  console.log("Server is listening on http://localhost:3000 ...");
});
