import express from 'express';
import dotenv from 'dotenv';
import userRouter from './route/user.route';
import errorHandler from './middleware/errorHandler';


const app = express();
const PORT = Number(process.env.BACKEND_PORT) || 3000;

app.use(express.json());

app.use("/v1/api/user", userRouter);

app.get('/', (req,res) => {
  res.json({"message": "Healthy"})
})

app.use(errorHandler);

app.listen(PORT, '0.0.0.0', 512, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});