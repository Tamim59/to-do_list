import { useState } from "react";

function App() {
  let [taskarr,setTaskarr] = useState([])
  let [text,setText] = useState("")
  let [error,setError] = useState(false)
  let [btn,setbtn] = useState(true)
  let [editid,setEditId] = useState("")

  let handelChange = (e)=>{
    setText(e.target.value)
  }

  let handelClick = ()=>{
    if(text){
      if(error){
      setError(false)
      }
      taskarr.push(text)
      let arr = [...taskarr]
      setTaskarr(arr)
      setText("")
    }else{
      if(!error){
      setError(true)
      }
    }

  }

  let handledelete = (id)=>{
    taskarr.splice(id,1);
    let arr = [...taskarr]
    setTaskarr(arr)
  }

  let handelEdit = (edit,id)=>{
    setbtn(false)
    setText(edit);
    setEditId(id)
  }
  let handelCancle =()=>{
    setbtn(true)
    setText("")
  }

  let handelUpdate = ()=>{
    taskarr[editid] = text
    let arr = [...taskarr]
    setTaskarr(arr)
    setText("")
    setbtn(true)
  }

  return (
    <>
      <input onChange={handelChange} value={text}/>
      {
        btn 
      ? 
        <button onClick={handelClick}>Submit</button>
      :
        <>
        <button onClick={handelUpdate} value={text}>Update</button>
        <button onClick={()=>handelCancle()} value={text}>Cancle</button>
        </>
      }
      
      
      {error && <h3>Enter a value</h3>}
      <ol>
      {taskarr.map((item,index)=>(
          <li key={index}>{item}<button onClick={()=>handledelete(index)}>Delete</button><button onClick={()=>handelEdit(item,index)}>Edit</button></li>
        ))}
      </ol>
    </>
  );
}

export default App;