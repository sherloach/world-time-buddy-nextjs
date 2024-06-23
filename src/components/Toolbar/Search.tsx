const Search = () => {
  return (
    <div className='flex rounded-[3px] bg-white'>
      <div
        className='ml-[3px] mt-[7px] h-[18px] w-[18px] cursor-text bg-sprite bg-no-repeat'
        style={{ backgroundPosition: '-45px -9px' }}
      />
      <input
        type='text'
        autoComplete='off'
        name='location'
        placeholder='Place or timezone'
        maxLength={50}
        className='w-[209px] rounded-[3px] border-none p-[4px_5px_4px_4px] text-inherit shadow-none outline-none'
      />
    </div>
  );
};

export default Search;
