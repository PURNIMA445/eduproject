"use client";

import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-55">
      <div>
        <h1 className="text-2xl font-bold mb-4 text-center text-black">Login</h1>
        <SignIn path="/login" routing="path" />
      </div>
    </div>
  );
}
