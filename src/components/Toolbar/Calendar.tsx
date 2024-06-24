const Calendar = () => {
  return (
    <div className='ml-10 flex'>
      <div
        className='h-[26px] w-7 cursor-pointer rounded-[3px] border border-solid border-transparent bg-sprite bg-no-repeat p-[5px_3px] hover:border-primary'
        style={{ backgroundPosition: '-4px -168px' }}
      />
      <div className='mt-[5px] h-full'>
        <span className='cursor-pointer p-[5px_8px_9px_8px] text-[#D77576]'>
          22
        </span>
        <span className='cursor-pointer rounded-t-[3px] border border-solid border-x-[#ccc] border-b-white border-t-[#ccc] bg-white p-[5px_8px_9px_8px] text-[#D77576]'>
          <span>June 23</span>
          <a className='ml-1 opacity-60'>
            <span
              className='inline-block h-3 w-3 overflow-hidden border border-solid border-transparent bg-transparent bg-sprite bg-no-repeat'
              style={{ backgroundPosition: '-47px -102px' }}
            />
          </a>
        </span>
        <span className='cursor-pointer p-[5px_8px_9px_8px]'>24</span>
        <span className='cursor-pointer p-[5px_8px_9px_8px]'>25</span>
        <span className='cursor-pointer p-[5px_8px_9px_8px]'>26</span>
        <span className='cursor-pointer p-[5px_8px_9px_8px]'>27</span>
        <span className='cursor-pointer p-[5px_8px_9px_8px]'>28</span>
      </div>
    </div>
  );
};

export default Calendar;
