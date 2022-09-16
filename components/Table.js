import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import CartContext from '../context/CartContext'
import axios from 'axios'
import Link from 'next/link'
export const Table = () => {
    const { items, handleCartInc, handleCartDec, removeHandler  } = useContext(CartContext)

    const totalPrice = items.reduce((total, item) =>{
      return total + item.price * item.quantity
    }, 0)

    const [total, setTotal] = useState()
    const url = 'http://127.0.0.1:8000/api/cart'
    let respo;
    let cart_ship = [];
    const [data, setData] = useState()
    // useEffect(() => {
    //  axios.get(url) 
    // }, [data]) 
    const options = {
      headers: {
        'content-type': 'application/json'
        },
    }
    useEffect(() =>{

      console.log("Log total price--->", totalPrice);
      axios.all([
        axios.post(url, {'total_price': totalPrice})
        .then(axios.get(url))
        .then((resp) => {
          console.log("This is resp GET post to api", resp);
          respo = resp.data
          setData(respo)
          console.log("From const", respo);
          console.log("This is data", respo.url);
          console.log("log----->", items);
          items.forEach(item => {
            if (cart_ship.includes(item)){
              console.log("Existe!!");
            } else {
              cart_ship.push(item)
            }
            console.log("Cart_ship data", cart_ship);
          });
          
    
          
        })
        .catch((err) => {
          console.log("Err: ",err.response);
        })
        
      ])
    }, [totalPrice])
            
  

  return (
    <div>
        <table>
            
        { totalPrice > 0 ?

         <tbody>
           <tr>
        <th>#</th>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Total</th>
        </tr>
        {items.map((item) => {
          return (
            <tr key={item.id}>
                <td><img height="120" width="90" alt="ecommerce" className="hover:scale-105 transition-all rounded border border-gray-200" src={`https://chillin.cl${item.image}`} /></td>
              <td  className='p-2 text-2xl'>{item.name}</td>
              <td className='p-2 text-2xl ml-40'>{item.quantity}</td>
              <td className='p-2 text-2xl'>${item.price}</td>
              <td className='p-2 text-2xl'>${item.quantity*item.price}</td>
              
              <td><button className={`px-4 bg-emerald-300 rounded-lg`} onClick={() => handleCartInc(item)}>+</button></td>
        <td><button className='px-4 bg-red-300 rounded-lg' onClick={() => handleCartDec(item)}>-</button></td>
        <td><button className='px-4 bg-red-300 rounded-lg' onClick={() => removeHandler(item)}>X</button></td>
            </tr>
            
          )
        })}
        
      <tr className='mx-20 p-2 text-2xl'>
      <td className='p-2 text-2xl'></td>
      <td className='p-2 text-2xl'></td>
      <td className='p-2 text-2xl'></td>
      <td className='p-2 text-2xl'></td>
      <td onChange={(e) => {}} className='p-2 text-2xl'>${totalPrice}</td>
      {/* <td className='cursor-pointer bg-emerald-500 rounded-lg px-4' onClick={(e) => handlePay()}> Ir a pagar </td> */}
      
      </tr>
        </tbody>
        
        :
        <tbody>

<tr className='p-2 text-2xl'>Tu carro esta vacio </tr>
        </tbody>
      }
      </table>
      {totalPrice > 0 && data && 
      
      <div className='container mx-20 '>
        <form className="flex ml-auto text-white bg-emerald-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded" method="post" action={data.url}>
                                    <input type="hidden" name="token_ws" value={data.token} />
                                    <input  className="" type="submit" value={`Ir a pagar $${data.total_price}`} />
                                    </form>
        </div>}
        <Link href="/continuar"><span className='p-8 bg-emerald-500 hover:cursor-pointer'>Continuar compra</span></Link>
    </div>
  )
}
