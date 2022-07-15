import express from "express";
import { TUsers } from "./login.type";

export const login = express.Router();

export const userInfo: TUsers = [
  {
    email: "name@gmail.com",
    password: "123",
    token: "1F3BE74C45393EAE25AB516C76F2F",
  },
];

login.post("/", (request, response) => {
  try {
    const userFound = userInfo.find(
      (user) => user.email === request.body.email
    );

    !!userFound && userFound.password === request.body.password
      ? response.status(200).send(userFound)
      : response.status(400).send("Wrong Credentials");
  } catch (error) {
    console.error(error);
    response.status(400).send("Bad Request");
  }
});
