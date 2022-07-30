import { Navbar } from './../../components/Navbar';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className='mx-auto grid gap-4 px-4 lg:max-w-screen-lg lg:grid-cols-[600px,1fr,min-content] sm:max-w-screen-md'>
        <div>{children}</div>
        <div className='hidden lg:block'>
          <div className='border border-solid rounded-xl mb-4'>
            <div className='py-4 px-4 bg-white dark:bg-gray-400 dark:bg-opacity-30 rounded-xl shadow-md'>
              <div className='space-y-2'>
                <div className='space-y-0.5'>
                  <div className='text-lg text-black dark:text-white font-semibold mb-2 flex justify-between items-center'>
                    <div className='flex pb-2'>
                      <span>Suzaku</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='border border-solid rounded-xl mb-4'>
            <div className='py-4 px-4 bg-white dark:bg-gray-400 dark:bg-opacity-30 rounded-xl shadow-md'>
              <div className='space-y-2'>
                <div className='space-y-0.5'>
                  <div className='text-lg text-black dark:text-white font-semibold mb-2 flex justify-between items-center'>
                    <div className='flex'>
                      <span className='text-sm text-gray-500/50'>
                        Suggestion for you
                      </span>
                    </div>
                    <span className='text-sm'>See all</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainLayout;
