import OrderArrows from './OrderArrows';
import Search from './Search';

const Toolbar = () => {
  return (
    <div className='flex h-[34px] items-center justify-between bg-[#eee]'>
      <div className='flex'>
        <OrderArrows />
        <Search />
        <div>Inline calendar</div>
      </div>
      <div>Toolbar</div>
    </div>
  );
};

export default Toolbar;
