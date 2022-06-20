var fs=require(`fs`);
fs.writeFileSync(`Damjan.txt`,`Damjan is learning node js`)
// fs.unlink(`Damjan.txt`);
console.log(fs.readFileSync(`Damjan.txt`).toString())
const path=require(`path`)
console.log(path.dirname(__dirname));
const os=require(`os`);
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.version())