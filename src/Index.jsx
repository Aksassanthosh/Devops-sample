import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
//   const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
//   ];
const Index = () => {
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get('https://dummyjson.com/users').then((res)=>{
            setData(res.data.users)
        // console.log(res)
        })
    },[])
  return (
    <div>
        <h1>AXIOS TABLE</h1> <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>NAME</TableCell>
          <TableCell align="right">EMAIL</TableCell>
          <TableCell align="right">GENDER</TableCell>
          <TableCell align="right">PHONE</TableCell>
          <TableCell align="right">ADDRESS</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
         {data.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.firstName}
            </TableCell>
            <TableCell align="right">{row.email}</TableCell>
            <TableCell align="right">{row.gender}</TableCell>
            <TableCell align="right">{row.phone}</TableCell>
            <TableCell align="right">{row.address.address}</TableCell>
          </TableRow>
        ))} 
      </TableBody>
    </Table>
  </TableContainer></div>
  )
}

export default Index