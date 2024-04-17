const express=require("express");
const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/studentFormData') 
const cors=require('cors')

const app=express();
app.use(express.json());
app.use(cors());
const studentSchema=new mongoose.Schema({
   
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required : true,
        unique: true
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String
    }

})
const students=mongoose.model("students",studentSchema)


app.get('/',async(req,res)=>{
    let studentsData= await  students.find({})
    res.status(200).json(studentsData);

});

app.post('/',(req,res)=>{
    try{
    const sObj=new students({...req.body});
    sObj.save()
    return res.status(201).json({message:"student added Successful"});
    }
    catch{
        res.status(400).json({message:err.message});
    }
})

app.put("/:id", async (req , res )=> {
    let id= req.params.id;
    try{
        let student =await students.findByIdAndUpdate(id , req.body);
        res.status(200).json({student:student,message: "data updated successfully"});
    }
    catch(e){
        res.status(400).json({message : e.message});
    }
})

app.delete("/:id", async (req , res )=> {
    let id= req.params.id;
    try{
        await students.findByIdAndDelete(id);
        res.status(200).json({message: "data deleted successfully"});
    }
    catch(e){
        res.status(400).json({message : e.message});
    }
})

app.listen(3000,()=>{
    console.log("app is lidtening");
})