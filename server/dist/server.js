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
app.use(express_1.default.json({ limit: "5MB" }));
app.use(express_1.default.urlencoded({ limit: "5MB", extended: true }));
app.use("/api/login", routes_1.login);
app.use("/api/trans", routes_1.trans);
app.get("/", (req, res) => {
    res.send("Hello from Server");
});
const port = 8000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:8000`);
});
