import React, { useState } from "react";
import Contex from "./components/Contex";

interface Icontact {
  name: string;
  email: string;
}


function App() {
  const [state, setState] = useState<Icontact>({} as Icontact);

  const [Value, setValue] = useState<Icontact[]>([]);

  const funtionadd = () => {
    setValue([...Value, state]);


    setState({name :"", email :""});
  };

  const onchangeFunc =(e:any) => {

   setState({...state,[e.target.name] : e.target.value})
   

  }

 
  const handleRemove = (email:string) => {
    const newContact = Value.filter(contact => contact.email !== email)
    
      setValue(newContact)

  }





  return (
    <div className="bg-dark">
     <div className="w-75">
      <h1 className="text-center text-white"> Contract us</h1>
      <div className="text-center">
       <span className="mr-2"> <input
        className="rounded"
         value={state.name}
          onChange={onchangeFunc}
          placeholder="name.."
          type="text"
          name="name"
         
        /></span>
        <input
         className="rounded"
         value={state.email}
         onChange={onchangeFunc}
          placeholder="email.."
          type="email"
          name="email"
           
        />


        <span><button className="btn btn-danger py-1 pr-4" onClick={funtionadd}>click</button></span>
      </div>
     
     </div>

      
      <hr />
      {
        Value.map(value => <Contex  name ={value.name} email={value.email} handleRemove={handleRemove}></Contex>)

      }

     
      
    </div>
  );
}

export default App;
