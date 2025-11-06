import React from 'react'
import Link from 'next/link';
const Header = () => {
    return (
        <header className="flex justify-between px-3 py-3 bg-rose-600 text-white items-center">
          {/* School Name / Logo */}
          <h3 className="text-xl font-bold">ABC Secondary School</h3>
    
          {/* Navigation */}
          <nav>
            <ul className="flex gap-4">
              <li>
                <Link href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </header>
      );
    
}

export default Header