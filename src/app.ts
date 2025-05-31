import express from "express";
import type { Request, Response, NextFunction } from "express";
import cors from "cors";

const app = express();
app.use(
	cors({
		origin: "*",
		credentials: true,
	}),
);

app.use(express.json());

// DB connection

// Route configuration

import apiRoutes from "./routes/api.routes";
app.use("/api", apiRoutes);

// 404 handler
app.use((req: Request, res: Response, next: NextFunction) => {
	res.status(404).json({
		message: "Not found",
	});
});

// Error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	console.error(err.stack);
	res.status(500).json({ message: err.message });
});

export default app;
