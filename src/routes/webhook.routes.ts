import { Router } from "express";
import matcher from "../services/matcher.service";

const router: Router = Router();

router.post("/", async (req, res) => {
  const event = req.headers["x-github-event"];
  const payload = req.body;

  await matcher.match({ event, payload });

  res.sendStatus(200);
});

export default router;
