import { connect } from "mongoose";

const dbUrl = "mongodb://localhost:27017/cosmic-exploler";

export default function mongooseInit() {
  try {
    connect(dbUrl);
    console.log("Successfully connected to DB !");
  } catch (error) {
    console.log(`Cannot connect to DB ${error.message}`);
  }
}
