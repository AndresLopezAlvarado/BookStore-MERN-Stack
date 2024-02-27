import app from "./app.js";
import { connectDB } from "./db.js";
import { PORT } from "./config.js";
import dotenv from "dotenv";

dotenv.config();
connectDB();

app.listen(PORT, () => {
  console.log(`App is listening to port: ${PORT}.`);
});
