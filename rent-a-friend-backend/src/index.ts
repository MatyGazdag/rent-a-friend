import express from 'express';
import dotenv from 'dotenv';
import userRouter from './route/user.route.js';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/v1/api/user", userRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});