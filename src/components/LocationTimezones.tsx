'use client';

import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import { useState } from 'react';

import Timezone from './Timezone';

interface Item {
  id: number;
  content: string;
}

const LocationTimezones = () => {
  const [items, setItems] = useState([
    { id: 0, content: 'item 1' },
    { id: 1, content: 'item 2' },
  ]);

  const reorder = (
    list: Item[],
    startIndex: number,
    endIndex: number
  ): Item[] => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result: any) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    // if dropped in the same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    setItems(reorder(items, source.index, destination.index));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='lists' type='list' direction='vertical'>
        {(provided) => (
          <ol {...provided.droppableProps} ref={provided.innerRef} className=''>
            {items.map((list, index) => (
              <Timezone key={list.id} data={list} index={index} />
            ))}
            {provided.placeholder}
          </ol>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default LocationTimezones;
