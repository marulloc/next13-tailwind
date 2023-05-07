import ParallaxCompoWithJS from '@/components/Parallax/ParallaxCompoWithJS';
import ParallaxCompoWithPerspective from '@/components/Parallax/ParallaxCompoWithPerspective';
import ParallaxDraft from '@/components/Parallax/ParallaxDraft';

/**
 * 시간이 아니라 시각차이로 위치에 따른 시각의 차이를 보여주는 기법을 Parallax라고 한다.
 * 예를 들면, 관찰자가 움직이면 멀리있도록 보이게 만든 요소는 느리게 가까이있도록 보이게 만든 요소는 빠르게 보이게 만든느 것인데
 * 이것을 스크롤 변화에 따라 다르게 만든다.
 * 이 기법은 css요소에 레이어를 나눠서 스크롤 속도를 다르게 만듦으로써 구현 할 수 있다.
 * => parallax Scrolling은 특히 모바일에서는 권장하지 않는 기법으로
 * => 디바이스 너비에 따라 parallax가 동작하지 않도록 반응형으로 만들어야된다.
 * @returns
 */
const Parallax = () => {
    return (
        <main className=" ">
            {/* <h1 className="m-4">Parallax 만들기 연습</h1> */}
            {/* <ParallaxCompoWithJS /> */}

            {/* <ParallaxCompoWithPerspective /> */}
            <ParallaxDraft />
        </main>
    );
};

export default Parallax;
