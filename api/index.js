const meta = require("meta-grabber")
const usage = "https://metagrabber.vercel.app/api?url=https://discord.com"

module.exports = async (request, response) => {
  const { url } = request.query;
  if (!url || url == "" || url == " ") {
    response.status(400).json({
      "success": false,
      "error": "No url query specified.",
      "usage": usage
    });
  } else {
    try {
      let metaRes = meta(url)
      metaRes.success = true
      response.status(200).json(metaRes);
    } catch (error) {
        response.status(400).json({
          "success": false,
          "error": "The server encountered an error. You may have inputted an invalid query.",
          "usage": usage
       });
    }
  }
}
