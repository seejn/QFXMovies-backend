import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { router as movieRoute } from "./src/routes/movie.route.js";
import { router as cityRoute } from "./src/routes/city.route.js";
import { router as cinemaRoute } from "./src/routes/cinema.route.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

// api routes
app.use("/api", movieRoute);
app.use("/api", cityRoute);
app.use("/api", cinemaRoute);

export default app;