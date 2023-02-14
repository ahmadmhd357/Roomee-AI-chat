import Image from "next/image";
import LoginBtn from "./loginBtn";

function WelcomePage() {
  return (
    <div className="bg-slate-500 h-screen">
      <div className="flex flex-col gap-8 justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <Image src="/logo.png" alt="logo" width={200} height={200} />
          <h1 className="text-white font-extrabold text-2xl md:text-5xl">
            Welcome to Romee Chat
          </h1>
        </div>
        <div className="flex flex-col gap-6 justify-center items-center">
          <h2 className="text-red-400 font-bold text-xl md:text-3xl">
            experience the next generation of chat apps
          </h2>
          <LoginBtn />
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
