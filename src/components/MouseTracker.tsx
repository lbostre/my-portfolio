import { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import "./MouseTracker.css"

type Offset = {
    x: number;
    y: number;
}

type MouseTrackerProps = {
    children: ReactNode;
    offset?: Offset
}

export const MouseTracker = ({ children, offset = { x: 0, y: 0 } }: MouseTrackerProps) => {
    const element = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        function handler(e: MouseEvent) {
            if (element.current) {
                const x = e.clientX + offset.x, y = e.clientY + offset.y;
                element.current.style.transform = `translate(${x}px, ${y}px)`;
                element.current.style.visibility = 'visible';
            }
        }

        document.addEventListener('mousemove', handler);
        return () => document.removeEventListener('mousemove', handler);
    }, [offset.x, offset.y]);

    return createPortal(<div className='mouse-tracker' ref={element}>{children}</div>, document.body);
};