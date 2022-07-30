export const PostCard = (props) => {
  return (
    <>
      <div className='border border-solid rounded-xl mb-4'>
        <div className='py-4 px-4 bg-white dark:bg-gray-400 dark:bg-opacity-30 rounded-xl shadow-md'>
          <div className='space-y-2'>
            <div className='space-y-0.5'>
              <div className='text-lg text-black dark:text-white font-semibold mb-2 border-b-2 flex justify-between items-center'>
                <div className='flex pb-2'>
                  <img src={props.avatar} width={30} height={30} />
                  &nbsp;
                  <span>{props.username}</span>
                </div>
              </div>
              <img src={props.image} />
              <div>
                <span>{props.username}</span> &#x2022;{' '}
                <span className='text-gray-500 dark:text-gray-300 font-medium pb-3'>
                  {props.caption}
                </span>
              </div>
            </div>
            <button className='px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 dark:border-purple-800 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 ring-purple-600 ring-opacity-40'>
              Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
