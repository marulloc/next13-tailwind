import React from 'react';
import { ReactNode } from 'react';

type TMoveProps = {
    children: ReactNode;

    direction: 'left' | 'right';
};

const Move: React.FC<TMoveProps> = ({ children, direction }) => {
    return (
        <div
            className={` ${direction === 'left' ? 'animate-wiggle-left' : 'animate-wiggle-right'} `}
        >
            {children}
        </div>
    );
};

export default React.memo(Move);
