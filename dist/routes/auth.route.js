"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require('axios');
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/github', (req, res) => {
    const params = new URLSearchParams({
        client_id: process.env.GITHUB_CLIENT_ID || '',
        scope: 'repo read:user'
    });
    res.redirect(`https://github.com/login/oauth/authorize?${params}`);
});
router.get('/github/callback', async (req, res) => {
    const { code } = req.query;
    const { data } = await axios.post('https://github.com/login/oauth/access_token', {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code
    }, { headers: { Accept: 'application/json' } });
    // store access_token + user
    res.json(data);
});
exports.default = router;
//# sourceMappingURL=auth.route.js.map