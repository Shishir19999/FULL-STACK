const express=require("express");
const mongoose=require('mongoose')
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/studentFormData') 
const cors=require('cors')

const app=express();
app.use(express.json());
// Express 5 leaves req.body undefined when no body is sent; keep the Express 4 behavior (empty object).
app.use((req, res, next) => { if (req.body === undefined) req.body = {}; next(); });
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
    try{
        let studentsData= await  students.find({})
        res.status(200).json(studentsData);
    }catch(e){
        res.status(500).json({message:e.message});
    }

});

app.post('/',async(req,res)=>{
    try{
        const sObj=new students({...req.body});
        await sObj.save()
        return res.status(201).json({message:"student added Successful"});
    }
    catch(err){
        res.status(err.code===11000?409:400).json({message:err.message});
    }
})

app.get('/:id',async(req,res)=>{
    try{
        const student=await students.findById(req.params.id);
        if(!student) return res.status(404).json({message:"student not found"});
        res.status(200).json(student);
    }catch(e){
        res.status(400).json({message:e.message});
    }
});

app.put("/:id", async (req , res )=> {
    let id= req.params.id;
    try{
        // new:true returns the updated document; runValidators keeps required fields enforced
        let student =await students.findByIdAndUpdate(id , req.body, {new:true, runValidators:true});
        if(!student) return res.status(404).json({message:"student not found"});
        res.status(200).json({student:student,message: "data updated successfully"});
    }
    catch(e){
        res.status(e.code===11000?409:400).json({message : e.message});
    }
})

app.delete("/:id", async (req , res )=> {
    let id= req.params.id;
    try{
        const deleted = await students.findByIdAndDelete(id);
        if(!deleted) return res.status(404).json({message:"student not found"});
        res.status(200).json({message: "data deleted successfully"});
    }
    catch(e){
        res.status(400).json({message : e.message});
    }
})

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`app is listening on ${port}`);
})
