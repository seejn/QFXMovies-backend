import app from './app.js'
import { PORT } from './src/config/server.js'
import connectDB from "./src/config/database.js";

app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server listening on PORT: ${PORT}`);
});