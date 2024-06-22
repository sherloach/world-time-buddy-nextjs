import HoursFormat from '@/components/HourFormat';
import Locations from '@/components/Locations';

export default function Home() {
  return (
    <main className='relative z-10 mx-auto w-[1013px]'>
      <div className='relative z-[50000] flex justify-between pt-8'>
        <h1 className='text-lg'>WorldTimeBuddy</h1>
        <HoursFormat />
      </div>
      <div className='relative'>
        <Locations />
      </div>
    </main>
  );
}
