import React from "react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">ABC Secondary School</h1>

        <nav>
          <ul className="nav-list flex gap-6 items-center">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>

            {/* If user is NOT logged in → show Login */}
            <SignedOut>
              <li>
                <SignInButton>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
                    Login
                  </button>
                </SignInButton>
              </li>
            </SignedOut>

            {/* If user IS logged in → show Logout OR UserButton */}
            <SignedIn>
              <li>
                {/* OPTION 1: Logout button */}
                <SignOutButton>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-md">
                    Logout
                  </button>
                </SignOutButton>
              </li>

              {/* OPTION 2: User profile button (Clerk default) */}
              {/* <li><UserButton afterSignOutUrl="/" /></li> */}
            </SignedIn>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
