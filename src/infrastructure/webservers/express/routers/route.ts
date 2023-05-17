import express from "express";
import { createUserRouter } from "./users/create";
import { getUsersRouter } from "./users/getUsers";
import { getUserByIdRouter } from "./users/getUserById";

export const router = express.Router();

router.get('/home', (req, res) => {
    res.send('hello world')
})

router.use('/users', createUserRouter);
router.use('/users', getUsersRouter);
router.use('/users', getUserByIdRouter);