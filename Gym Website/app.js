const express=require("express")
const path=require("path")
const fs=require("fs")
const app=express()

const port=80
//Setting template engine as pug
app.set("view engine","pug");
app.set("views",path.join(__dirname,"views"))
app.use("/static",express.static("static"))
app.use(express.urlencoded())

//Setting Endpoints
app.get("/",(req,res)=>{
    res.status(200).render("index.pug")
})
app.get("/form",(req,res)=>{
    res.status(200).render("form.pug")
})
app.post("/form",(req,res)=>{
    res.render("submit.pug")
    fs.appendFileSync("output.txt",JSON.stringify(req.body));
})
// Starting server at port 80
app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
});