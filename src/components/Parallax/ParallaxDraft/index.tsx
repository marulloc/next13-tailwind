'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './parallax_draft.module.css';
import Image from 'next/image';
import { ParallaxBG } from '@/components/svgs';

const ParallaxDraft = () => {
    const [active, setActive] = useState<string>('btn-1');

    const activeClass = `${styles['header-buttons']} ${styles['active-header-button']}`;
    const basicClass = `${styles['header-buttons']}`;

    const handleBtnClick = (e: any) => setActive(e.target.id);

    const svgRef = useRef<any>(null);

    useEffect(() => {
        const svg = svgRef.current;
        if (!svg) return;

        const handleScroll = () => {
            const sun = svg.querySelector('#parallax_background_svg__sun');
            const grayClouds = svg.querySelector('#parallax_background_svg__gray_clouds');
            const whiteClouds = svg.querySelector('#parallax_background_svg__white_clouds');
            const bird1 = svg.querySelector('#parallax_background_svg__bird1');
            const bird2 = svg.querySelector('#parallax_background_svg__bird2');
            const bird3 = svg.querySelector('#parallax_background_svg__bird3');

            sun.style['transform'] = `translateY(${scrollY * 1.05}px)`;
            grayClouds.style['transform'] = `translateX(${scrollY * 0.125}px)`;
            whiteClouds.style['transform'] = `translateX(${scrollY * -0.125}px)`;
            bird1.style['transform'] = `translateX(${scrollY}px)`;
            bird2.style['transform'] = `translateX(${scrollY * -3.5}px)`;
            bird3.style['transform'] = `translateX(${scrollY * -0.5}px)`;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <main style={{ height: '200vh' }}>
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
                <div ref={svgRef} className={styles['image-box']}>
                    <ParallaxBG />
                </div>
            </div>
        </main>
    );
};

export default ParallaxDraft;
