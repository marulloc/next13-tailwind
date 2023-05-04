'use client';

import { useEffect, useRef } from 'react';

const ParallaxCompoWithJS = () => {
    const div_1 = useRef<any>();
    const div_2 = useRef<any>();

    const handleScroll = (e: any) => {
        div_1.current.style['transform'] = `translateY(${scrollY * 1.5}px)`;
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section style={{ height: '200vh' }}>
            <div ref={div_1} className="h-40 bg-red-400" />
            <div ref={div_2} className="h-40 bg-blue-400" />
        </section>
    );
};

export default ParallaxCompoWithJS;
