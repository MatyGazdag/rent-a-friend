import express from 'express';
import dotenv from 'dotenv';
import userRouter from './route/user.route';
import errorHandler from './middleware/errorHandler';
import bookingRouter from './route/booking.route';


const app = express();
const PORT = Number(process.env.BACKEND_PORT) || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res) => {
  res.json({"message": "Healthy"})
})

app.use("/v1/api/user", userRouter);
app.use("/v1/api/booking", bookingRouter);

app.use(errorHandler);

app.listen(PORT, '0.0.0.0', 512, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});