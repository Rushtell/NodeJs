import express from 'express'
import {getUser, getUsers, setUser} from './controllers/user.controller'
import organizationRouter from "../organizations/organizations.router";

// const express = require('express')
// const getUsersList = require('./controllers/user.controller')

const router = express.Router();

router.get('/', getUsers)
router.get('/:userId', getUser)
router.use('/:userId/organization', setUser, organizationRouter)

export default router;