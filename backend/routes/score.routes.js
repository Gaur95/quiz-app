import { Router } from "express";
import { protectRoute } from "../middlewares/protectRoute.js";
import { getScores, submitScore } from "../controllers/score.controller.js";

const scoreRouter = Router();

scoreRouter.post("/create", protectRoute, submitScore);
scoreRouter.get("/:pin", getScores);

export default scoreRouter;
