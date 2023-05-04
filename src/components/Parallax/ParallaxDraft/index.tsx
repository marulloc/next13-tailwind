'use client';
import { useState } from 'react';
import styles from './parallax_draft.module.css';
import Image from 'next/image';

const ParallaxDraft = () => {
    const [active, setActive] = useState<string>('btn-1');

    const activeClass = `${styles['header-buttons']} ${styles['active-header-button']}`;
    const basicClass = `${styles['header-buttons']}`;

    const handleBtnClick = (e: any) => setActive(e.target.id);

    return (
        <>
            <header className={styles['header']}>
                <a
                    id="btn-1"
                    className={active === 'btn-1' ? activeClass : basicClass}
                    onClick={handleBtnClick}
                >
                    THE MOUNTAIN
                </a>

                <div className={styles['header-right-buttons']}>
                    <a
                        id="btn-2"
                        className={active === 'btn-2' ? activeClass : basicClass}
                        onClick={handleBtnClick}
                    >
                        MOUNTAINS
                    </a>
                    <a
                        id="btn-3"
                        className={active === 'btn-3' ? activeClass : basicClass}
                        onClick={handleBtnClick}
                    >
                        AMAZING NEWS
                    </a>
                    <a
                        id="btn-4"
                        className={active === 'btn-4' ? activeClass : basicClass}
                        onClick={handleBtnClick}
                    >
                        BREAKING NEWS
                    </a>
                </div>
            </header>

            <div className={styles['image-wrapper']}>
                {/* <Image fill src={'/parallax.svg'} alt="" /> */}
            </div>

            <svg></svg>
        </>
    );
};

export default ParallaxDraft;
