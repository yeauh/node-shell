// const { cwd } = require('node:process');

module.exports = () => {
    const { cwd } = require('node:process');

    console.log(`Current directory: ${cwd()}`);
}

// console.log(`Current directory: ${cwd()}`);