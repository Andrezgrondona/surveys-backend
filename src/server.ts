import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { connectDB } from "./config/database";
import routes from "./routes";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

app.use(express.json());

connectDB();
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
