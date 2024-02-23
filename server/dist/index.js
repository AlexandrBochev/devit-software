"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = 3001;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.post('/api', (req, res) => {
    const index = req.body.index;
    const delay = Math.floor(Math.random() * 1000) + 1;
    setTimeout(() => {
        res.json({ index });
    }, delay);
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
