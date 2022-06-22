const express = require("express")
const app = express();

app.use(express.static("public"))
app.set(`view engine`,`ejs`)
// app.use(logger)

// app.get(`./`, logger, (req, res) =>{
//     // console.log(`here`)
//     // res.download("server.js")
//     // res.json({message:"error"})
//     // res.send("hi")
//     res.render(`index`,{text: "World"})
// })

const userRouter = require(`./routes/users`)
const postRouter = require(`./routes/posts`)

app.use(`/users`, userRouter)
app.use(`/posts`, postRouter)

function logger(req,res,next){
    console.log(req.originalUrl)
    next()
}


app.listen(3000)