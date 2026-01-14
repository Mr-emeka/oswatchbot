"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const matcher = require('../services/matcher.service');
async function pollKeyword(keyword) {
    const q = `${keyword} in:title,body,readme`;
    const { data } = await axios_1.default.get('https://api.github.com/search/issues', {
        params: { q, sort: 'updated' },
        headers: {
            Authorization: `Bearer ${process.env.GITHUB_APP_TOKEN}`
        }
    });
    for (const item of data.items) {
        await matcher.match(item);
    }
}
module.exports = { pollKeyword };
//# sourceMappingURL=pollGithub.worker.js.map