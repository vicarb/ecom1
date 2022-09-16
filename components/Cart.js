
import React, { useState, useEffect, useContext } from "react";
import CartContext from "../context/CartContext";
import Link from "next/link";


//Cart PopUp in Navbar
const Cart = () => {

  const { quanty, handleCartInc, handleCartDec, items, quantity, setQuantity, clicked } = useContext(CartContext)
  const [total, setTotal] = useState()
  const totalPrice = items.reduce((total, item) =>{
    return total + item.price * item.quantity
  }, 0)

  useEffect(() =>{
    console.log("this is use effect from quant--->", quantity)
    setQuantity(quantity)
  }, [items])
 
  
  return (
    <>
    <div className={`container  p-6`}>
    <Link href="/carro">
      <a className={`m-4 p-2 bg-emerald-200 rounded-lg`} >Ir al carro</a>
      </Link>
        {items.map((item, index) => 
        
        (
          
          <div key={item.id} className="p-4 border">
            <img  width="60" alt="ecommerce" className=" mx-auto hover:scale-105 transition-all rounded border border-gray-200" src={`https://crypton.cl${item.image}`} />
            <h2 className="">{item.name}- {item.quantity}- ${item.price * item.quantity} </h2>
            <button className={`px-4 mx-1 bg-emerald-100 rounded-lg`} onClick={() => handleCartInc(item, quantity)}>+</button>
            <button className='px-4 bg-red-100 rounded-lg' onClick={() => handleCartDec(item, quantity)}>-</button>
          </div>
    ))}
      
       </div>
    </>
  );
};

export default Cart;