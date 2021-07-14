import express from "express";
import {getOrg} from "./controllers/organization.controller";

const router = express.Router();

router.get('/', getOrg);

export default router;