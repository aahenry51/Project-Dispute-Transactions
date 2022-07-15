// server/server.ts
import express from "express";
import { login, trans } from "./routes";

const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json({ limit: "5MB" }));
app.use(express.urlencoded({ limit: "5MB", extended: true }));

app.use("/api/login", login);
app.use("/api/trans", trans);

app.get("/", (req, res) => {
  res.send("Hello from Server");
});

const port = 8000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:8000`);
});
