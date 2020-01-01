"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
/** GET /health-check - Check service health */
router.get('/health-check', (_req, res) => res.send('OK'));
exports.default = router;
//# sourceMappingURL=index.js.map