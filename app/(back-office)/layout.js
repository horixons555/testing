import React from 'react'
import SideBar from './../../components/back-office/SideBar';
import Navbar from './../../components/back-office/Navbar';

export default function Layout({ children }) {
    return (
        <div className='flex bg-black w-full h-screen'>
            <SideBar />
            <div className='w-full px-5'>
                <Navbar />
                <main className='hide-scroll pr-5 height-full overflow-y-auto text-white'>{children}</main>
            </div>
        </div>
    )
}
