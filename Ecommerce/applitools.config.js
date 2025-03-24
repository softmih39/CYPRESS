module.exports = {
  testConcurrency: 1,

  apiKey: "<apiKey>",

  browser: [
    { width: 800, height: 600, name: "chrome" },

    { width: 1600, height: 1200, name: "firefox" },

    { width: 1024, height: 768, name: "safari" },

    { deviceName: "Pixel 2", screenOrientation: "portrait" },

    { deviceName: "Nexus 10", screenOrientation: "landscape" },
  ],

  batchName: "Cypress JavaScript with the Ultrafast Grid",
};
