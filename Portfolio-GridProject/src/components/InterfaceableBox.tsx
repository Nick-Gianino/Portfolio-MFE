import React from 'react';
import '../root.css';
import {ResizableBox} from 'react-resizable';
import 'react-resizable/css/styles.css';
import {useDrag} from "react-dnd";


const ItemTypes ={
  BOX: 'box',
}

function InterfaceableBox() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} style ={{opacity: isDragging ? 0.5 : 1}}>
      <ResizableBox className='InterfaceableBox'
        resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}
        height={200}
        width={200}
        minConstraints={[100, 100]}
        maxConstraints={[Infinity, Infinity]}>
          
      </ResizableBox>
    </div>
  )
}

export default InterfaceableBox;