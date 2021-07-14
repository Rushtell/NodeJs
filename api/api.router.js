import express from 'express'
import userRouter from './users/users.router'
import customerRouter from './customers/customers.router'

const router = express.Router();

router.use('/users', userRouter);
router.use('/customers', customerRouter);

export default router;