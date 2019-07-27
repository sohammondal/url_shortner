const express = require("express");
const router = express.Router();
const validUrl = require("valid-url");
const shortid = require("shortid");

const Url = require("../models/Url");

// @route POST /api/url/shorten
// @desc Create a short URL

router.post("/shorten", async (req, res) => {
  const { longUrl } = req.body;
  const baseUrl = process.env.baseUrl;

  // Check base url
  if (!validUrl.isUri(baseUrl)) {
    return res.status(401).json("Invalid base url");
  }

  // Create url code
  const urlCode = shortid.generate();

  // Check long url
  if (validUrl.isUri(longUrl)) {
    try {
      // Check if Url exists in Database
      let url = await Url.findOne({ longUrl });

      if (url) {
        res.send(url);
      } else {
        const shortUrl = baseUrl + "/" + urlCode;
        url = new Url({
          longUrl,
          shortUrl,
          urlCode,
          date: new Date()
        });
        await url.save();
        return res.json(url);
      }
    } catch (err) {
      console.error(err.message);
      return res.status(500).json("Server Error");
    }
  } else {
    return res.status(400).json("Invalid url");
  }
});

module.exports = router;
