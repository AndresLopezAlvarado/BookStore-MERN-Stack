import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import booksRoutes from "./routes/booksRoutes.js";
import { FRONTEND_URL } from "./config.js";

const app = express();

app.use(express.json()); //para que Express entienda los objetos JSON (parsear el request body)
// app.use(cors()); //permite al navegador recibir peticiones desde otros servidores (CORS policy)
// app.use(
//   cors({                                //permite al navegador recibir peticiones desde otros servidores (CORS policy)
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );
app.use(cors({ origin: FRONTEND_URL, credentials: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  return res.status(234).send("Welcome to MERN Stack Tutorial");
});

app.use("/api", authRoutes); //quizá deba cambiarse por /books
app.use("/books", booksRoutes);

export default app;
