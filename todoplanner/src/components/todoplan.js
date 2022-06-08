import {useState} from "react";

export function Todo() {
    const [aravind,setaravind]=useState("");
    const [allaravind,setallaravind]=useState([]);
    const [editingat,seteditingat]=useState();
    const change=(event)=>{
        const value=event.target.value;
        setaravind(value);
    }
const submit=(event)=>{
  if(editingat==undefined){
  const x=[...allaravind,aravind];
  setallaravind(x);
    setaravind("");
  }else{
   const newaravind= allaravind.map((value,index)=>{
     if(index==editingat){
       return aravind;
     }else{
       return value;
     }

    })
    setallaravind(newaravind);
    seteditingat(undefined);
    setaravind("");
  }
}
    const handleEdit=(event,index)=>{
      seteditingat(index);
      const y=allaravind[index];
      setaravind(y);
    }


    return (
      <div className="App">
        <center>
          <h1>todo planner</h1>
          <div className='anil'>
              
          <input type="text" value={aravind} onChange={change} ></input>
          
           <button type="button" class="btn btn-primary" onClick={submit} style={{marginLeft:30}} >submit</button>
          
          </div>
          </center>
          <div className='kalyan' >
          <center >
        <table border="1">
            <tr>
                <th>SI</th>
                <th>TODO</th>
                <th>ACTION</th>
            </tr>
            {
            allaravind.map((value,index)=>{
              return(
                <tr>
                <td>{index+1}</td>
                <td>{value}</td>
                <td>
                  <button onClick={(event)=>{handleEdit(event,index)}}>edit</button>
                  <button>delete</button>
                </td>
            </tr>

              )
            }
            )
          }
        </table>
        </center>
        </div>
      </div>
    );
  }