import {useState} from "react";
const Incdeccounter = () => {
    let [num, setNum]= useState(0);
  let incNum =()=>{
    if(num<10)
    {
    setNum(Number(num)+1);
    }
  };
  let decNum = () => {
     if(num>0)
     {
       setNum(num - 1);
     }
  }
 let handleChange = (e)=>{
   setNum(e.target.value);
  }
    return (
        <><div className="col">
        <div className="input-group">
      <div className="input-group-prepend">
        <button className="btn btn-outline-primary" type="button" onClick={decNum}>-</button>
      </div>
      <input type="text" className="form-control" value={num} onChange={handleChange}/>
      <div>
        <button className="btn btn-outline-primary" type="button" onClick={incNum}>+</button>
      </div>
    </div>
    </div></>
    )
}

export default Incdeccounter
