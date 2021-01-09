const path = require("path");
const { authenticate } = require("@google-cloud/local-auth");

module.exports = () =>
  authenticate({
    keyfilePath: path.join(__dirname, "../oauth2.keys.json"),
    scopes: ["https://www.googleapis.com/auth/youtube"],
  });