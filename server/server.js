const express=require("express")
const cors=require("cors")
const app=express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({urlencoded:true}))

const db=require("./app/models")

db.mongoose.connect(db.url,{useNewUrlParser:true}).then((d)=>{
    console.log("connected")
}).catch((e)=>{
    console.log(e)
})
app.get("/",()=>{
    console.log("heh")
})
require("./app/routes/movie.route")(app)
app.listen(4000,()=>{
    console.log("server is running at 4000")
})