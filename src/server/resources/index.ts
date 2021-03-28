import express from "express";
import querystring from "querystring";
import { getItems, getItem } from "../components/search";

const router = express.Router();

router.get("/api/items", async (req, res) => {
  const { q } = req.query;
  const searchResults = await getItems(
    querystring.stringify({ q: q.toString() })
  );

  res.json({ ...searchResults });
});

router.get("/api/items/:id", async (req, res) => {
  const item = await getItem(req.params.id);
  res.json({ ...item });
});

export default router;
