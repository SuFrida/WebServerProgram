const os = require("os");
const userInfo = os.userInfo();
const user = () => {
    const username = userInfo.username;
    console.log(`The current username is: ${username}`)
  }
  
  module.exports = user;