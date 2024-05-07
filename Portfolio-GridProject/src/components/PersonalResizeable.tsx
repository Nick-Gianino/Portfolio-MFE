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

    return (
        <div>
            
        </div>
    );
};

export default PersonalResizeable;