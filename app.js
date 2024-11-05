import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { router as movieRoute } from "./src/routes/movie.route.js";
import { router as cityRoute } from "./src/routes/city.route.js";
import { router as cinemaRoute } from "./src/routes/cinema.route.js";
import { router as genreRoute } from "./src/routes/genre.route.js";
import { router as datetimeRoute } from "./src/routes/datetime.route.js";
import { router as nowplayingmovieRoute } from "./src/routes/nowplayingmovie.route.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

// api routes
app.use("/api", movieRoute);
app.use("/api", cityRoute);
app.use("/api", cinemaRoute);
app.use("/api", genreRoute);
app.use("/api", datetimeRoute);
app.use("/api", nowplayingmovieRoute);

export default app;