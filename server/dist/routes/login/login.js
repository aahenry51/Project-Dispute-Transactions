"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userInfo = exports.login = void 0;
const express_1 = __importDefault(require("express"));
exports.login = express_1.default.Router();
exports.userInfo = [
    {
        email: "name@gmail.com",
        password: "123",
        token: "1F3BE74C45393EAE25AB516C76F2F",
    },
];
exports.login.post("/", (request, response) => {
    const { email, password } = request.body;
    try {
        const userFound = exports.userInfo.find((user) => user.email === email);
        !!userFound && userFound.password === password
            ? response.status(200).send("Correct Credentials")
            : response.status(400).send("Wrong Credentials");
    }
    catch (error) {
        console.error(error);
        response.status(400).send("Bad Request");
    }
});
