// import React from 'react'
// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import SunCat from '../components/SunCat';

// export default function Tes({sunglasses}) {
//   const arr = [];
//   const [adata, setAdata] = useState()
//   const [dat, setDat] = useState()
//   const token = 'exNBfIzp.UzAFxxxrlSR1ZIshqVLKpCFHVbAdTSW7I5KFXspahMZjZTRzPoYWBJzi'
//   const token1 = 'supersecret'
//   console.log("got it",sunglasses);

//   // let xd = item.slice(17,30)
//   // let xd1 = item.slice(292, 296)

//   axios.defaults.headers.common = {
//     "X-API-Key": token1,
    
//   };
//   useEffect( () =>{
//      axios.get('http://127.0.0.1:8000/api/purchasedata').then((resp) => {
//       console.log("this is it!!!.---->", resp)
//       setAdata(resp.data)
//     })

//   },[])
//   useEffect( () =>{
    

//     axios.get('https://crypton.cl/api/productos').then((resp) => {
//      console.log("this is it!!!.---->", resp)
//      setAdata(resp.data)
//    })

//  },[])
//   console.log("State Set-->", adata);

//   return (
//     <>
//       <SunCat sunglasses={sunglasses}/>
//     </>

//   )
// }

// export async function getStaticProps() {
//   const response = await fetch('http://127.0.0.1:8000/api/sunglasses')
//   const data = await response.json()
//   console.log("Data from ServerSide props", response);
//   return {
//     props: {
//       sunglasses: data
//     }
//   }
// }

