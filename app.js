const { google } = require("googleapis");
const youtube = google.youtube("v3"); // initialize the Youtube API library
const { save } = require("./services/fs");

async function main() {
  for (let index = 0; index < 10; index++) {
    const file = require(`./data/tratamento-precoce-top-500/content${index}.json`)
    file.items.forEach((video) => {
      console.log(video.id.videoId)
    });
  }
}

async function getChannelData() {
  return await youtube.channels.list({
    part:
      "brandingSettings,contentDetails,contentOwnerDetails,id,localizations,snippet,statistics,status,topicDetails",
    // id: ["UCURffR0e_FPKnDuzQ0XyWhw", "UCJplp5SjeGSdVdwsfb9Q7lQ"],
    forUsername: "toysandcolors",
    key: "AIzaSyCnvsB6AXf0_C6IWB8HSZOkTd0XJ7u8HVw",
  });
}

async function searchByKeyword(pageToken) {
  console.log(`Next page token: ${pageToken}`);
  return youtube.search.list({
    part: "id,snippet",
    q: "tratamento precoce",
    key: "AIzaSyCnvsB6AXf0_C6IWB8HSZOkTd0XJ7u8HVw",
    maxResults: 50,
    pageToken,
  });
}

if (module === require.main) {
  main().catch(console.error);
}
module.exports = main;
