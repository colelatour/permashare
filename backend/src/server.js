const express = require("express");
const { Pool } = require("pg");

const app = express();
const PORT = process.env.PORT || 3001;
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/houses/:house_id/listing_price", async (req, res) => {
  const house_id = Number.parseInt(req.params.house_id, 10);

  if (!Number.isInteger(house_id) || house_id <= 0) {
    return res.status(400).json({ error: "house_id must be a positive integer." });
  }

  try {
    const result = await pool.query(
      'SELECT house_id, listing_price FROM "HouseDetails" WHERE house_id = $1',
      [house_id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "House not found." });
    }

    return res.json(result.rows[0]);
  } catch (error) {
    console.error("Failed to fetch listing_price:", error);
    return res.status(500).json({ error: "Internal server error." });
  }
});

app.post("/api/houses/:house_id/listing_price", async (req, res) => {
  const house_id = Number.parseInt(req.params.house_id, 10);
  const { listing_price } = req.body;

  if (!Number.isInteger(house_id) || house_id <= 0) {
    return res.status(400).json({ error: "house_id must be a positive integer." });
  }

  if (typeof listing_price !== "number" || !Number.isFinite(listing_price)) {
    return res.status(400).json({ error: "listing_price must be a valid number." });
  }

  try {
    const result = await pool.query(
      'UPDATE "HouseDetails" SET listing_price = $1 WHERE house_id = $2 RETURNING house_id, listing_price',
      [listing_price, house_id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "House not found." });
    }

    return res.json(result.rows[0]);
  } catch (error) {
    console.error("Failed to update listing_price:", error);
    return res.status(500).json({ error: "Internal server error." });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
