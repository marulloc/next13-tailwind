'use client';

import styles from './parallax.module.css';
/** CSS Perspective 시각, 관점, 원근감
 * 요소의 z = 0 평면과 사용자 사이의 거리를 정의할 수 있는 속성이다.
 * (화면과 우리의 거리라고 보면 된다. 원근감을 정의하는 속성)
 * 보통 transform효과를 주고자하는 요소의 부모에 적용해서 쓰는데
 * 나는 배경은 뒤로 밀고 자식요소들을 앞으로 이동시킬거다
 * Z 평면에 대한 translate를 이용할 것임
 */
const ParallaxCompoWithPerspective = () => {
    return (
        <div id="parallax-wrapper" className={styles['parallax-wrapper']}>
            <div id="parallax-A" className={`${styles['parallax']} ${styles['parallax-A']}`}>
                A
            </div>
            <div id="parallax-B" className={`${styles['parallax']} ${styles['parallax-B']}`}>
                B
            </div>
            <div id="parallax-C" className={`${styles['parallax']} ${styles['parallax-C']}`}>
                C
            </div>
        </div>
    );
};

export default ParallaxCompoWithPerspective;
