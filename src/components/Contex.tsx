import React from "react";

interface Iprops {
  name: string,
  email: string,
  handleRemove:(email:string)=>void
}

const Contex = ({ name, email = "N/A",handleRemove }: Iprops) => {
  return (
    <div>
     

      <div className="mb-5">
        <div className="card w-50 offset-2">
          <div className="card-header">Featured</div>
          <div className="card-body">
            <h5 className="card-title">Name : {name}</h5> 
             <h5 className="card-title">Email : {email}</h5>
            <p className="card-text"> 
              <button className="btn btn-danger" onClick={()=>handleRemove(email)}>Delete button</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contex;
