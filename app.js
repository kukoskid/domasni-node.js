// console.log(`hey ninjas`)

// setTimeout(function(){
//     console.log(`3 seconds have passed`)
// }, 3000);

// var time = 0;

// var timer = setInterval(function(){
//     time+=2;
//     console.log(time +` seconds have passed`)
//     if(time>5){
//         clearInterval(timer)
//     }
// }, 2000);
// console.log(__dirname);
// console.log(__filename);
// function sayHi(){
//     console.log(`hi`);
// }
// sayHi();
// var sayBye = function(){
//     console.log(`bye`);
// };
// sayBye();

// function callFunction(fun){
//     fun();
// }
// callFunction(sayBye);
// var stuff = require(`./stuff`);

// console.log(stuff.counter([`shaun`,`crystal`,`ryu`]));
// console.log(stuff.adder(5,6));
// console.log(stuff.adder(stuff.pi,5));

// var events = require(`events`);

// var myEmitter = new events.EventEmmiter();

// myEmitter.on(`someEvent`,function(mssg){
//     console.log(mssg)
// })
// myEmitter.emit(`someEvent`,`the event was emmited`);
// var util = require(`util`);

// var Person=function(name){
//     this.name=name;
// };
// util.inherits(Person,events.EventEmitter);
// var james= new Person(`james`);
// var mary=new Person(`mary`);
// var ryu=new Person(`ryu`);
// var people=[james,mary,ryu];

// people.forEach(function(person){
//     person.on(`speak`,function(mssg){
//         console.log(person.name + ` said: ` + mssg);
//     });
// });
// james.emit(`speak`,`hey dudes`)
// ryu.emit(`speak`,`i want a curry`)

// var fs=require(`fs`);
// var readME=
// fs.readFileSync(`readMe.txt`,`utf8`,function(err,data){
    // console.log(data)
    // fs.writeFile(`writeMe.txt`,data)
// });
// console.log(`test`)
// console.log(readME);
// fs.writeFileSync(`WriteMe.txt`,readME);


// fs.unlink(`WriteMe.txt`);
// fs.rmdirSync(`stuff`);
// fs.mkdir(`stuff`,function(){
//     fs.readFile(`readMe.txt`,`utf8`,function(err,data){
//         fs.writeFile(`./stuff/WriteMe.txt`,data)
//     })
// })
// fs.unlink(`./stuff/WriteMe.txt`,function(){
//     fs.rmdir('stuff')
// })

var http=require(`http`);
var fs=require(`fs`);

// var myReadStream=fs.createReadStream(__dirname + `/readMe.txt`,`utf8`);
// var myWriteStream=fs.createWriteStream(__dirname + `/writeMe.txt`)

// // myReadStream.on(`data`,function(chunk){
// //     console.log(`new chunk received:`);
// //     // console.log(chunk)
// //     myWriteStream.write(chunk);
// // });
// myReadStream.pipe(myWriteStream)






var server=http.createServer(function(req,res){
    console.log(`request was made:`+ req.url)
    if(req.url===`./home` || req.url===`/`){
        res.writeHead(200,{"Content-Type":`text/html`});
        fs.createReadStream(__dirname + `/index.html`).pipe(res)

    }
    else if(req.url ===`/contact`){
        res.writeHead(200,{"Content-Type":`text/html`});
        fs.createReadStream(__dirname + `/contact.html`).pipe(res)

    }
    else if(re1.url===`/api/ninjas`){
        var ninjas = [{name:`ryu`,age:29},{name:`yoshi`,age:32}]
        res.writeHead(200,{"Content-Type":`application/json`})
        res.end(JSON.stringify(ninjas));
    }else{
        res.writeHead(200,{"Content-Type":`text/html`});
        fs.createReadStream(__dirname + `/404.html`).pipe(res)
    }
    // res.writeHead(200, {"Content-Type":`plain/text`});
    // var myReadStream=fs.createReadStream(__dirname + `/index.html`,`utf8`);
    // var myWriteStream=fs.createWriteStream(__dirname + `/writeMe.txt`)
    // myReadStream.pipe(res)
    // var myObj={
    //     name:`Ryu`,
    //     job:`ninja`,
    //     age:29
    // }
    // res.end(JSON.stringify(myObj));
    // res.end(`feed me popcorn`)
});

server.listen(3000,`127.0.0.1`);
console.log('yo dawgs,now listening to port 3000')


