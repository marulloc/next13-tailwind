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

            const grayClouds = svg.querySelector('#parallax_background_svg__gray-clouds');
            const whiteClouds = svg.querySelector('#parallax_background_svg__white-clouds');

            const bird1 = svg.querySelector('#parallax_background_svg__bird1');
            const bird2 = svg.querySelector('#parallax_background_svg__bird2');
            const bird3 = svg.querySelector('#parallax_background_svg__bird3');

            const mountain0 = svg.querySelector('#parallax_background_svg__mountain0');
            const mountain1 = svg.querySelector('#parallax_background_svg__mountain1');
            const mountain2 = svg.querySelector('#parallax_background_svg__mountain2');
            const mountain3 = svg.querySelector('#parallax_background_svg__mountain3');
            const mountain4 = svg.querySelector('#parallax_background_svg__mountain4');
            const mountain5 = svg.querySelector('#parallax_background_svg__mountain5');
            const mountain6 = svg.querySelector('#parallax_background_svg__mountain6');
            const mountain7 = svg.querySelector('#parallax_background_svg__mountain7');

            sun.style['transform'] = `translateY(${scrollY * 1.05}px)`;

            grayClouds.style['transform'] = `translateX(${scrollY * 0.125}px)`;
            whiteClouds.style['transform'] = `translateX(${scrollY * -0.125}px)`;

            bird1.style['transform'] = `translateX(${scrollY}px)`;
            bird2.style['transform'] = `translateX(${scrollY * -3.5}px)`;
            bird3.style['transform'] = `translateX(${scrollY * -0.5}px)`;

            mountain0.style['transform'] = `translateY(${scrollY * 0.95}px)`;
            mountain1.style['transform'] = `translateY(${scrollY * 0.93}px)`;
            mountain2.style['transform'] = `translateY(${scrollY * 0.9}px)`;
            mountain3.style['transform'] = `translateY(${scrollY * 0.8}px)`;
            mountain4.style['transform'] = `translateY(${scrollY * 0.7}px)`;
            mountain5.style['transform'] = `translateY(${scrollY * 0.6}px)`;
            mountain6.style['transform'] = `translateY(${scrollY * 0.3}px)`;
            mountain7.style['transform'] = `translateY(${scrollY * 0.1}px)`;
            // 스크롤 속도보다 작을수록
            // 요소내에서 지나가는 속도가 빨라진다. (스크롤은 계속 내려가는데, 요소는 스크롤 속도를 못쫒아가서 빠르게 느린 요소를 덮게된다.)
            // 그래서 가깝게 배치하는 애들일수록 속도를 낮춰야 한다.
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <main style={{ height: '200vh', backgroundColor: '#00110C' }}>
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
