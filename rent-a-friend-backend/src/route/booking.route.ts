import { Router } from "express";
import { authHandler } from "../middleware/authHandler";
import { bookTime, testAuth } from "../controller/bookingController";


const bookingRouter = Router();

bookingRouter.use(authHandler);

bookingRouter.post("/", testAuth);

bookingRouter.post('/time',bookTime);

export default bookingRouter;

