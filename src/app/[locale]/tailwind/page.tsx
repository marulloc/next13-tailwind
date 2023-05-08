import Wiggle from '@/components/Animations/Wiggle';
import MoveToRight from '@/components/Animations/MoveToRight';

const UIPage = () => {
    return (
        <div className=" relative h-screen  ">
            <BoxWidth />

            <ColorEx />

            <MoveToRight>
                <button className=" bg-cyan-200 p-1 rounded-lg ">asdasd</button>
            </MoveToRight>

            <div className="flex justify-center  ">
                <Wiggle direction="left">
                    <div className="p-4  rounded-sm shadow-lg bg-cyan-200   ">asdasd</div>
                </Wiggle>
            </div>
            <div className="flex justify-center  ">
                <Wiggle direction="right">
                    <div className="p-4  rounded-sm shadow-lg bg-red-200   ">asdasd</div>
                </Wiggle>
            </div>

            <br />

            <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75">
                    asd
                </span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
        </div>
    );
};

export default UIPage;

/**
 * @description 두번째 박스도 bg-red로 먹힌다. 즉 red가 blue보다 우선순위가 높다는 뜻인데, 같은 수일때 우선운위가 있는 있는 색이 있다는 뜻이다.
 * @see https://tailwindcss.com/docs/customizing-colors
 * @returns
 */
const ColorEx = () => {
    return (
        <div>
            <div className=" h-10 bg-blue-300 bg-red-300 ">1</div>
            <br />
            <div className=" h-10 bg-red-300 bg-blue-300 ">2</div>
            <br />
            <div className=" h-10 bg-orange-300 bg-red-300 ">3</div>
            <br />

            <div className="w-10 h-10 bg-transparent text-cyan-100  ">transparent</div>
            <br />

            <div className=" bg-blue-300  ">
                <div className="w-10 h-10 bg-inherit   ">inherit</div>
            </div>

            <br />

            <div className="h-10 bg-[#1da1f2]">custom</div>
        </div>
    );
};

/**
 * @description w-screen 은 vw
 * @description w-1/2 50%
 * @description w-4 1rem 16px
 * @description w-auto로 할당 해제
 * @see https://tailwindcss.com/docs/box-sizing
 * @see https://tailwindcss.com/docs/width
 * @returns
 */
const BoxWidth = () => {
    return (
        <div className="space-y-4 ">
            <div className=" w-1/2  bg-white shadow rounded"> w-1/2 (50%) </div>
            <div className=" w-1/6 hover:w-1/2 bg-white shadow rounded"> w-hover</div>
            <div className=" w-screen bg-white shadow rounded"> w-screen</div>
            <div className=" w-1/2 hover:w-auto bg-white shadow rounded">
                w-auto
                {/* auto는 width 할당한거 없앨 때 쓰면됨 */}
            </div>
            <div className=" w-5 hover:w-auto bg-white shadow rounded"> w-0.5 (0.125rem)</div>
            <div className=" w-4 hover:w-auto bg-white shadow rounded">w-4 (1rem - 16px)</div>
        </div>
    );
};
