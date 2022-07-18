"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.trans = void 0;
const express_1 = __importDefault(require("express"));
const transaction_data_1 = require("./transaction.data");
exports.trans = express_1.default.Router();
exports.trans.post("/", (request, response) => {
    try {
        response.status(200).send(transaction_data_1.transactionInfo);
    }
    catch (error) {
        console.error(error);
        response.status(400).send("Bad Request");
    }
});
