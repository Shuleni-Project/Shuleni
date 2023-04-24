import { useEffect } from "react";

import VideoConference from "./VideoConference";

import profilePic from '../assets/undraw_pic_profile.svg'
import {
    Sidenav,
    Ripple,
    initTE,
} from "tw-elements";

const SideNavbar = () => {
    useEffect(() => {
        initTE({ Sidenav, Ripple });

        window.addEventListener("load", () => {
            const sidenav = document.getElementById("full-screen-example");
            const sidenavInstance = Sidenav.getInstance(sidenav);

            sidenavInstance.show();
        });

    }, []);
    return (


        <div class="dark:bg-zinc-800">
                       


        <div class="dark:bg-zinc-800">

            {/* <!-- Sidenav --> */}
            <nav
                id="full-screen-example"
                className="fixed left-0 top-0 z-[1035] h-screen w-[90px] -translate-x-full overflow-hidden bg-zinc-800 shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0"
                data-te-sidenav-init
                data-te-sidenav-color="light"
                data-te-sidenav-backdrop="false"
                data-te-sidenav-slim="true"
                data-te-sidenav-expandable="false"
                data-te-sidenav-slim-collapsed="true"
                data-te-sidenav-slim-width="90"
                data-te-sidenav-content="#content">
                <div className="mt-6 text-center">
                    <a
                        className="relative inline-block overflow-hidden rounded-full align-bottom"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        href="/">
                        <img
                            src={profilePic}
                            alt="Avatar"
                            className="h-auto max-w-[60px] rounded-full" />
                    </a>
                    <p className="font-mono text-slate-50 font-bold">Name</p>
                </div>

                <hr className="my-4 border-gray-700" />
                <ul
                    className="relative m-0 list-none px-[0.2rem]"
                    data-te-sidenav-menu-ref>
                    <li className="relative my-4">
                        <a href="/"
                            className="group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-300 outline-none transition duration-300 ease-linear hover:bg-white/10 hover:outline-none focus:bg-white/10 focus:outline-none active:bg-white/10 active:outline-none data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
                            data-te-sidenav-link-ref>
                            <span
                                className="mx-auto motion-reduce:transition-none [&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-gray-300 [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:fill-white group-focus:[&>svg]:fill-white group-active:[&>svg]:fill-white group-data-[te-sidenav-state-focus]:[&>svg]:fill-white">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    {/* <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                                    {/* <path
                                        d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" /> */}

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill='#FFFFFF'><path d="M5 13.1V16c0 3 2.6 4 7 4s7 0 7-3v-3.9L12 16l-7-2.9z"></path><path d="M22 15V9.8l2-.8-12-5L0 9l12 5 9-3.8V15c-1 .2-1 1.1-1 2v3h3v-3c0-.9 0-1.7-1-2z"></path></g></svg>

                                </svg>
                            </span>
                        </a>
                    </li>
                    <li className="relative my-4">
                        <a href="/"
                            className="group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-300 outline-none transition duration-300 ease-linear hover:bg-white/10 hover:outline-none focus:bg-white/10 focus:outline-none active:bg-white/10 active:outline-none data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
                            data-te-sidenav-link-ref>
                            <span
                                className="mx-auto motion-reduce:transition-none [&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-gray-300 [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:fill-white group-focus:[&>svg]:fill-white group-active:[&>svg]:fill-white group-data-[te-sidenav-state-focus]:[&>svg]:fill-white">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    {/* <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                                    {/* <path
                                        d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" /> */}

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill='#FFFFFF'><path d="M15 21H9c-.55 0-1 .45-1 1s.45 1 1 1h1c0 .55.45 1 1 1h2c.55 0 1-.45 1-1h1c.55 0 1-.45 1-1s-.45-1-1-1zM16.5 18h-9c-.55 0-1 .45-1 1s.45 1 1 1h9c.55 0 1-.45 1-1s-.45-1-1-1zM8.5 7C7.77 7 7 7.77 7 8.5S7.77 10 8.5 10H10V8.5C10 7.77 9.23 7 8.5 7zM15.5 7c-.73 0-1.5.77-1.5 1.5V10h1.5c.73 0 1.5-.77 1.5-1.5S16.23 7 15.5 7zM17 14.72c1.69-.69 4-2.46 4-5.72 0-2.11-.65-9-9-9S3 6.89 3 9c0 3.26 2.31 5.03 4 5.72V15c0 .05.01.1.01.15-.3.16-.51.48-.51.85 0 .55.45 1 1 1h9c.55 0 1-.45 1-1 0-.37-.21-.69-.51-.86 0-.05.01-.1.01-.15v-.27zM15.5 11H14v4.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5V11h-2v4.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5V11H8.5C7.21 11 6 9.79 6 8.5S7.21 6 8.5 6 11 7.21 11 8.5V10h2V8.5C13 7.21 14.21 6 15.5 6S18 7.21 18 8.5 16.79 11 15.5 11z"></path></g></svg>

                                </svg>
                            </span>
                        </a>
                    </li>
                    <li className="relative my-4">
                        <a href="/"
                            className="group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-300 outline-none transition duration-300 ease-linear hover:bg-white/10 hover:outline-none focus:bg-white/10 focus:outline-none active:bg-white/10 active:outline-none data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
                            data-te-sidenav-link-ref>
                            <span
                                className="mx-auto motion-reduce:transition-none [&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-gray-300 [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:fill-white group-focus:[&>svg]:fill-white group-active:[&>svg]:fill-white group-data-[te-sidenav-state-focus]:[&>svg]:fill-white">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    {/* <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                                    {/* <path
                                        d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z" /> */}

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill='#FFFFFF'><path d="M1 5v14l7-7-7-7zm22 14V5l-7 7 7 7zm-11-3l-3.5-3.5L1 20h22l-7.5-7.5L12 16zM1 4l11 11L23 4H1z"></path></g></svg>

                                </svg>
                            </span>
                        </a>
                    </li>
                    <li className="relative my-4">

                        <a href="/videoconference"

                        <a href="/"

                            className="group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-300 outline-none transition duration-300 ease-linear hover:bg-white/10 hover:outline-none focus:bg-white/10 focus:outline-none active:bg-white/10 active:outline-none data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
                            data-te-sidenav-link-ref>
                            <span
                                className="mx-auto motion-reduce:transition-none [&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-gray-300 [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:fill-white group-focus:[&>svg]:fill-white group-active:[&>svg]:fill-white group-data-[te-sidenav-state-focus]:[&>svg]:fill-white">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                    {/* <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                                    {/* <path
                                        d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.7 8.4 166.9 8 160 8s-13.7 .4-20.4 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM208 176c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 400c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48z" /> */}

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill='#FFFFFF'><path d="M20.8 6.2L17 10V7c0-.6-.4-1-1-1H3c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1h13c.6 0 1-.4 1-1v-3l3.8 3.8c.4.4 1.2.1 1.2-.5V6.7c0-.6-.8-.9-1.2-.5z"></path></g></svg>

                                </svg>
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
            {/* <!-- Sidenav --> */}

            {/* <!-- Content --> */}
            
            {/* <!-- Content --> */}

        </div>
    );
}

export default SideNavbar;