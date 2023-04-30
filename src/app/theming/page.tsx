import Image from 'next/image';
import React from 'react';

/**
 * @see https://www.youtube.com/watch?v=MAtaT8BZEAo
 * @returns
 */
const Theming = () => {
    return (
        <main className="space-y-6 p-5 h-screen ">
            <article className="relative bg-red-700 max-w-4xl mx-auto overflow-hidden sm:rounded-2xl">
                <div className="absolute inset-0 h-full w-full object-cover opacity-30 ">
                    <Image src="/next.svg" alt="next image" fill />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-red-700 via-red-700 to-transparent opacity-90"></div>
                <div className="relative max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8 ">
                    <h2 className=" text-3xl font-extrabold text-white sm:text-4xl">
                        <span className="block ">동일한 컴포넌트</span>
                        <span className="block ">그저 빨간색 베이스</span>
                    </h2>
                    <div className="relative mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center ">
                        <div className="spac-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5  ">
                            <button className="w-full  text-red-700 bg-white  hover:bg-opacity-70 flex items-center justify-center px-4  py-3 border border-transparent text-base font-medium rounded-md shadow-lg sm:px-8  ">
                                Contrast Button
                            </button>
                            <button className="w-full  bg-red-700 text-white hover:bg-red-500 flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-lg  sm:px-8  ">
                                Primary Button
                            </button>
                        </div>
                    </div>
                </div>
            </article>
            <article className="relative bg-blue-700 max-w-4xl mx-auto overflow-hidden sm:rounded-2xl ">
                <div className="absolute inset-0 h-full w-full object-cover opacity-30 ">
                    <Image src="/next.svg" alt="next image" fill />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-700 to-transparent opacity-90"></div>
                <div className="relative max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8 ">
                    <h2 className=" text-3xl font-extrabold text-white sm:text-4xl">
                        <span className="block ">동일한 컴포넌트</span>
                        <span className="block ">그저 파란색 베이스</span>
                    </h2>
                    <div className="relative mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center ">
                        <div className="spac-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5  ">
                            <button className="w-full  text-blue-700 bg-white hover:bg-blue-500 flex items-center justify-center px-4  py-3 border border-transparent text-base font-medium rounded-md shadow-lg sm:px-8  ">
                                Contrast Button
                            </button>
                            <button className="w-full  bg-blue-700 text-white  hover:bg-opacity-70 flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-lg  sm:px-8  ">
                                Primary Button
                            </button>
                        </div>
                    </div>
                </div>
            </article>

            <article className="relative bg-marulloc-fill      max-w-4xl mx-auto overflow-hidden sm:rounded-2xl">
                <div className="absolute inset-0 h-full w-full object-cover opacity-30 ">
                    <Image src="/next.svg" alt="next image" fill />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-marulloc-hue via-marulloc-hue to-transparent opacity-90"></div>
                <div className="relative max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8 ">
                    <h2 className=" text-3xl font-extrabold text-marulloc-base sm:text-4xl">
                        <span className="block ">커스텀 컬러</span>
                        <span className="block ">컴포넌트</span>
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-marulloc-muted ">
                        어쩌구저쩌구 뭐 어쩌구저쩌구
                    </p>
                    <div className="relative mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center ">
                        <div className="spac-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5  ">
                            <button className="w-full  text-marulloc-inverted  bg-marulloc-button-accent hover:bg-marulloc-button-accent-hover flex items-center justify-center px-4  py-3 border border-transparent text-base font-medium rounded-md shadow-lg sm:px-8  ">
                                Contrast Button
                            </button>
                            <button className="w-full  bg-marulloc-button-accent-muted  hover:bg-opacity-70  text-marulloc-base  flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-lg  sm:px-8  ">
                                Primary Button
                            </button>
                            {/* 우리가 확장한 utility로 하니까 opacity가 제대로 동작하지 않는다. */}
                        </div>
                    </div>
                </div>
            </article>

            <article className="theme-swiss relative bg-marulloc-fill      max-w-4xl mx-auto overflow-hidden sm:rounded-2xl">
                <div className="absolute inset-0 h-full w-full object-cover opacity-30 ">
                    <Image src="/next.svg" alt="next image" fill />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-marulloc-hue via-marulloc-hue to-transparent opacity-90"></div>
                <div className="relative max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8 ">
                    <h2 className=" text-3xl font-extrabold text-marulloc-base sm:text-4xl">
                        <span className="block ">테마 swiss</span>
                        <span className="block ">컴포넌트</span>
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-marulloc-muted ">
                        어쩌구저쩌구 뭐 어쩌구저쩌구
                    </p>
                    <div className="relative mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center ">
                        <div className="spac-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5  ">
                            <button className="w-full  text-marulloc-inverted  bg-marulloc-button-accent hover:bg-marulloc-button-accent-hover flex items-center justify-center px-4  py-3 border border-transparent text-base font-medium rounded-md shadow-lg sm:px-8  ">
                                Contrast Button
                            </button>
                            <button className="w-full  bg-marulloc-button-accent-muted  hover:bg-opacity-70  text-marulloc-base  flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-lg  sm:px-8  ">
                                Primary Button
                            </button>
                            {/* 우리가 확장한 utility로 하니까 opacity가 제대로 동작하지 않는다. */}
                        </div>
                    </div>
                </div>
            </article>

            <article className="theme-neon relative bg-marulloc-fill      max-w-4xl mx-auto overflow-hidden sm:rounded-2xl">
                <div className="absolute inset-0 h-full w-full object-cover opacity-30 ">
                    <Image src="/next.svg" alt="next image" fill />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-marulloc-hue via-marulloc-hue to-transparent opacity-90"></div>
                <div className="relative max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8 ">
                    <h2 className=" text-3xl font-extrabold text-marulloc-base sm:text-4xl">
                        <span className="block ">테마 neon</span>
                        <span className="block ">컴포넌트</span>
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-marulloc-muted ">
                        어쩌구저쩌구 뭐 어쩌구저쩌구
                    </p>
                    <div className="relative mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center ">
                        <div className="spac-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5  ">
                            <button className="w-full  text-marulloc-inverted  bg-marulloc-button-accent hover:bg-marulloc-button-accent-hover flex items-center justify-center px-4  py-3 border border-transparent text-base font-medium rounded-md shadow-lg sm:px-8  ">
                                Contrast Button
                            </button>
                            <button className="w-full  bg-marulloc-button-accent-muted  hover:bg-opacity-70  text-marulloc-base  flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-lg  sm:px-8  ">
                                Primary Button
                            </button>
                            {/* 우리가 확장한 utility로 하니까 opacity가 제대로 동작하지 않는다. */}
                        </div>
                    </div>
                </div>
            </article>
        </main>
    );
};

export default React.memo(Theming);
