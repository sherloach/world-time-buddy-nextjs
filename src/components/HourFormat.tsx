const HourFormat = () => {
  return (
    <div className='mt-[3px] h-[24px] rounded-[3px] border border-solid border-[#444]'>
      <a className='float-left m-0 h-[22px] w-6 cursor-default bg-[#444] p-0 text-center text-white'>
        <div className='mt-[2px] text-[9px] font-normal leading-[8px]'>
          am <br /> pm
        </div>
      </a>
      <a className='float-left m-0 h-[22px] w-6 cursor-pointer border-l border-l-[#444] p-0 text-center hover:bg-white'>
        <div className='mt-[6px] text-[120%] leading-[10px]'>24</div>
      </a>
      <a className='float-left m-0 h-[22px] w-6 cursor-pointer border-l border-l-[#444] p-0 text-center hover:bg-white'>
        <div className='mt-[6px] text-[11px] leading-[10px]'>MX</div>
      </a>
    </div>
  );
};
export default HourFormat;
