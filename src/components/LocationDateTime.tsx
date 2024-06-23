import Timezone from './Timezone';

interface LocationDateTimeProps {}

const LocationDateTime: React.FC<LocationDateTimeProps> = () => {
  return (
    <div className='flex gap-2 text-white'>
      <div>LocationDateTime</div>
      {/* Timezone */}
      <Timezone />
    </div>
  );
};

export default LocationDateTime;
