export default function handler(req, res) {
  const zip = req.query.zip?.trim();
  if (!zip) return res.status(400).json({ error: "Missing zip param." });

  const tdsData = {
    "32801": { tds: 167, level: "moderately hard", source: "Orlando Utilities (2023)" },
    "34236": { tds: 160, level: "moderately hard", source: "Sarasota CCR (2024)" },
    "33101": { tds: 260, level: "hard", source: "Miami-Dade Water" }
  };

  const result = tdsData[zip];
  if (result) {
    res.status(200).json({ zip, ...result });
  } else {
    res.status(404).json({ error: "TDS not found for that ZIP." });
  }
}
