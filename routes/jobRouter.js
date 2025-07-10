import { Router } from "express";
const router = Router();

import {
  getAllJobs,
  getJob,
  updateJob,
  deleteJob,
  createJob,
} from "../controllers/jobControllers.js";

//router.get('/', getAllJobs)
router.route('/').get(getAllJobs).post(createJob)
router.route('/:id').get(getJob).post(updateJob).delete(deleteJob)

export default router