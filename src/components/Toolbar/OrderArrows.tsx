const OrderArrows = () => {
  return (
    <span className='mt-[5px] w-[41px] cursor-default text-center'>
      <a
        className='inline-block h-[11px] w-[13px] cursor-pointer border border-solid border-transparent bg-transparent bg-sprite bg-no-repeat opacity-60 hover:rounded-sm hover:border-primary hover:bg-[#f6f6f6] hover:opacity-100'
        style={{ backgroundPosition: '-11px -47px' }}
      ></a>
      <a
        className='inline-block h-[11px] w-[13px] cursor-pointer border border-solid border-transparent bg-transparent bg-sprite bg-no-repeat opacity-60 hover:rounded-sm hover:border-primary hover:bg-[#f6f6f6] hover:opacity-100'
        style={{ backgroundPosition: '-21px -47px' }}
      ></a>
    </span>
  );
};

export default OrderArrows;
