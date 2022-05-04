import express from "express"
import { postSdr } from "../controllers/sdr.js";

const router = express.Router();

// router.route('/').get(getSdr)
router.route('/').post(postSdr)


export default router;
