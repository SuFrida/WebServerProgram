const os = require('os');
const time = os.uptime();
const uptime = () => {
    console.log(`The current uptime is: ${time}`)
  }
  
  module.exports = uptime;