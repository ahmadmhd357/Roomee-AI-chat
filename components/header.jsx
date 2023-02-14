import Image from "next/image"

function Header() {
  return (
    <header className="bg-slate-500 sticky top-0 py-2 px-5">
      <div className="flex items-center gap-3">
        <Image src='/profile.jpg' alt="profile-pic" width={60} height={60}  className='w-20 h-20 rounded-full object-cover' />
        <h1 className="text-xl font-semibold">AHMAD AL HARIRI</h1>
      </div>
    </header>
  )
}

export default Header