const fs = require('fs');
//const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
const packageJson = JSON.parse(fs.readFileSync('./public/version.json', 'utf8'));

console.log(packageJson.version);