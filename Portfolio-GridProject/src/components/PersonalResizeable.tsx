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
    const componentRef = useRef<HTMLDivElement>(null);

    useEffect(()=> {
        const handleMouseMove = (event: MouseEvent) => {
            if(resizing && componentRef.current) {
                const deltaX = event.clientX - componentRef.current.getBoundingClientRect().left;
                const deltaY = event.clientY - componentRef.current.getBoundingClientRect().top;
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
        <div>
            
        </div>
    );
};

export default PersonalResizeable;