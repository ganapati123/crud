import React,{useState} from "react";

function Password(){
  
    const [password,setPassword] = useState("");
    const [cpassword,setCpassword] = useState("")
    const [error,setError] = useState("")
    
    const updatePassword=(e)=>{
        setPassword(e.target.value)
    }
    const updateCPassword=(e)=>{
        setCpassword(e.target.value)
    }
    const validatePassword=(e)=>{
        const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
       // const regExp = /^(?=.*\d)(?=(.*\W){2})(?=.*[a-zA-Z])(?!.*\s).{1,8}$/
        if(password === "" || password === null){
            setError("Enter password")
        }
        else if(password.length<4){
            setError("pwd should be more than 4 chars")
        }
        else if(!regExp.test(password)){
            setError("pwd must be contain 1 digit, 2 special chars, at least 1 upper and lower case alphabets")
        }
        else if(password !== cpassword){
            setError("password should not match")
        }
        else{
            setError("strong password")
        }
    }
    return(<div>
       <label htmlFor="password">Password</label>
       <input type="password"
              name="password"
              value={password}
              onChange={updatePassword}/>
        <span style={{color:"red"}}>{error}</span> <br/><br/>

        <label htmlFor="cpassword">ConPassword</label>
       <input type="password"
              name="cpassword"
              value={cpassword}
              onChange={updateCPassword}/>
        <span style={{color:"red"}}>{error}</span> <br/><br/>

        <button type="submit" onClick={validatePassword}>validatePassword</button>     


    </div>)
}
export default Password;