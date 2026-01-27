'use client'
import Link from 'next/link';
import React from 'react';


const Navbar = () => {
    const navLinks = [
    { name: 'Home', path: '/'},
    { name: 'Updates', path: '/updates'},
    { name: 'Minutes', path: '/minutes'},
    { name: 'Calendar', path: '/calendar'},
    { name: 'Newsletter', path: '/newsletter'},
    { name: 'Dues', path: '/dues'},
    { name: 'CCRs & Bylaws', path: '/ccr-bylaws'},
    { name: 'Board', path: '/board'},
    { name: 'Contact', path: '/contact'}
    ]
    const [open, setOpen] = React.useState(false)

    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-black relative transition-all">
            <Link href="/" className="text-white text-lg font-bold">
            Belmontpark HOA
            </Link>
            {/* Desktop View */}
            <div className="hidden sm:flex items-center gap-8">
                {navLinks.map((link, i) => (
                    <Link key={i} href={link.path} className="text-gray-300 hover:text-white">
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* Mobile Hamburger */}
            <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                {/* Menu Icon SVG */}
                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="1.5" rx=".75" fill="#426287" />
                    <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                    <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                </svg>
            </button>
            {/* Mobile Menu */}
            <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white dark:bg-black shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                {navLinks.map((link, i) => (
                    <Link key={i} href={link.path} className="block" onClick={() => setOpen(false)}>
                        {link.name}
                    </Link>
                ))}
                <button className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm">
                    Login
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
