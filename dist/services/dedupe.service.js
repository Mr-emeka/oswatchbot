"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cache = new Set();
async function exists(id) {
    return cache.has(id);
}
async function store(id) {
    cache.add(id);
}
exports.default = { exists, store };
//# sourceMappingURL=dedupe.service.js.map