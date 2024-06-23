import Calendar from './Calendar';
import OrderArrows from './OrderArrows';
import Search from './Search';

const Toolbar = () => {
  return (
    <div className='flex h-[34px] items-center justify-between border-b border-solid border-b-[#ccc] bg-[#eee]'>
      <div className='flex'>
        <OrderArrows />
        <Search />
        <Calendar />
      </div>
      <div>Toolbar</div>
    </div>
  );
};

export default Toolbar;
