var os = require("os");
var fs = require("fs");
const { google } = require("googleapis");
const youtube = google.youtube("v3"); // initialize the Youtube API library
const { save, readFile } = require("./services/fs");

const key = "AIzaSyCnvsB6AXf0_C6IWB8HSZOkTd0XJ7u8HVw";

async function main() {
  readFile("./data/mkf-100-sb.txt", (err, words) => {
    words
      .toString()
      .split(os.EOL)
      .forEach(async (channel) => {
        const param =
          channel.split("/")[0] === "channel" ? "id" : "forUsername";
        const value = channel.split("/")[1];
        const result = await getChannelData({ [param]: value });
        console.log(`Saving channel data: ${param}/${value}`);
        save(result.data, value);
      });
  });
}

async function getChannelData(query) {
  return await youtube.channels.list({
    part:
      "brandingSettings,contentDetails,contentOwnerDetails,id,localizations,snippet,statistics,status,topicDetails",
    ...query,
    key,
  });
}

// async function main() {
//   for (let index = 0; index < 10; index++) {
//     const file = require(`./data/tratamento-precoce-top-500/content${index}.json`)
//     file.items.forEach((video) => {
//       console.log(video.id.videoId)
//     });
//   }
// }

// async function searchByKeyword(pageToken) {
//   console.log(`Next page token: ${pageToken}`);
//   return youtube.search.list({
//     part: "id,snippet",
//     q: "tratamento precoce",
//     key,
//     maxResults: 50,
//     pageToken,
//   });
// }

if (module === require.main) {
  main().catch(console.error);
}
module.exports = main;
