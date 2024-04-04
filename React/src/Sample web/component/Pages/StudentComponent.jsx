import React,{useState} from 'react'

function StudentComponent() {
    let [name,setName]=useState("");
    let [email,setEmail]=useState("");
    let [address,setAddress]=useState("");

    const addRecord=(e)=>{
        e.preventDefault();
        console.log("Name:",name)
        console.log("E-mail:",email)
        console.log("Address:",address)
    }

  return (
    <div>
      
    <h1>Student Record</h1>
    <hr />
    <form action="" onSubmit={addRecord}>
        <label htmlFor="name">Name</label><br />
        <input type="text" name='name' onChange={(e)=>setName(e.target.value)} /> <br /><br />
        <label htmlFor="email">E-mail</label><br />
        <input type="text" name='email' onChange={(e)=>setEmail(e.target.value)} /> <br /><br />
        <label htmlFor="address">Name</label><br />
        <input type="text" name='address' onChange={(e)=>setAddress(e.target.value)} /> <br /><br />
    
        <button>Add Record</button>
    </form>

    </div>
  )
}

export default StudentComponent
