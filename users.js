const express = require(`express`)
const router = express.Router()

router.use(logger)

router.get(`/`,(req,res) => {
    res.send("User Form")
})
router.post(`/`,(req,res)=>{
    res.render(`users/new`)
})
router
 .route("/:id")
 .get ((req,res) => {
    res.send(`Get user with ID ${req.params.id}`)
})
 .put ((req,res)=>{
    res.send(`Get user with ID ${req.params.id}`)
})
 .delete ((req,res)=>{
    res.send(`Delete user with ID ${req.params.id}`)
})

    const users = [{name:"Kyle"}, {name:"Sally"}]
route.param("id",(req,res,next,id) =>{
    console.log(id)
    req.user = users[id]
    next()
})
function logger(req,res,next){
    console.log(req.originalUrl)
    next()
}

module.exports = router;