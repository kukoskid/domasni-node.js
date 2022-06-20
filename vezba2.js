var fs = require(`fs`);
const os = require(`os`);
const path = require(`path`);

fs.writeFileSync(`Damjan.txt`,`Damjan is learning node js`)
fs.unlink(`Damjan.txt`);
console.log(fs.readFileSync(`Damjan.txt`).toString())

console.log(path.dirname(__dirname));

console.log(os.freemem());
console.log(os.totalmem());
console.log(os.version())
