import React from 'react'
import Home from './components/Home'
import Form from './components/Form'
import { Table } from '@mui/material'
import Index from './Index'
import Cardo from './components/Cardo'

const App = () => {
  return (
    <div>
     {/* <Home/>  */}
     <Cardo/>
     
       <Form user2={{myname:'tiya',email:"tiya@gmail.com"}}/>
       <Index/>
    </div>
  )
}

export default App