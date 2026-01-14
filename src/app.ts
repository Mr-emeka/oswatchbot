import express from "express";
const app: express.Application = express();

app.use(express.json());

app.use("/auth", require("./routes/auth.routes"));
app.use("/subscriptions", require("./routes/subscriptions.routes"));
app.use("/webhooks/github", require("./routes/webhook.routes"));
app.use("/health", require("./routes/health.routes"));

export default app;
