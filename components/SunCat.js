import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'


const SunCat = ({sunglasses}) => {
  return (
    <>
    <div>Si lo gano ya estuvo, si lo pierdo ni modo</div>
    {/* {sunglasses.map((sunglass) => {
        return(
            <>
            <h1>{sunglass.name}</h1>
            <h1>{sunglass.description}</h1>
            </>
        )

    })} */}
   <section className="p-12">
   <h1 className="title-font text-4xl font-bold text-gray-700 mb-6 text-center">Lentes Premium</h1>
   <div className="flex flex-column flex-wrap -m-4 h-1/3">
          {sunglasses.filter((sunglass)=> sunglass.name.toLowerCase()).map((sunglass, i) => {return <>
          <motion.div key={sunglass.id} initial='first' animate='last' transition={{duration:0.3, delay: i *0.1}} className="p-2 lg:p-4 w-1/2 md:w-1/3" whileHover={{
            position:'relative',
            zIndex: 1,
            transition: {
              duration: .1
            }
          }} variants={{
            first: {
              opacity:0,
            },
            last: {
              opacity:1,
            }
          }}>
          <div className="h-2/3 flex-1 rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 ">
            
         <Link href="/detail/[id]" as={`/detail/${sunglass.id}`}>
            <img className="lg:h-2/3 md:h-1/3 w-full object-cover object-center scale-95 transition-all duration-400 hover:scale-90 hover:border-2 hover:border-sky-300" src={`http://127.0.0.1:8000${sunglass.image}`} alt="blog"/>
            </Link>
            <div className="h-full lg:p-6">
              <h1 className="title-font text-lg font-semibold text-gray-600 lg:mb-3">{ sunglass.name }</h1>
              <p className=" mb-3">{ sunglass.description }</p>
              <p className=" mb-3">${ sunglass.price }</p>
              <div className="flex items-center flex-wrap hover:scale-105 ">
                <button className="bg-gradient-to-r from-cyan-400 to-blue-400 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg mb-0">Ver más</button>
               
              </div>
            </div>
          </div>
          
        </motion.div>
        </>
          })}
          
            
        </div>
   </section>
    
    </>

  )
}

export default SunCat;