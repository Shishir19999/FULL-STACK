import React,{useState} from 'react'

function HomeComponent() {
  let [x, setX]=useState(0);
  const [name,setName]=useState("");
  // let x=10;
  const increment=()=>{
    setX(x++)
  }
  
  const getInput=(e)=>{
    setName(e.target.value)
  }
  return (
    <div>
      <h3>Introduction</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perspiciatis illo optio quas rerum necessitatibus rem voluptatibus dolorem suscipit. Quam obcaecati delectus rem natus esse nam, voluptatem assumenda quidem perferendis!</p>
      <br></br>
      <br></br>
      <hr />
      <h1>Hello:{name}</h1>
      {/* <input type="text" onChange={(e)=>setName(e.target.value)} /> */}
      <input type="text" onChange={getInput} />
      <hr />
      <h4>{x}</h4>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default HomeComponent
