import { Router } from "express";
import { db } from "../db/db.js";

const userRouter = Router();

userRouter.get('/:id', (req, res) => {
    const rows = db.selectFrom('users').selectAll().execute();
    console.log(rows)
});

userRouter.post('/new',(req,res) => {
    
});

export default userRouter;