import React, { useState, useRef, useEffect } from 'react';

interface ResizeableComponentProps {
    children: React.ReactNode;
    initialWidth?: string;
    initialHeight?: string;
    style?: React.CSSProperties;
}

const PersonalResizeable:React.FC<ResizeableComponentProps> = ({
        children,
        initialWidth = '200px', 
        initialHeight = '200px', 
        style={}
    }) => {

    const [width, setWidth] = useState(initialWidth);
    const [height, setHeight] = useState(initialHeight);
    const [resizing, setResizing] = useState(false);
    const compref = useRef<HTMLDivElement>(null);

    useEffect(()=> {
        const handleMouseMove = (event: MouseEvent) => {
            if(resizing && compref.current) {
                const deltaX = event.clientX - compref.current.getBoundingClientRect().left;
                const deltaY = event.clientY - compref.current.getBoundingClientRect().top;
                setWidth(`${deltaX}px`);
                setHeight(`${deltaY}px`);
            }
        };

        const handleMouseUp = () => {
            setResizing(false);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
        }, [resizing]);

        const handleMouseDown = () => {
            setResizing(true);
        }

    return (
        <div 
         ref={compref}
         style={{
            width,
            height,
            resize: 'both',
            overflow: 'auto',
            ...style,
         }}
         onMouseDown={handleMouseDown}
        >
            {children}
        </div>
    );
};

export default PersonalResizeable;