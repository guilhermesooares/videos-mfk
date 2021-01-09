const { google } = require("googleapis");
const youtube = google.youtube("v3"); // initialize the Youtube API library
const { save } = require("./services/fs");

async function main() {
  const res = await getChannelData();
  save(res.data, "content.json");
}

async function getChannelData() {
  return await youtube.channels.list({
    part:
      "brandingSettings,contentDetails,contentOwnerDetails,id,localizations,snippet,statistics,status,topicDetails",
    id: "UCURffR0e_FPKnDuzQ0XyWhw",
    key: "AIzaSyCnvsB6AXf0_C6IWB8HSZOkTd0XJ7u8HVw",
  });
}

if (module === require.main) {
  main().catch(console.error);
}
module.exports = main;
