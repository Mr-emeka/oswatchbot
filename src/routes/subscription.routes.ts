import { Router } from "express";
const router:Router = Router();

// create subscription
router.post('/', async (req, res) => {
  const { type, value, events } = req.body;

  /*
    type: keyword | repo
    value: "nextjs" OR "vercel/next.js"
    events: ["issues", "pull_request", "release"]
  */

  res.json({ success: true });
});

router.get('/', async (req, res) => {
  res.json([]);
});

export default router;
