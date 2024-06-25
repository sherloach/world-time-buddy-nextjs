import { Draggable } from '@hello-pangea/dnd';

interface TimezoneProps {
  data: {
    id: number;
    content: string;
  };
  index: number;
}

const Timezone = ({ data, index }: TimezoneProps) => {
  return (
    <Draggable draggableId={data.id.toString()} index={index}>
      {(provided) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className='group relative z-[500] clear-both h-[60px] w-[999px] pr-0'
        >
          {/* {data.content} */}
          <div className='absolute h-0'>
            <div className='absolute -top-px left-[-30px] h-[65px] w-[30px]'>
              <a
                className='group-hover:bg-pos-close absolute left-1 top-[15px] h-2 w-[13px] cursor-pointer bg-transparent bg-sprite bg-no-repeat pb-[3px]'
                style={{ backgroundPosition: '-9px -76px' }}
                id='close'
                title='Remove from the list'
              />
              <a
                className='group-hover:bg-pos-home absolute left-1 top-[27px] h-2 w-[13px] cursor-pointer bg-transparent bg-sprite bg-no-repeat pb-[3px]'
                style={{ backgroundPosition: '-9px -101px' }}
                id='home'
                title='Mark as home'
              />
            </div>
          </div>
          <div
            className='relative float-left mr-[3px] mt-[14px] h-[30px] w-[38px] text-center font-bold text-[#AAA]'
            style={{ textShadow: '1px 1px 0 #FFB' }}
          >
            <span>-8.5</span>
          </div>
          <div className='float-left m-0 h-[46px] w-40 cursor-move pt-[14px]'>
            <div className='truncate leading-none'>
              <b className='mr-[2px] text-[14px]'>Moscow</b>
              <small className='rounded-[3px] border border-solid border-[#EAEAEA] bg-[#F2F2F2] p-[2px_2px_1px] align-top text-[9px] text-[#888]'>
                MSK
              </small>
            </div>
            <div className='relative truncate align-middle text-[11px] font-normal text-[#888]'>
              Russia
            </div>
          </div>
          <div className='absolute left-44 h-[46px] w-[90px] cursor-move overflow-hidden whitespace-nowrap pt-[14px] text-left'>
            <div className='w-[90px] text-right text-[14px] font-bold leading-none'>
              15:54
            </div>
            <div className='w-[90px] text-right align-middle text-[11px] text-[#888]'>
              Mon, Jun 24
            </div>
          </div>
        </li>
      )}
    </Draggable>
  );
};

export default Timezone;
