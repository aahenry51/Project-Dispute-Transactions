"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// server/server.ts
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const cors = require("cors");
const app = (0, express_1.default)();
app.use(cors());
app.use("/api/login", routes_1.login);
const PORT = process.env.PORT || 3000;
const server = (0, express_1.default)();
server.get("/", (req, res) => {
    res.send("Hello from Server");
});
server.listen(3000, () => {
    console.log(`Server running on http://localhost:3000`);
});
