import express from "express";
import cors from "cors";
import { userRoutes } from "./routes/users.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);

export { app };
