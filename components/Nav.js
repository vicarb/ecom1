import { Menu } from '@headlessui/react'
import React from 'react'
import Dropdown from './Dropdown'
import { Transition,  } from '@headlessui/react'
import { Fragment } from 'react'
import Cart from './Cart'
import { useContext } from 'react'
import CartContext from '../context/CartContext'
import Link from 'next/link'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }


export const Nav = () => {
  const {items, clicked, setClicked } = useContext(CartContext)  
  return (
    <div className='bg-black w-full h-20 flex justify-between items-center px-8 text-white sticky top-0'>
        <h1 className='text-2xl'>Yes!</h1>
        <ul className='flex items-center'>
            <li className='p-4' ><Link href='/'>
                Inicio
                </Link>
                </li>
            <li className='p-4'>
                <Menu as='div' className='relative inline-block text-left'>
                    <Menu.Button>
                        Servicios
                    </Menu.Button>
                    <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        // leave="transition ease-in duration-75"
        // leaveFrom="transform opacity-100 scale-100"
        // leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items static unmount className='origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <div className='py-1'>
                
        {/* <Menu.Item>
        {({ active }) => (
                  <a
                    href='#'
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full text-left px-4 py-2 text-sm'
                    )}
                  >
                    Para Negocios
                  </a>
                )}
        </Menu.Item>
        <Menu.Item>
        {({ active }) => (
                  <a
                    href='#'
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full text-left px-4 py-2 text-sm'
                    )}
                  >
                    Para Instituciones
                  </a>
                )}
        </Menu.Item> */}
        <Menu.Item>
            <tspan>

            <Cart/>
            </tspan>
        </Menu.Item>
            </div>
        </Menu.Items>

      </Transition>
                    </Menu>
                </li>
            <li className='p-4'>Banking</li>
            <li className='p-4'>Contacto</li>
            <li className='p-4'><Dropdown/></li>
            
        </ul>
    </div>
  )
}
