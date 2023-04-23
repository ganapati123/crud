import React,{useState} from "react";

function Email(){
   const [email,setEmail] = useState("");
   const [error,setError] = useState("");

   const updateEmail=(e)=>{
    setEmail(e.target.value)
   }

   const validateEmail=(e)=>{
    
    const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if(!regExp.test(email)){
        setError("Enter valid Email and must be contain @ and .com")
    }
    else{
        setError("you have entered valid email")
    }
   }
   
   return(<div>
      <label htmlFor="email">Email</label>
      <input type="email"
              name="email"
              value={email}
              onChange={updateEmail} />
       <span style={{color:"red"}}>{error}</span>   <br/><br/>

       <button onClick={validateEmail}>validateEmail</button>    
   </div>)
}
export default Email;