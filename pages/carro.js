import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import CartContext from '../context/CartContext'
import Link from 'next/link'
import { Table } from '../components/Table'
// import { Resumen } from '../components/Resumen'
import Resumen from '../components/Resumen'


//Carro Page component> 
const Carro = () => {
  
  
  return (
    <>
    <Resumen/>
    {/* <div className="container py-20">

        <Table/>
        
       </div> */}
       
    </>

  )
}

export default Carro;