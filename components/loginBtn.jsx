"use client";
import { signIn } from "next-auth/react";
function LoginBtn() {
  return (
    <button
      onClick={() => signIn("google")}
      type="button"
      className="text-white transition-all duration-300 ease-in hover:scale-110 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    >
      Login with one Click
    </button>
  );
}

export default LoginBtn;
