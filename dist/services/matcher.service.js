"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dedupe_service_1 = __importDefault(require("./dedupe.service"));
const notification_service_1 = __importDefault(require("./notification.service"));
async function match(event) {
    const exists = await dedupe_service_1.default.exists(event.id);
    if (exists)
        return;
    // match against subscriptions (pseudo)
    const matchedSubscriptions = []; // fetch from DB
    for (const sub of matchedSubscriptions) {
        await notification_service_1.default.send(sub.userId, event);
    }
    await dedupe_service_1.default.store(event.id);
}
exports.default = { match };
//# sourceMappingURL=matcher.service.js.map