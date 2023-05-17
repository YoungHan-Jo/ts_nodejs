import express from "express";
import { UserCreateRequestType } from "../../models/users/createRequest";
import { User } from "../../../../../domain/model/user/user";
import { userId, users } from "../../../../../app";

export const createUserRouter = express.Router();

createUserRouter.post('/', (req: express.Request, res: express.Response) => {
    const requestBody: UserCreateRequestType = req.body;
    console.log('====createUserRouter====')

    if (!requestBody.email)
      res.status(400).send({ message: 'you should set email.' });
    if (!requestBody.name)
      res.status(400).send({ message: 'you should set name.' });
    if (!requestBody.password)
      res.status(400).send({ message: 'you should set password.' });

    let user = new User(requestBody);

    let id = userId.nextId();
    users.set(id, user);

    res.send({id: id, user: user});
})