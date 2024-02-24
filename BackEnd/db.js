import mongoose from "mongoose";
import { MongoDB_URL } from "./config.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(MongoDB_URL);
    console.log("App connected to database.");
  } catch (error) {
    console.log(error);
  }
};

// export const connectDB = async () => {
//   mongoose
//     .connect(MongoDB_URL)
//     .then(() => {
//       console.log("App connected to database.");
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
