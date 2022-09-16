import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

const Exito = () => {
    const [ dato, setDato ] = useState([])
    const [ datov1, setDatov1 ] = useState([])
    const [ ur, setUr ] = useState()
    const [ dat, setDat] = useState()

    // buy order, success message
    var respo;
    let gourl = 'https://crypton.cl/api/tokens';
    let buy_url = 'https://crypton.cl/api/purchasedata'; // como obtengo la id del previo --> fetch and get the buy order which is equal to the one generated in api tokens
    let token_ws;
    var keyvar;
    const arr = [];

    useEffect(() => {
        //gets the token ws from the current url
        var url = window.location;
        token_ws = new URLSearchParams(url.search).get('token_ws');

        console.log("token ws did i get it? im proud of you <3 love you: ", token_ws);
        //api token
        axios.all[
          axios.post(gourl, {token_ws})
          .then((resp) => {
            keyvar = resp.data
            setDato(keyvar)
            console.log("KEYVAR--->", keyvar); // which item in purchase has the same buy order?
          }).then(
          axios.get(buy_url)
          .then((resp) => {
            console.log("data token ws--->", resp);
            respo = resp.data
            setDatov1(respo)

        })
        )
        .catch((err) => {
        console.log(err);
        })
        ]
        
        console.log("Hola",dato);

    }, [])

    

    // useEffect(() => {
    //   axios.all([
    //     axios.get(buy_url)
    //     .then((resp) => {
    //       console.log("data token ws--->", resp);
    //       respo = resp.data
    //       setDatov1(respo)

    //     })
    //     .catch((err) => {
    //       console.log("Err: ",err.response);
    //     })
    //   ])    

    // },[])
    // console.log("dato-- outside", dato);
    // console.log("datoV1-- outside", datov1);


    
    console.log("-..ur-.-",ur);
    
    useEffect(() => {
      async function myf(){
        datov1.map(item => {
          if(dato.buy_order===item.buy_order){
            let myurl = buy_url + '/' + item.id
            console.log("lsllsls", myurl);
            arr.push(myurl)
            axios.all[
              axios.put(myurl, {'token_ws':dato.token_ws, 'status':dato.status}).then((res)=> console.log("Finish?",res))
              .then(axios.get(myurl).then((resp)=> {
                console.log("la calle es de nosotros y las mujeres tambien", resp.data)
                let goya = resp.data
                // setIt(resp.data.items)
                console.log("goyaa", goya);
                console.log("goyaass", goya.items);
                setDat(goya.items)
                console.log("asdsad",dat);



                
  
              }))
  
            ]
            // if(!myarr.includes(myurl)){
            //   myarr.push(myurl)
              
            // }
            
          }
  
  
  
        });
        
        console.log("PUEDE SERR", datov1);
        console.log("PUEDE SERDATOR", dato);
        console.log("my arr scorer", arr);
  
      }

    

      myf();
      console.log("daatt", dat);
      let uri = arr[0]
      if(uri !== undefined){
        axios.get(uri).then((resp) => {
          console.log("adsd",resp.data)
          setDat(resp.data)
        
        })
      }
      // axios.get(arr[0]).then((resp) => {
      //   console.log("adsd",resp.data)
      //   setDat(resp.data)
      
      // })
      // console.log("typeof dat", typeof(dat));


    },[dato])
   


 

  return (
    <div>
      exito
      {dat && 
    <div className='py-40 bg-emerald-300'>
  <h1 className='font-bold '>{dat.name}, Tu compra fue exitosa!</h1>
  <h1 className='font-bold '>EL total de tu compra fue ${dat.total_price}</h1>
  <h1 className='font-bold '>Compraste:{dat.mail}</h1>
  <h1 className='font-bold '>Nº de compra: #{dat.buy_order}</h1>
  <h1 className='font-bold '>Compraste:{dat.items}</h1>
  <h2 className='font-bold '>Te lo enviaremos a:{dat.direccion}</h2>x

</div>



}
      <h1>

        {dato.status}
      </h1>


#{dato.buy_order}
{/* {it && it.items.map
} */}


      </div>
      
  )
}

export default Exito;