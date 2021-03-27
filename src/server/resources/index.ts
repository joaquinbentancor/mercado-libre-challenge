import express from "express";
import querystring from "querystring";
import { getItems, getItem } from "../services/search";

const router = express.Router();

router.get("/api/items", async (req, res) => {
  const { q } = req.query;
  const searchResults = await getItems(
    querystring.stringify({ q: q.toString() })
  );

  res.json({ ...searchResults });
});

router.get("/api/item", async (req, res) => {
  const item = await getItem();
  res.json({ ...item });
});

export default router;
