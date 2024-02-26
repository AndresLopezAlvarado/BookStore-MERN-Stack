export const PORT = process.env.PORT || 3000;

export const MongoDB_URL =
  process.env.MongoDB_URL ||
  "mongodb+srv://andreslopez:andreslopez@cluster0.3ijfq0d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// export const MongoDB_URL = "mongodb://localhost:27017/BookStore";

export const TOKEN_SECRET =
  process.env.TOKEN_SECRET || "cualquier clave secreta";
  
export const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";
