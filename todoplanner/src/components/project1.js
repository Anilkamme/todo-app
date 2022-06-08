import { useState } from "react";

export const MyTodo=()=>{
    const [anil,setanil]=useState();
    const [allanil,setallanil]=useState([]);
    const onchange=(event)=>{
        const value=event.target.value;
        setanil(value);
    }
    const onsubmit=(event)=>{
        const x=[...allanil,anil];
        setallanil(x);
        setanil("");
    }
    return(
        <>
        <center>
            <h3>work alarm</h3>
            <div className="love">
            <input type={"text"} value={anil} onChange={onchange}></input>
            <button type="button" class="btn btn-primary" style={{marginLeft:30}} onClick={onsubmit}>submit</button>
            </div>
            <div className="kumar">
            <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">SI</th>
      <th scope="col">todo</th>
      <th scope="col">action</th>
      
    </tr>
  </thead>
  {
      allanil.map((value,index)=>{
          return( <tbody>
            <tr>
              <th >{index+1}</th>
              <td>{value}</td>
              <td>
                  <button>edit</button>
                  <button>delete</button>
              </td>
              
            </tr>
            </tbody>


          )
      })
  }
    </table>
            </div>
        </center>
        
        </>
    )
}