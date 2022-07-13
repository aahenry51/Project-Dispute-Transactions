// server/server.ts
import express from "express";
import { login } from "./routes";

const cors = require("cors");
const app = express();

app.use(cors());

app.use("/api/login", login);

const PORT = process.env.PORT || 3000;

const server = express();

server.get("/", (req, res) => {
  res.send("Hello from Server");
});

server.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});
