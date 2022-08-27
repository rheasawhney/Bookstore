
import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, ShoppingCartIcon, XIcon } from '@heroicons/react/outline'
import { Logo } from '../../atoms/logo'
import Link from 'next/link'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/router'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const navList = [
    {
        id:1,
        title:"Home",
        route:"/"
    },
    {
        id:2,
        title:"About",
        route:"/about"
    },
    {
        id:3,
        title:"Categories",
        route:"/categories"
    },
    {
        id:4,
        title:"Orders",
        route:"/orders"
    },
    {
        id:5,
        title:"Contact",
        route:"/contact"
    },

]

export default function Navbar() {

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [cookies, setCookie] = useCookies(['isLoggedIn']);

  const router = useRouter();

  useEffect(() => {
    if(cookies.isLoggedIn==='true'){
        setLoggedIn(true)
    }else{
        setLoggedIn(false)
    }
  },[cookies])

  return (
    <div className='pt-4 border-b-2 bottom-2'>
        <Disclosure as="nav" className="bg-white shadow">
        {({ open }) => (
            <>
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                <div className="flex justify-between lg:justify-around h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Logo/>
                    </div>
                    <div className="flex px-2 lg:px-0">
                        <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                            {isLoggedIn ? <>
                            {navList.map(nav=> {
                                return(
                                <a key={nav.route} href={nav.route} className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                                    {nav.title}
                                </a>
                                )
                            })}
                            </>
                            :
                            <>
                             {navList.filter((nav)=> nav.id != 4).map(nav=> {
                                return(
                                <a key={nav.route} href={nav.route} className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                                    {nav.title}
                                </a>
                                )
                            })}</>
                            }
                        </div>
                    </div>
                    <div className="flex items-center lg:hidden">
                        {/* menu button */}
                        <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400
                         hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset 
                         focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                        )}
                        </Disclosure.Button>
                    </div>
                    <div className="hidden lg:ml-4 lg:flex lg:items-center">
                        <button
                        type="button"
                        className="flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none
                         focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                        <span className="sr-only">View notifications</span>
                        <Link href={"/cart"}>
                            <p className='flex'>
                                <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                                {/* <p className='text-red-500 pl-2'>{order?.cart?.books?.length}</p> */}
                            </p>
                        </Link>
                     
                        </button>

                        {/* Profile dropdown */}
                        {isLoggedIn ?
                        <Menu as="div" className="ml-4 relative flex-shrink-0">
                        <div>
                            <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none 
                            focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span className="sr-only">Open user menu</span>
                            <img
                                className="h-8 w-8 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                                {({ active }) => (
                                <Link href="/profile">
                                <a
                                    href="#"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                    
                                >
                                    Your Profile
                                </a>
                                </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                >
                                    Settings
                                </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                <a
                                    onClick={()=>{
                                        setCookie('isLoggedIn',false)
                                        router.push("/login")
                                    }}
                                    href="#"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                >
                                    Sign out
                                </a>
                                )}
                            </Menu.Item>
                            </Menu.Items>
                        </Transition>
                        </Menu>
                        :<Link href="/login"><button className='bg-violet-700 rounded-lg text-white px-2 ml-4 py-1'>Login</button></Link> 
                        }
                    </div>
                </div>
            </div>

            <Disclosure.Panel className="lg:hidden">
                <div className="pt-2 pb-3 space-y-1">
                        
                {navList.map(nav=> {
                            return(
                            <Disclosure.Button
                                key={nav.route}
                                as="a"
                                href={nav.route}
                                className=" text-gray-400 block pl-3 pr-4 py-2 text-base font-medium"
                            >
                                {nav.title}
                            </Disclosure.Button>
                            )
                        })}                   
                </div>
                <div className="pt-4 pb-3 ">
                <div className="flex items-center px-4">
                    <div className="flex-shrink-0">
                    <img
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                    </div>
                    <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">Tom Cook</div>
                    <div className="text-sm font-medium text-gray-500">tom@example.com</div>
                    </div>
                    <button
                    type="button"
                    className="ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                    <span className="sr-only">View notifications</span>
                    <Link href="/cart" passHref>
                    <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                   
                    </Link>
               
                    </button>
                </div>
                <div className="mt-3 space-y-1">
                    <Disclosure.Button
                    as="a"
                    href="#"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                    >
                    Your Profile
                    </Disclosure.Button>
                    <Disclosure.Button
                    as="a"
                    href="#"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                    >
                    Settings
                    </Disclosure.Button>
                    <Disclosure.Button
                    as="a"
                    href="#"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                    >
                    Sign out
                    </Disclosure.Button>
                </div>
                </div>
            </Disclosure.Panel>
            </>
        )}
        </Disclosure>
    </div>
  )
}



