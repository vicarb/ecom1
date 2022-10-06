import { useContext, useState } from 'react';
import Link from 'next/link';
import { ContactData } from '../../components/ContactData';
import CartContext from '../../context/CartContext';
import React from 'react';
import Swipe from '../../components/Swipe';
import Head from 'next/head';
import Image from 'next/image';

// swiper
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


//dynamic id, add quantity button, multiply by price, push to cart, handeclick function
export const getStaticPaths = async () => {
      const res = await fetch('https://crypton.cl/api/productos');
      const data = await res.json();
      console.log("Data: ", data);
      
      const paths = data.map(producto => {
          return {
              params: { id: producto.id.toString()}
          }
      })
      return {
          paths,
          fallback: 'blocking',
      }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://crypton.cl/api/productos/' + id);
    const data = await res.json()
    const res_image = await fetch('https://crypton.cl/api/productos-images/sorted/'+ id);
    const data_img = await res_image.json();
    console.log("This--->", data_img);

    return {
        props: {
            producto: data,
            producto_img: data_img
        },
        revalidate: 30
    }
}
const SingleNegocioPage = ({ producto, producto_img }) => {
  const { addToCart, handleDecrement, handleIncrement, quantity, setQuantity } = useContext(CartContext)
  const [counter, setCounter] = useState(1);
  const [price, setPrice] = useState(producto.price)
 

  const [show, setShow] = useState(false);

  //agregar to cantidad
  
  function agregarOne(e){
    setShow(true)
    setQuantity(1)
  }
    return(
    <>
    <Head>
        <title>{producto.name} | chillin.cl</title> 
    </Head>
    <section className="text-gray-700 body-font overflow-hidden bg-white">
  <div className="container px-5 pt-12 pb-24 mx-auto">
    

    <div className="lg:w-4/5 mx-auto flex flex-wrap">
    {/* <div style={{width: '300px', height: '300px', position: 'relative'}}>
      <Image layout='fill' alt="ecommerce" className="hover:scale-105 transition-all lg:w-1/2 w-full h-60 object-cover object-center rounded border border-gray-200" src={`https://crypton.cl${producto.image}`} />
      </div> */}
      
      <Swipe producto_img={producto_img}/>
      
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h1 className="text-orange-400 text-3xl mb-1">{ producto.name }</h1>
        <div className="flex mb-4 ">
          <span className="flex items-center">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span className="text-gray-600 ml-3">4 Reviews</span>
            
          </span>
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-2 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-2 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
        <p className="leading-relaxed">{ producto.description }</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
          <div className="flex">
            <span className="mr-3 font-semibold text-2xl">${producto.price}</span>
            
          </div>
          
        </div>
        <button className={`${ show ? 'hidden' : ''} p-3 bg-emerald-300 rounded-lg`} onClick={() => agregarOne()}>Agregar</button>
        <div className={`flex ${ show ? '' : 'hidden'}`}>
        <span className="title-font font-medium text-2xl text-gray-900 mx-1">Q:{ quantity }</span>
        
        <button className={`px-3 mx-1 bg-emerald-100 rounded-lg ${show ? '' : 'hidden'}`} onClick={() => handleIncrement()}>+</button>
        <button className='px-3 bg-red-100 rounded-lg' onClick={() => {handleDecrement()}}>-</button>
          <span className="title-font font-medium text-2xl text-gray-900"> ${ producto.price * quantity }</span>
          <button className={`ml-6 bg-emerald-300 rounded-md font-semibold`} onClick={() => addToCart(producto, quantity) }>Añadir al carrito</button>
          {/* <button className={`bg-yellow-500`} onClick={() => addToCart(producto) }>Añadir al carrito</button> */}
   
      
        </div>
      </div>
      {/* {producto_img.map(img => {return <img key={img.id} alt="ecommerce" className="bg-slate-600 hover:bg-sky-700 hover:scale-105 transition-all p-8 lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={`http://127.0.0.1:8000${img.image}`} />})} */}

      {/* <Swipe producto_img={producto_img}/> */}
      {/* <Cart carr={carr} setCarr={setCarr} /> */}
      {/* <Cart/> */}
      
    </div>
    <ContactData/>
  </div>
  
    
</section>

      </>
    )

}

export default SingleNegocioPage;