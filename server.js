// require("dotenv").config();


const app=require('./app')

const port=8000;

app.get("/",(req,res)=>{
    res.end("hello world")
})


app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})