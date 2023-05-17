import express from "express";
import { users } from "../../../../../app";

export const getUsersRouter = express.Router();

getUsersRouter.get('/', (req, res) => {
    console.log('====getUsersRouter====')
    res.send(Array.from(users))
})