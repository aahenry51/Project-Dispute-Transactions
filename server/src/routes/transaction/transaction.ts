import express from "express";
import { transactionInfo } from "./transaction.data";
export const trans = express.Router();

trans.post("/", (request, response) => {
  try {
    response.status(200).send(transactionInfo);
  } catch (error) {
    console.error(error);
    response.status(400).send("Bad Request");
  }
});
