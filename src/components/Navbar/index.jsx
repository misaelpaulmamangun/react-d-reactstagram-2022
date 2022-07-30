export const Navbar = () => {
  return (
    <>
      <nav className='shadow-md mb-4 bg-light-100'>
        <div className='lg:max-w-screen-lg sm:max-w-screen-md px-4 mx-auto px4 flex justify-between py-3 items-center'>
          <div>
            <span>
              <a href='/' className='text-xl'>
                Reactstagram
              </a>
            </span>
          </div>
          <div>
            <form className='border border-solid py-1 px-2 rounded-md flex'>
              <input
                className='outline-none border-none'
                type='text'
                placeholder='Search'
              />
            </form>
          </div>
          <div className='hidden md:block'>
            <ul className='flex gap-3'>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/explore'>Explore</a>
              </li>
              <li>
                <a href='/user'>User</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
