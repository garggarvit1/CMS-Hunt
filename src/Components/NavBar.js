import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SearchInput from './SearchInput';
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const NavBar = () => {
    return (
        <div className='w-full h-12 flex justify-between items-center px-8 text-white bg-[#222221] '>
            {/* <h1 className='text-4xl font-bold text-[#222221]'>GFG</h1> */}
            <div className='w-50 h-8 flex'>
                <a href='/'>
                <img src='https://media.geeksforgeeks.org/gfg-gg-logo.svg'></img>
                </a>
            </div>
            <ul className='flex items-center z-999'>
                <li className='p-4'>
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm 
                            font-semibold text-white shadow-sm ring-0 hover:text-[#2E8042]">
                                HTML
                                <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
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
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md text-white bg-[#222221] shadow-lg  ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-[#39393C]' : '',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Account settings
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-[#39393C]' : '',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Support
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-[#39393C]' : '',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                License
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <form method="POST" action="#">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    type="submit"
                                                    className={classNames(
                                                        active ? 'bg-[#39393C]' : '',
                                                        'block w-full px-4 py-2 text-left text-sm'
                                                    )}
                                                >
                                                    Sign out
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </form>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </li>
                <li className='p-4'>
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm 
                            font-semibold text-white shadow-sm ring-0 hover:text-[#2E8042]">
                                CSS
                                <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
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
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md text-white bg-[#222221] shadow-lg  ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-[#39393C]' : '',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Account settings
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-[#39393C]' : '',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Support
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-[#39393C]' : '',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                License
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <form method="POST" action="#">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    type="submit"
                                                    className={classNames(
                                                        active ? 'bg-[#39393C]' : '',
                                                        'block w-full px-4 py-2 text-left text-sm'
                                                    )}
                                                >
                                                    Sign out
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </form>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </li>
                <li className='p-4'>
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm 
                            font-semibold text-white shadow-sm ring-0 hover:text-[#2E8042]">
                                JavaScript
                                <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
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
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md text-white bg-[#222221] shadow-lg  ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-[#39393C]' : '',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Account settings
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-[#39393C]' : '',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Support
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-[#39393C]' : '',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                License
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <form method="POST" action="#">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    type="submit"
                                                    className={classNames(
                                                        active ? 'bg-[#39393C]' : '',
                                                        'block w-full px-4 py-2 text-left text-sm'
                                                    )}
                                                >
                                                    Sign out
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </form>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </li>
                <li className='p-4'>
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm 
                            font-semibold text-white shadow-sm ring-0 hover:text-[#2E8042]">
                                Java
                                <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
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
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md text-white bg-[#222221] shadow-lg  ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-[#39393C]' : '',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Account settings
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-[#39393C]' : '',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Support
                                                
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-[#39393C]' : '',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                License
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <form method="POST" action="#">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    type="submit"
                                                    className={classNames(
                                                        active ? 'bg-[#39393C]' : '',
                                                        'block w-full px-4 py-2 text-left text-sm'
                                                    )}
                                                >
                                                    Sign out
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </form>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </li>
            </ul>
            <SearchInput/>
        </div>

    )
}

export default NavBar
