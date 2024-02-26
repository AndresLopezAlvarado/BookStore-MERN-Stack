import app from "./app.js";
import { connectDB } from "./db.js";
import { PORT } from "./config.js";
import dotenv from "dotenv";

dotenv.config();   
connectDB();

app.listen(PORT, () => {
  console.log(`App is listening to port: ${PORT}.`);
});

// mongoose
//   .connect(MongoDB_URL)
//   .then(() => {
//     console.log("App connected to database.");
//     app.listen(PORT, () => {
//       console.log(`App is listening to port: ${PORT}.`);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });
