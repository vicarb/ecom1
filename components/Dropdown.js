import { Fragment, useContext, useEffect, useRef, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Cart from './Cart'
import CartContext from '../context/CartContext'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown() {
  const { items } = useContext(CartContext) 
  const ref = useRef(null)

  useEffect(()=> {
    var url = window.location;
    console.log("CURR URL--->", url);
  },[])
 

  return (
    <Menu as="div" className="relative inline-block text-left">
 

        <Menu.Button ref={ref} className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          Carro {items.length}
          <svg style={{display:'inline-block'}}xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16"> <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>

  </svg>
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>

        
          <div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items static className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                
    
                
                
                <Menu.Item as={"button"}
                onClick={() => {
                  setTimeout(() => {
                    ref.current?.click();
                  }, 0);
                }}>
                <tspan>
    
                <Cart/>
                </tspan>
            </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
          </div>



    </Menu>
  )
}