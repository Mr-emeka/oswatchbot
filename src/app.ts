import express from "express";
import authRoutes from "./routes/auth.routes";
import subscriptionRoutes from './routes/subscription.routes'
import webhookRoutes from './routes/webhook.routes'


const app: express.Application = express();


app.use(express.json());

app.use("/auth",authRoutes);
app.use("/subscriptions", subscriptionRoutes);
app.use("/webhooks/github", webhookRoutes);
// app.use("/health", require("./routes/health.routes"));

export default app;
