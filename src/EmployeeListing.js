import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const url=`http://localhost:5000/employee`
function EmployeeListing(){
    const [empdata,empdatachange]=useState(null)
    const navigate = useNavigate();

    const LoadDetails=(id)=>{
         navigate('/employee/details/'+id)
    }
    const LoadEdit=(id)=>{
        navigate('/employee/edit/'+id)
    }
    const RemoveFunction=(id)=>{
        if(window.confirm('Do you want to remove?')){
        //     fetch("http://localhost:5000/employee/"+id,{
        //       method:"DELETE"
              
        //    }).then(res=>{
        //       alert('removed successfully.')
        //       window.location.reload()
        //    }).catch(err=>{
        //       console.log(err.message)
        //    })

        axios.delete(`${url}/${id}`)
        }
    }

    useEffect(()=>{
        // fetch('http://localhost:5000/employee')
        // .then((res)=>{
        //    return res.json()
        // }).then((resp)=>{
        //     empdatachange(resp)
        // }).then((err)=>{
        //      console.log(err.message)
        // })

        axios.get(url).then(res=>empdatachange(res.data))

    },[])

    return(<>
       <div className='container'>
        <div className='card'>
            <div className='card-title'>
               <h2>EmployeeListing</h2>
            </div>
            <div className='card-body'>
                <div className='divbtn'>
                    <Link to='employee/create' className='btn btn-success' >AddNew(+)</Link>
                </div>
               <table className='table table-bordered'>
                <thead className='bg-dark text-white'>
                  <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>PHONE</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                        {
                          empdata &&  empdata.map(item=>(
                                <tr key={item.id}>
                                     <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>
                                        <a onClick={()=>{LoadEdit(item.id)}} className='btn btn-success'>Edit</a>
                                        <a onClick={()=>{RemoveFunction(item.id)}} className='btn btn-danger'>Remove</a>
                                        <a onClick={()=>{LoadDetails(item.id)}} className='btn btn-primary'>Details</a>
                                    </td>
                                </tr>
                            ))
                        }
                </tbody>

               </table>
            </div>
        </div>
       </div>
    </>)
}
export default EmployeeListing;
