import React,{useEffect,useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [name,setName]= useState("");
  const [email,setEmail]= useState("");
  const [phone,setPhone]= useState("");
  const [address,setAddress]= useState("");
  
  const [students,setStudents]= useState([{}]);

  const getStudent=async()=>{
    let response=await fetch('http://localhost:3000');
    let data=await response.json();
    setStudents(data);
  }

  useEffect(()=>{
    getStudent();
  },[])

  const insertData=async (e)=>{
    e.preventDefault();
    let sendData= {name,email,phone,address};
    let response=await fetch ('http://localhost:3000/',
    {
      method:'POST',
      headers:{
        'Content-Type': "application/json"
      },
      body:JSON.stringify(sendData)
      
    });
    let data=await response.json();
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
  }

  return (
    <div className='container'>
      <div className="row mb-3 mt-3">
        <div className="col-md-12">
          <h1>student Record</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          
          <form action="" onSubmit={insertData}>
            <div className="mb-3">
            <label htmlFor="name" className='form-label'>Name:</label><br />
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} id="name" className='form-control'/>
            </div>
            <div className="mb-3">
            <label htmlFor="email" className='form-label'>E-mail:</label><br />
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} id="email" className='form-control'/>
            </div>
            <div className="mb-3">
            <label htmlFor="phone" className='form-label'>Phone:</label><br />
            <input type="text" value={phone} id="phone" onChange={(e)=>setPhone(e.target.value)} className='form-control'/>
            </div>
            <div className="mb-3">
            <label htmlFor="address" className='form-label'>Address:</label><br />
            <input type="text" value={address} id="address" onChange={(e)=>setAddress(e.target.value)} className='form-control'/>
            </div>
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default App
