import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { router as movieRoute } from "./src/routes/movie.route.js";
import { router as cityRoute } from "./src/routes/city.route.js";
import { router as cinemaRoute } from "./src/routes/cinema.route.js";
import { router as genreRoute } from "./src/routes/genre.route.js";
import { router as datetimeRoute } from "./src/routes/datetime.route.js";
import { router as nowplayingmovieRoute } from "./src/routes/nowplayingmovie.route.js";

import { router as userRoute } from "./src/routes/user.route.js";
import { router as roleRoute} from "./src/routes/role.route.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

// api routes
app.use("/api", userRoute);
app.use("/api", roleRoute);

app.use("/api", movieRoute);
app.use("/api", cityRoute);
app.use("/api", cinemaRoute);
app.use("/api", genreRoute);
app.use("/api", datetimeRoute);
app.use("/api", nowplayingmovieRoute);


// Middleware to handle unmatched routes
app.use((req, res, next) => {
    res.status(404).json({ 
        error: "The requested route or method does not exist. Please check the URL and HTTP method and try again."
     });
});

export default app;