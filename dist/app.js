"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const subscription_routes_1 = __importDefault(require("./routes/subscription.routes"));
const webhook_routes_1 = __importDefault(require("./routes/webhook.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/auth", auth_routes_1.default);
app.use("/subscriptions", subscription_routes_1.default);
app.use("/webhooks/github", webhook_routes_1.default);
// app.use("/health", require("./routes/health.routes"));
exports.default = app;
//# sourceMappingURL=app.js.map