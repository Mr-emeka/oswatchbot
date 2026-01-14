"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// create subscription
router.post('/', async (req, res) => {
    const { type, value, events } = req.body;
    /*
      type: keyword | repo
      value: "nextjs" OR "vercel/next.js"
      events: ["issues", "pull_request", "release"]
    */
    res.json({ success: true });
});
router.get('/', async (req, res) => {
    res.json([]);
});
exports.default = router;
//# sourceMappingURL=subscription.routes.js.map