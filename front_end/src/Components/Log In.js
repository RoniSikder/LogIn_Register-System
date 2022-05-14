import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { Register } from './Register'
import axios from 'axios'

export const LogIn = ({setare}) => {
  const navi=useNavigate()
  let [hold,sethold]=useState({
    email:"",
    pass:""
  })
  let containt=(e)=>{
    e.preventDefault();
    const { email , pass }=hold;
    axios.post('http://localhost:5700/login',hold)
    .then(res=>{
      alert(res.data.message)
      setare(res.data.checker)
    })
    .catch(err=>{alert(err)})
    console.log(hold);
  }
  let control=(e)=>{
    sethold({...hold,[e.target.name]:e.target.value})
  }
  return (
    <form style={{border:"2px solid black",margin:"13%",padding:"50px",borderRadius:"10px"}}>
      <div className="row mb-3"><span style={{fontSize:"50px"}}>Log In Page</span></div>
    <div className="row mb-3">
      <div>Email</div>
      <div>
        <input type="email" className="form-control" name='email' value={hold.email} onChange={control} id="inputEmail3" style={{border:"2px solid black"}}/>
      </div>
    </div>
    <div className="row mb-3">
      <div>Password
      <div>
        <input type="password" className="form-control" name='pass' value={hold.pass} onChange={control} id="inputPassword3" style={{border:"2px solid black"}}/>
      </div>
    </div>
    </div>.
    
    <button className="btn btn-success" onClick={containt}>Log In</button>
    <div><span>or</span></div>
    <span>Dont Have an Account </span>
    <button type="submit" className="btn btn-success" onClick={()=>{navi('/register')}}>Sign Up</button>
  </form>
  )
}
