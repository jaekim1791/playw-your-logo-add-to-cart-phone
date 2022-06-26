const { devices } = require("@playwright/test");

const config = {
  testDir: "./tests",

  timeout: 60 * 1000,

  expect: {
    timeout: 5000,
  },

  fullyParallel: true,

  use: {
    // launchOptions: {
    //   slowMo: 200,
    // },
    headless: false,
    trace: "retain-on-failure",
  },

  projects: [
    {
      name: "iPhone 11 Pro",
      use: {
        ...devices["iPhone 11 Pro"],
      },
    },
    {
      name: "Galaxy S9+",
      use: {
        ...devices["Galaxy S9+"],
      },
    },
    {
      name: "Pixel 5",
      use: {
        ...devices["Pixel 5"],
      },
    },
  ],
};

module.exports = config;
