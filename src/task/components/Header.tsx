
export const Header = () => {
  return (
    <header className=''>
      <nav className='flex justify-between items-center px-4 py-2 bg-slate-100'>
        {/* Nav */}
        <div className='flex items-center'>
          <span>
            <img src="https://placehold.co/50x50?text=Logo" alt="" />
          </span>
          <p className='ml-2 font-bold'>Task App</p>
        </div>

        {/* Logout */}
        <div>
          <span className='cursor-pointer text-red-500
            hover:bg-slate-200 px-2 py-1 rounded-2xl'>
            Logout
          </span>
        </div>
      </nav>
    </header>

  )
}
