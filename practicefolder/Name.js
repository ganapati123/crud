import React,{useState} from "react";

function Name(){

    const [username,setUsername] =useState();
    const [error,setError] = useState();
    
    const UpdateName=(e)=>{
        setUsername(e.target.value)
    }
    const ValidateName=(e)=>{
        if(username === "" || username=== null){
            setError("username should not be blank")
        }
        else if(username.length<4){
            setError("username must be more than 4 chars")
        }
        else if(username.length>8){
            setError("username must be 4 to 8 chars")
        }
        else{
            setError("good name")
        }
    }
    return(<div>
       <label htmlFor="username" >UserName</label>
       <input type="text" name="username" value={username} onChange={UpdateName}/>
       <span style={{color:"red"}}>{error}</span> <br/><br/><br/>
       <button type="submit" onClick={ValidateName}>ValidateName</button>

    </div>)
}
export default Name;