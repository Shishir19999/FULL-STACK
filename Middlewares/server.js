import express from "express";

const app =express()

app.use(logger)


app.get ('/',(req,res)=>{
res.send("homme page")
console.log("hommme.page")
})

app.get ('/users',auth ,(req,res)=>{
    console.log(`user is admmmin =${req.admin}`)
    console.log("user page")
    res.send("users page")
})

function logger (req, res, next ){
    console.log("before nexxt")
    console.log(req.originalUrl)
    next() 
    console.log("after nexxt")
}

function auth (req, res, next ){
   if(req.query.admin ==='true'){
    req.admin=true
    next()
    return

   }
    res.send('no auth')
   
}
app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });