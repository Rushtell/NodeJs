import express from 'express'
import customerRouter from './customers/customers.router'

const router = express.Router();

router.use('/customers', customerRouter);

export default router;