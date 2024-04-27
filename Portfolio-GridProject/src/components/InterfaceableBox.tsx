import React from 'react';
import '../root.css';
import {ResizableBox} from 'react-resizable';
import 'react-resizable/css/styles.css';


function InterfaceableBox() {
  return (
    <ResizableBox className='InterfaceableBox'
      resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}
      height={200}
      width={200}
      minConstraints={[100, 100]}
      maxConstraints={[Infinity, Infinity]}>
        
    </ResizableBox>
  )
}

export default InterfaceableBox;