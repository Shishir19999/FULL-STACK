const express =require('express')
const app=express()
var cors = require('cors');
const port=3000


app.use(cors())

app.get('/',(req,res)=>{
    res.send('Hello ')
})
app.get('/news',(req,res)=>{
    const newsData=[
        {title:"title1",description:"description"},
        {title:"title1",description:"description"},
        {title:"title1",description:"description"}
    ]
    res.json(newsData);
    res.send("news Data")
})
app.get('/user',(req,res)=>{
    res.send('Hello all user')
})
app.get('/student',(req,res)=>{
    let data =[

        {name:'john', age:34},
        {name:'john', age:34},
        {name:'john', age:34}
]
res.json(data);
})

app.listen(port,()=>{
    console.log("app is listening 3000")
})