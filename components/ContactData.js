import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'

export const ContactData = () => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [description, setDescription] = useState('');
  const [isPending, setIsPending] = useState(false);

  
  //El state de una variable es alimentado por e.target.value(cada input introducido sera tomado como state actual)
  const handleSubmit = (e) => {
      e.preventDefault()
      
      const datos = {name, mail, description};
      console.log(datos)
      setIsPending(true)
      axios
        .post('https://www.chillin.cl/api/contact', datos)
        .then((resp) => {
        console.log(resp);
        setIsPending(false)
        console.log(isPending)
        
        })
        .catch((err) => {
        console.log(err);
        });
        console.log("added!")
       setName('')
       setMail('')
       setDescription('')
  }
  return (
    <>
    <motion.div className="container" initial='first' animate='last' variants={{
      first: {
        opacity:0
      },
      last: {
        opacity:1,
        transition: {
          duration:1
        }
      }
    }}>
    
    <h1 className="text-4xl text-gray-800 text-center font-bold mt-6 mb-10">Contacto</h1>
    <div className="flex w-2/3 pb-10 pt-5 mx-auto rounded-lg justify-center bg-gray-500 p-12 mb-12">
        
    <form onSubmit={handleSubmit}>
    <div className="mb-6">
        <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">Nombre</label>
        <input type="name" value={name} onChange={(e) => setName(e.target.value)} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
    </div>
    <div className="mb-6">
        <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">Email</label>
        <input type="email" value={mail} onChange={(e) => setMail(e.target.value)} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required/>
    </div>
    <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Descripcion</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
    </div>
    
    { !isPending && <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button> }
    { isPending && <button disabled type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviando...</button> }
    
    </form>
    </div>
    </motion.div>
    </>
  )
}
