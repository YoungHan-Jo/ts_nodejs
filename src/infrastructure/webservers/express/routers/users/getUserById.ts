import express from "express";
import { users } from "../../../../../app";

export const getUserByIdRouter = express.Router();

getUserByIdRouter.get('/:id',(req,res) => {
    let id = Number(req.params.id)
    let user = users.get(id)
    res.send({id: id, user:user})
})