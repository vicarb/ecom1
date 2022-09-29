import React from 'react'
import { useContext, useState, useEffect } from 'react'
import CartContext from '../context/CartContext'
import axios from 'axios'
import Link from 'next/link'

const Resumen = () => {
    const { items, handleCartInc, handleCartDec, removeHandler, id, setId, pending, setPending  } = useContext(CartContext)
    const [sta, setSta] = useState(false)
    const [dataput, setDataput] = useState([])

    let vari;
    const totalPrice = items.reduce((total, item) =>{
      return total + item.price * item.quantity
    }, 0)
    setPending(false)
    console.log("PENDING:",pending);
    

    const url = 'https://crypton.cl/api/cart'
    console.log("STA",sta);


    useEffect(() =>{

        axios.post(url, {'total_price': totalPrice})
        .then((resp) => {
          console.log("Resp from cart", resp);
          console.log("Resp from id", resp.data.id);
          setId(resp.data.id)
          
          
          
          
        })
        .catch((err) => {
          console.log("Err: ",err.response);
        })

  
        
    }, [])

    useEffect(() =>{
        if(id){
          setSta(true)
          const url1 = 'https://crypton.cl/api/cart/' + id
          console.log("url1!-->", url1);
          const options = {
            headers: {"content-type": "application/json"}
          }
          axios.all([
            axios.get(url1).then((resp)=> {
              vari=resp.data
              setDataput(vari)
              console.log("Dataput & setVari", vari);

              console.log("axios get pending", pending);
            })
            .then(()=> {
              
              if(dataput){

                console.log("dataput get pending", pending);
                axios.put(url1, {'id':id,'total_price': totalPrice, 'url':dataput.url, 'buy_order':dataput.buy_order, 'session_id':dataput.session_id }, options)
              }

              console.log("end of axios all", pending);
            })
              
              .catch((e)=>console.log(e))])
          // axios.put(url1, {'id':id,'total_price': totalPrice }, options)
          // axios.get(url1).then((resp)=>console.log("peude ser:",resp.data.url)).then(
          //   () => axios.put(url1, {'id':id,'total_price': totalPrice, 'url':resp.data.url }, options)
          // ).catch((e)=> console.log("error-->", e))
          
        }
        
        setTimeout(() => {

          console.log("This will appear after 3 seconds")
          setSta(false)
          console.log("STA",sta);
    
        }, 1000)
 
        console.log("STA",sta);
    }, [totalPrice])

    console.log("out use effect pending",pending);
    console.log("STA",sta);
    

  return (
    <>


{items.length > 0 
? 
<div className="mt-6  2xl:w-full  ml-0  mb-8 2xl:ml-24 grid-cols-1 2xl:flex">
  
  <div className='container lg:mx-auto p-4 lg:p-20 bg-amber-200 rounded-md flex flex-column'>
    {items.map((item) => {
      return(
        <>

<div className="flex mx-4 flex-1 justify-center overflow-hidden">
  <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    <img className="h-24 lg:w-full lg:h-72 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={`https://crypton.cl${item.image}`} alt="" />
    <div className="mt-8 p-6 flex flex-col justify-start">
      <h5 className="text-gray-900 text-lg font-medium mb-2">{item.name} <button className=' ml-2 px-1 absolute bg-red-100 rounded-lg text-xs' onClick={() => removeHandler(item)}>x</button></h5>
      <span className='font-bold text-md'>
        { sta && <button disabled className='px-2 mx-1 bg-emerald-100 rounded-lg' onClick={() => {
                          handleCartInc(item)}
                          }>+</button>}
                          { !sta && <button  className='px-2 mx-1 bg-emerald-200 rounded-lg' onClick={() => {
                          handleCartInc(item)}
                          }>+</button>}
          {item.quantity}
          { !sta && <button className='px-2 mx-1 bg-red-100 rounded-lg' onClick={() => handleCartDec(item)}>-</button>}
                      { sta && <button disabled className='px-2 mx-1 bg-red-100 rounded-lg' onClick={() => handleCartDec(item)}>-</button>}
                      
          </span>
      <p className="mt-4 lg:mt-10 mb-0 font-semibold text-lg">${item.quantity * item.price}</p>

      
    </div>
  </div>
</div>


        {/* {} */}

        {/* <h2 className='text-lg'>{item.name} {item.quantity} {item.quantity * item.price}</h2>
        <span className='font-bold text-md'>
        { sta && <button disabled className='px-2 mx-1 bg-emerald-100 rounded-lg' onClick={() => {
                          handleCartInc(item)}
                          }>+</button>}
                          { !sta && <button  className='px-2 mx-1 bg-emerald-200 rounded-lg' onClick={() => {
                          handleCartInc(item)}
                          }>+</button>}
          {item.quantity}
          { !sta && <button className='px-2 mx-1 bg-red-100 rounded-lg' onClick={() => handleCartDec(item)}>-</button>}
                      { sta && <button disabled className='px-2 mx-1 bg-red-100 rounded-lg' onClick={() => handleCartDec(item)}>-</button>}
          </span>
          <h2 className='font-semibold'>${item.quantity * item.price}</h2> */}
        </>
      )
    })}
               
  </div>
  <div className='lg:mx-20  mt-4  '>
    <div className=' mx-auto justify-center bg-amber-100 rounded-md w-full h-64'>
       <h1 className='font-bold text-2xl p-2 lg:p-4'> Resumen del Pedido</h1>
       <h2 className='text-xl font-sans  p-4'>Total del Pedido: ${totalPrice}</h2>
       <Link href="/continuar"><span className='mx-2 p-2 bg-emerald-300 hover:cursor-pointer text-black rounded-md text-lg'>Continuar compra</span></Link>
    </div>
       
  </div>
</div> 
: <h1>Tu carro esta vacio</h1> }
</>   
  )
}

export default Resumen;