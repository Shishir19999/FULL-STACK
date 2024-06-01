import express from "express";

const app =express()

app.use(logger)
app.get ('/',(req,res)=>{

    res.send("homme page")
})

app.get ('/users',(req,res)=>{
    console.log("user.page")
    res.send("users page")
})
function logger (req, res, next ){
   console.log("log")
   next() 
}

app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });