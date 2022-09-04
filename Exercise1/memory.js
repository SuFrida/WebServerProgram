const os = require('os');
const memo = os.totalmem();
const memory = () => {
    console.log(`The current memory available is: ${memo}`)
  }
  
  module.exports = memory;