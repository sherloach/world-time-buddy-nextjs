import LocationTimezones from './LocationTimezones';
import Toolbar from './Toolbar/Toolbar';

const Locations = () => {
  return (
    <div className='relative'>
      <div className='mb-[45px] mt-[30px] rounded-[3px] border border-solid border-[#ccc] bg-white p-px shadow-[0_20px_50px_-20px_rgba(0,0,0,0.3)]'>
        <Toolbar />
        <LocationTimezones />
      </div>
    </div>
  );
};

export default Locations;
