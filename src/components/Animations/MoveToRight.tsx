import { ReactNode } from 'react';

import styles from './animation.module.css';

const MoveToRight: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className={styles['my-transform']}>
            <div className={styles['move-right']}>{children}</div>
        </div>
    );
};

export default MoveToRight;
