"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const matcher_service_1 = __importDefault(require("../services/matcher.service"));
const router = (0, express_1.Router)();
router.post("/", async (req, res) => {
    const event = req.headers["x-github-event"];
    const payload = req.body;
    await matcher_service_1.default.match({ event, payload });
    res.sendStatus(200);
});
exports.default = router;
//# sourceMappingURL=webhook.routes.js.map