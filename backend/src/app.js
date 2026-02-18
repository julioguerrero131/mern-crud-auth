import express from "express";
import morgan from "morgan";

import authRoutes from "./routes/auth.routes.js";

// npm run start
// npm run dev

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api', authRoutes);

export default app;