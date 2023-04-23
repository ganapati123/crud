import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";


function EmpDeatails(){
  const {empid}=useParams();
 const [empdata,empdatachange]=useState({})
 
 useEffect(()=>{
    fetch('http://localhost:5000/employee/'+empid)
        .then((res)=>{
           return res.json()
        }).then((resp)=>{
            empdatachange(resp)
        }).then((err)=>{
             console.log(err.message)
        })
  },[])
    return(<>
      <div className="card" style={{"textAlign":"left"}}>
                <div className="card-title">
                    <h1>Emp Create</h1>
                </div>
                <div className="card-body"></div>

                {
                    empdata &&
                    <div>
                        <h2>Employee name is: {empdata.name} ({empdata.id})</h2>
                        <h3>Contact Details:</h3>
                        <h5>Email is: {empdata.email}</h5>
                        <h5>Phone is: {empdata.phone}</h5>
                        <Link className="btn btn-danger" to='/'>Back to Listing</Link>
                    </div>
                }
     </div>
     </> )
}
export default EmpDeatails;