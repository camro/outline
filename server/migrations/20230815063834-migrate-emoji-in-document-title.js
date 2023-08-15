"use strict";

const { execSync } = require("child_process");
const path = require("path");

module.exports = {
  async up(queryInterface, Sequelize) {
    if (
      process.env.NODE_ENV === "test" ||
      process.env.DEPLOYMENT === "hosted"
    ) {
      return;
    }

    const scriptName = path.basename(__filename);
    const scriptPath = path.join(
      process.cwd(),
      "build",
      `server/scripts/${scriptName}`
    );

    execSync(`node ${scriptPath}`);
  },

  async down(queryInterface, Sequelize) {
    // noop
  },
};
