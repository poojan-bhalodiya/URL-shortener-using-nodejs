const Url = require("../models/urlmodel");
const shortid = require("shortid");
const validUrl = require("valid-url");
exports.redirectToOriginalUrl = async (req, res) => {
  const url = await Url.findOne({ shortUrl: req.params.shortUrl });

  if (url) {
    return res.redirect(url.originalUrl);
  } else {
    return res.status(404).json({ error: "URL not found" });
  }
};

exports.shortUrl = async (req, res) => {
  const { originalUrl } = req.body;

  // validate the url
  if (!validUrl.isWebUri(originalUrl)) {
    return res.status(400).json({ error: "Invalid URL" });
  }
  const shortUrl = shortid.generate();

  // Create a new document in the database
  await Url.create({ originalUrl, shortUrl });

  res.json({ originalUrl, shortUrl });
};
