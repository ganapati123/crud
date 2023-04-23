import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios'

const url=`http://localhost:5000/employee`
function EmpEdit(){
    const {empid}=useParams();
   
    const [empdata,empdatachange]=useState({})
    const [id,idChange] = useState("")
    const [name,nameChange] = useState("")
    const [email,emailChange] = useState("")
    const [phone,phoneChange] = useState("")
    const [active,activeChange] = useState(true)
    const [validate,validateChange] = useState(true)
  
  
    const navigate = useNavigate();
  
    const handleSubmit=(e)=>{
           e.preventDefault();
           const empdata={id,name,email,phone,active}
           //console.log({name,email,phone,active})
          
        //    fetch("http://localhost:5000/employee/"+empid,{
        //       method:"PUT",
        //       headers:{"content-type":"application/json"},
        //       body:JSON.stringify(empdata)
        //    }).then(res=>{
        //       alert('saved successfully.')
        //       navigate('/')
        //    }).catch(err=>{
        //       console.log(err.message)
        //    })

        alert(JSON.stringify(empdata));
        axios.put(`${url}/${id}`,empdata)
        .then(()=>{
          window.alert("Updtated");
         navigate('/')
      });
    }
     
    useEffect(()=>{
    //    fetch('http://localhost:5000/employee/'+empid)
    //        .then((res)=>{
    //           return res.json()
    //        }).then((resp)=>{
    //           idChange(resp.id)
    //           nameChange(resp.name)
    //           emailChange(resp.email)
    //           phoneChange(resp.phone)
    //        }).then((err)=>{
    //             console.log(err.message)
    //        })

    axios.get(`${url}/${id}`).then((res)=>empdatachange(res.data))
     },[])
    return(<>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
            <form className="container" onSubmit={handleSubmit}>
             
              <div className="card" style={{"textAlign":"left"}}>
                <div className="card-title">
                    <h1>Employee Edit</h1>
                </div>
                <div className="card-body">
                   <div className="row">
                        
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>ID</label>
                                <input value={id} disabled='disabled' className="form-control"></input>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>NAME</label>
                                <input required value={name} onMouseDown={e=>validateChange(e.target.value)} onChange={e=>nameChange(e.target.value)} className="form-control"></input>
                               {name.length == 0 && validate && <span className="text-danger">Enter the Name</span>}
                            </div>
                        </div>
                  
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>EMAIL</label>
                                <input value={email} onChange={e=>emailChange(e.target.value)} className="form-control"></input>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>PHONE</label>
                                <input value={phone} onChange={e=>phoneChange(e.target.value)} className="form-control"></input>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="form-check">
                               <input value={active} type="checkbox" onChange={e=>activeChange(e.target.checked)} className="form-check-input"></input>
                                <label type="checkbox" className="form-check-label">Is Active</label>                               
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="form-check">
                               <button  className="btn btn-success">Save</button>
                               <Link to='/' className="btn btn-danger">Back</Link>                                                    
                            </div>
                        </div>

                   </div>
                </div>
              </div>
            </form>
        </div>
       </div>
    </>)
}
export default EmpEdit;