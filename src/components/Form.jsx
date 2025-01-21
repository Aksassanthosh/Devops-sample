import { Box, Button, TextField } from '@mui/material'
import { alignProperty } from '@mui/material/styles/cssUtils'
import axios from 'axios'
import React, { useState } from 'react'


const Form = ({user2}) => {
  
    const[form,setForm]=useState({
        myname:user2.myname,
        email:user2.email,
        password:"",
        confirm:"",
        phone:"",
        address:""

    })
    const capValue=()=>{
        // console.log(form)
        axios.post('https://dummyjson.com/users/add',form).then((res)=>{
         // console.log(res)
         alert(res.data.id)
        })
    }
  return (
    <div><Box style={{textAlign:"center"}}
    component="form"
    sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
    noValidate
    autoComplete="off"
  >
    <div><h2 style ={{backgroundColor:'yellow', color:'red'}}>STUDENT REGISTRATION FORM</h2></div>
    <div>
      <TextField
        required
        id="outlined-required"
        label="Name"
        type="text"
        value={form.myname}
        onChange={(e)=>{
            setForm({...form,myname:e.target.value})
        }}
      />
      <TextField
        label='email'
        id="outlined-required"
        type="email"
        value={form.email}
        onChange={(e)=>{
            setForm({...form,email:e.target.value})
        }}
      /></div>
      <div>
      <TextField
        id="outlined-password-input"
        label="password"
        type="password"
        value={form.password}
        onChange={(e)=>{
            setForm({...form,password:e.target.value})
        }}
      />
      <TextField
        id="outlined-password-input"
        label="confirm password"
        type="password"
        value={form.confirm}
        onChange={(e)=>{
            setForm({...form,confirm:e.target.value})
        }}
      /></div>
     <div> <TextField
        id="outlined-number"
        label="Phone number"
       type="tel"
       value={form.phone}
       onChange={(e)=>{
           setForm({...form,phone:e.target.value})
       }}
      />
      <TextField
        id="outlined-helperText"
        label="addrress"
       type="text"
       value={form.address}
        onChange={(e)=>{
            setForm({...form,address:e.target.value})
        }}
      />
    </div>
    <Button  variant="contained" onClick={capValue}>REGISTER</Button>
  </Box>
  </div>
  )
}

export default Form