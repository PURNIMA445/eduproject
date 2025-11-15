import React from 'react'
import Link from 'next/link';
const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
              <h1 className="logo">ABC Secondary School</h1>
              <nav>
                <ul className="nav-list">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about">About</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                  <li><Link href="/login">Login</Link></li>
                </ul>
              </nav>
            </div>
          </header>
      );
    
}

export default Header