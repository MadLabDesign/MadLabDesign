import React, { useCallback } from 'react';
import { useSpring, animated as a } from 'react-spring';
import './styles.css';

function Animate() {
    const [{ xy }, set] = useSpring(() => ({ st: 0, xy: [0, 0] }));
    const interpBg = xy.interpolate(
        (x, y) =>
            `perspective(400px) rotateY(${x / 60}deg) rotateX(${-y /
            60}deg) translate3d(-50%, -50%, 0)`,
    );
    const onMove = useCallback(
        ({ clientX: x, clientY: y }) =>
            set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2] }),
        [set],
    );
    const onScroll = useCallback(e => set({ st: e.target.scrollTop / 30 }), [set]);
    return (
        <div className="animatedConatiner" onMouseMove={onMove} onScroll={onScroll}>
            <a.svg style={{ transform: interpBg }} viewBox="0 0 407 322">
                {/* start */}
                <g id="bubble-bg" transform={'translate(0 39)'} opacity=".1">
                    <g id="Path">
                        <path
                            d="M404 93c-4-10-14-14-22-11l-37 17c2-4 1-9-1-14-2-6-7-9-12-11l-1-3 7-3c5-3 7-10 4-16s-9-9-15-6l-10 5-12-13h1c4-2 5-6 3-10l-1-2c-1-3-6-5-9-3l-8 4a140 140 0 00-217 79L9 133c-8 4-11 14-7 24 4 9 14 14 22 10l37-16c-2 4-1 9 1 13 2 5 5 8 9 10l-15 7c-6 2-8 9-5 15l1 2c2 6 9 9 14 6l15-6a140 140 0 00267-39l8-4c5-2 7-9 5-15l-1-2-4-5 41-18c8-3 12-14 7-23z"
                            fill="#000"
                        />
                        <path
                            d="M387 89c-4-8-13-13-21-9l-34 15c1-4 1-9-1-13-2-5-6-8-11-10l-2-3 7-3c5-2 7-9 4-14-3-6-9-8-14-6l-10 5-11-12h2c3-2 4-6 2-9l-1-2c-1-3-5-5-8-3l-8 3a131 131 0 00-202 73l-60 26c-8 4-11 13-7 22 4 8 13 13 21 9l34-15c-1 4-1 9 1 13 1 4 4 7 8 9l-14 6c-5 2-7 8-5 14l1 2c3 5 9 8 14 6l14-6a131 131 0 00248-36l8-3c5-3 7-9 4-14l-1-2c0-2-1-3-3-4l38-17c8-3 11-13 7-22z"
                            fill="#969595"
                        />
                    </g>
                </g>

                <g id="shadow" transform="translate(79 12)" fill="#000" opacity=".3">
                    <path
                        d="M243 129c-7-6-16-8-25-3h-1c-1-15-6-28-17-39 8-1 16-2 19-10-5 1-10 1-15-2 13-10 18-23 11-38l-21 13-1-1 2-3c5-7 10-14 12-23 2-8 1-15-3-23-15 14-34 17-54 20-13 2-27 3-40 7l-9 4c-10 4-18 11-22 21-1-4 1-7 5-15l-10 7-7 9c-3-7 0-13 3-20-10 5-19 11-25 19-5 9-6 19-4 30l-8-6 3 28-7-6 3 28H20c-11 2-17 9-18 19-5 23 0 42 20 57l17 11-6 11c4 0 7-1 12-6h1l-5 14c4 0 7-1 10-5l6 7c7 9 15 17 25 25 28 22 67 17 91-1 8-6 14-13 20-20l17 10 1 2c4 4 9 1 14-4 5-4 5-11 2-14l-6-3-14-5-1-4c4 3 7 6 13 6l-9-13 4-3 22-16c11-8 15-17 16-28 1 8 2 17 3 4 2-24-6-36-12-41zM13 159zm4 14zm7-24l1-1-1 1zm2-1h1-1zm4 31zm6-30zm50-65h0zm8-3v-1 1zm40-12h0zm54 23zm4 10zm0 1v0zm21 44c1-7 7-11 16-12-9 1-14 5-16 12l-1 1 1-1zm16 17c-5 2-7 5-8 10h-1c1-5 3-8 9-10zm1 15l-13 16-21 22h-1l22-22 13-18v2zm7-27l-1-2 2 7-1-5z"

                        id="Path"
                    />
                </g>

                <g id="face" transform="translate(71)" fill="#A8A3AA">
                    <path
                        d="M243 136c6 5 14 17 12 42-1 14-2 5-3-4-1 11-5 21-16 30l-22 16-4 3 9 14c-6 0-9-3-13-6l5 13-6-3-4-5-2 3c-7 12-15 23-26 32-24 18-63 23-91 0-10-8-18-17-25-26l-6-7c-3 4-6 5-10 6l5-15h-1c-5 5-8 6-12 5l6-11-17-12C2 196-3 176 2 152c1-10 7-18 18-20h12l-3-29 7 6-3-29 8 6c-2-11-1-22 4-31 6-9 15-15 25-20-3 7-6 13-3 21l7-10c3-3 6-6 10-7-4 8-6 12-5 15 4-10 12-17 22-22l9-3c13-5 27-6 40-8 20-3 39-6 54-21 4 8 5 16 3 24-2 10-7 17-12 25l-2 3h1l21-14c7 17 2 30-11 41 5 2 10 2 15 2-3 8-11 9-19 10 11 12 16 26 17 41h1c9-5 18-3 25 4z"

                        id="Path"
                    />
                </g>

                <g id="shadowMid" transform="translate(92 69)" fill="#8C898F">
                    <path
                        d="M135 116c0-1 0 0 0 0l4-3 32 3-1 12 9-32-19 9c-5 1-20-5-20-7l-11-14h48c4 0 4 5 3 9l7-23 37 3v48l-17 10 7-8c8-12 8-26 4-39-3-7-8-9-14-9-8 1-14 5-15 12l-5 15-14 35-1 7c14-3 36-27 36-39-7 2-9 8-10 15l-1-8c1-6 5-11 9-16 3-5 2-8-3-11l-2-1c11 0 18 8 16 18l-5 13a212 212 0 01-21 27l-21 13-3 28-10 11s-15 17-34 4c0 0 19 1 19-6-3-10-30-10-42-8 5-6-2-9-17-8-2 0-9-4-6-4 20 3 38-5 38-5-6-4 5-7 13-10-3-1-4-1-4-3 1-2 4 0 7 1l5-3 3-2 1-7c1-19-16-15-16-15l4-6 10-6zm-9-79c23-5 11-21 5-28-1-2 0-3 2-3 19 3 29 22 33 30l-2 2c-14-5-38-1-38-1zM108 0s-17 13 1 23c3 1-9 6-20-8s19-15 19-15zM8 89c-5 3-6 6-3 10l7 11c2 3 2 7 0 11-1-6-2-9-4-11 0-3-2-6-3-8L0 91c3-2 6-3 9-2H8zm7-1l23 33s2 25 0 25H28c-1 1-38-35-15-19s2-39 2-39z"

                        id="Path"
                    />
                </g>

                <g id="shine" transform="translate(76 78)" fill="#AEAEAF">
                    <path
                        d="M106 116l2 1 2 2c6 6 9 17 4 15-20-10-31 16-31 16v4c-1 5 3 11 5 16 5 9 24 14 35 13l-15 3 7 5c11 6 23 8 36 7-23 11-55 9-72-12-18-22-7-54 8-75l-4 11 8-16c5 2 2 8 2 12l2-9a38 38 0 0111 7zm10-36c-2 7 8 12 13 11-1 4-11 2-11 2l-11-12c-10-2-17 19-17 19l-3 7-2-9-4-3c-4-3-33-17-33-55 0-21 24-32 53-40-20 8-35 18-35 34 0 25 9 35 19 38l4-3s1-14 5-16c5-2 29 0 28 1-2 1-1 6-1 11l2 6h4l6-2c3-1 4 3 7 5 3 1 0 0-1 2-2 3-6 5-6 5s3-3 0-4c-2-1-9 3-10 2l-4-1h-2l3 3-4-1zM11 81c-7 6-5 26-1 35-28-39 10-63 21-37-9-8-14-3-20 2z"

                        id="Path"
                    />
                </g>

                <g id="shadowDark" transform="translate(192 161)" fill="#7D7B80">
                    <path
                        d="M88 0s-21 56 2 39c23-16-14 20-15 19H65c-2 0 0-25 0-25L88 0zM0 81l12-10h26l7 2s-25 2-18 8c8 6-14 3-16 1L0 81z"

                        id="Path"
                    />
                </g>

                <g id="nose" transform="translate(176 159)" fill="#000">
                    <path
                        d="M7 0L5 2 0 12c-1 3 2 9 5 11l-2-4c5 2 10 7 15 3l1 3h1v-8c0-2 1-3 3-3 1 0 2 1 2 3v8h2v-3c2 2 5 2 7 1l8-4-2 4c5-3 6-8 4-13l-3-5-2-4-3 2-3 2-6 6c-3 2-6 2-8 0l-7-7C9 4 7 3 7 0z"

                        id="Path"
                    />
                </g>

                <g id="hair" transform="translate(71)" fill="#000">
                    <path
                        d="M243 136c-7-7-16-9-25-4h-1c-1-15-6-29-17-41 8-1 16-2 19-10-5 0-10 0-15-2 13-11 18-24 11-41l-21 14h-1l2-3c5-8 10-15 12-25 2-8 1-16-3-24-15 15-34 18-54 21-13 2-27 3-40 8l-9 3c-10 5-18 12-22 22-1-3 1-7 5-15-4 1-7 4-10 7l-7 10c-3-8 0-14 3-21-10 5-19 11-25 20-5 9-6 20-4 31l-8-6 3 29-7-6 3 29H20c-11 2-17 10-18 20-5 24 0 44 20 59l17 12-6 11c4 1 7 0 12-5h1l-5 15c4-1 7-2 10-6l6 7c7 9 15 18 25 26 28 23 67 18 91 0 11-9 19-20 26-32l2-3 4 5 6 3-5-13c4 3 7 6 13 6l-9-14 4-3 22-16c11-9 15-19 16-30 1 9 2 18 3 4 2-25-6-37-12-42zM54 209c-11-1-32-23-33-35 5 0 7 4 9 13v-11l-7-11c-3-4-2-7 2-9l2-1c-7-1-14 4-14 12 0 4 0 8 2 11 4 8 9 15 15 22l20 22 2 3c-14-11-29-21-39-35-8-11-8-24-4-36 3-6 7-8 13-8 6 1 11 3 14 10l15 41 3 11v1zm128 29a54 54 0 01-6 22c-32 30-41 19-43 12l-4-4c-5 21-27 13-43-1a85 85 0 01-5-7l-1-2-1-1-1-2v-2l-2-7v-19l1-2v-1l2-8c2-7 6-14 10-21l-2 4v1h1l8-15 2 1v2l-1 1v7h2l1-8 14 10 1-1-1-2-1-2-3-2a52 52 0 01-10-6l-3-3-2-7 2-7v-2l1-2a30 30 0 017-8l1-1 3-2 2-1 1-1a46 46 0 019 1 9 9 0 014 2v1l1 1h3l2-1 2-1 2-2h1l3-1h4l4 1a27 27 0 015 4l1 2a34 34 0 016 7 23 23 0 013 9 12 12 0 01-4 9l-2 2a69 69 0 01-11 7l-1 1-1 1-1 2v2l2-4h1l-1 1h1l11-8 2 9 1-1v-2l-1-4v-1-2l1-1 1-1 11 13c1 0 1 0 0 0l-4-8h1l3 4 2 2 1 3 3 5 1 5 3 15c1 5 2 10 1 15zm0-75l-5-2 1 3-3-2-2 3-1 2-11 1-7-11-3-3c-3-5-11-10-21-11l1-1h-3a39 39 0 00-7 2h-2l-2 1h1c-6 2-10 6-12 9h-1a31 31 0 00-8 9l-1 2v2l-1 1H83l-1-3h-3l1-2h-4c-1-4-3 1-5-1l2-1h-5c-6-7-9-19-9-40 0-13 9-23 22-30a240 240 0 0113-7c15-5 8 9 24 12 9 2 6 0 5-1l-1-2c-6-6-5-14 6-19a32 32 0 01-1 5v2h-1v1h1v-1l1-1h1a38 38 0 004-6l1-2c45-8 60 26 60 49 0 24-5 36-12 42zm56 27c-7 10-17 18-27 26l-15 12-1-1 22-23 16-22 5-13c2-10-5-18-16-18l2 1c5 3 6 6 3 11-4 5-8 10-8 16v8c1-7 3-13 10-15 0 12-22 36-36 39l1-7 14-35 5-15c1-7 7-11 15-12 6-1 11 2 14 9 4 13 4 27-4 39z"

                        id="Path"
                    />
                </g>

                <g id="hairShine" transform="translate(120 17)" fill="#0D0D0D">
                    <path
                        d="M2 82c2 0 8-17 42-22 0 0 20 0 24-3 16-12 30-30 69 12l1-1 8-1 7-5v-1c-20-1-16-6-20-7h3c25 1 25-21 25-21-5 3-23 6-28 8l-1-1c5-5 9-10 11-16 2-5 8-19 6-24l-9 8c-60 31-28 4-41 6-30 5-43 32-53 27-3-2 11-15 9-14-9 2-13 4-20 14-6 7-19 23-13 13V41s-5 8-14 15l4-27C-5 47 1 81 2 82z"

                        id="Path"
                    />
                </g>

                <g id="mounth" transform="translate(158 219)">
                    <g id="Path" >
                        <path
                            d="M59 35c-9-2-19-3-28 0 9-3 19-3 28 0zM76 4c3 3 4 8 5 13l-8-2H58v1c-4-2-9-1-13 1l5 1h-4l3 3H39a53 53 0 01-31 2c8 4 16 3 23 1v1c-6 2-13 3-20 1-4-1-7-4-10-7-1-2-2-6 1-8v1c-1 4 1 6 5 8 5 3 12 3 18 2 8-2 14-6 21-10l12-9 5-2 7-1 6 4zm-45 9l-2 1v1l10-4-1 1c-5 3-11 5-17 6-4 0-9-1-13-3-3-1-4-3-3-5 3 4 8 5 12 5 5 1 9 0 13-2l1-1v1zm42 3c8-1 16 6 15 12-1-4-3-7-6-9l-9-3z"
                            fill="#000"
                        />
                        <path
                            d="M66 13c-5 1-5 1-5-4V5l2-2h3v10zm1 0V2l6 3v3l-5 5h-1zm-7-9v10l-5-1V8l5-4zm-7 5v4l-4-1 4-3z"
                            fill="#FFF"
                        />
                    </g>
                </g>

                <g transform="translate(231 227)" id="smoke">
                    <path
                        d="M38 5C24 2 9 1 6 2 0 4 2 6 2 6c2 0 8 1 26 13l26 16 11-19S52 9 38 5z"
                        id="Path"
                        fill="#A8A3AA"
                    />
                    <path
                        d="M54 37h-1L27 20C16 13 7 9 2 8H1L0 4c0-2 3-3 5-3 4-2 19-1 33 3 14 3 28 10 28 10l1 1v2L55 36a2 2 0 01-1 1zM4 5c7 1 17 7 25 12l24 16 10-16c-4-2-15-7-26-10C24 3 9 3 6 4L4 5z"
                        id="Shape"
                        fill="#000"
                    />
                    <path
                        d="M4 5c-1-1 46 6 49 14 3 7 12-3 12-3S22-4 4 5z"
                        id="Path"
                        fill="#AEAEAF"
                    />
                    <path
                        d="M67 32c5-4 5-11 2-15-4-4-11-3-16 2-4 4-4 13 0 17s9 1 14-4z"
                        id="Path"
                        fill="#EB2791"
                    />
                    <path
                        d="M67 32l1-1 1-2 1-4-1-4-2-3-3-1a8 8 0 00-2 1h-1-1a9 9 0 00-1 1h-1l-1 1-1 1-3 6a17 17 0 000 4l1 3 2 3h4l2-1a14 14 0 003-2l2-2zm0 1l-3 3-4 2h-4l-2-1-2-2-2-4a16 16 0 011-8l2-4a14 14 0 017-5h5a8 8 0 016 6v5c0 3-2 6-4 8z"
                        id="Shape"
                        fill="#000"
                    />
                </g>

                <g transform="translate(123 106)" id="sunglasses">
                    <path
                        d="M110 31c-11 0-23-7-34-7s-20 7-32 7V8h66v23z"
                        id="Path"
                        fill="#000"
                    />
                    <g id="XMLID_18_" transform="translate(0 1)" fill="#070808">
                        <path
                            d="M0 23l2 10c5 17 34 24 50 12 12-8 17-19 16-31-1-7-6-12-15-13H24C8 1-1 10 0 23z"
                            id="Path"
                        />
                    </g>
                    <g id="XMLID_17_" transform="translate(81)" fill="#070808">
                        <path
                            d="M29 0L18 1C7 3 1 8 1 17l1 9c3 16 18 27 37 26 17-1 28-8 31-21l-1-14C68 9 63 4 53 3L29 0z"
                            id="Path"
                        />
                    </g>
                    <g
                        id="Group"
                        opacity=".5"
                        transform="translate(101 4)"
                        fill="#2C2C2C"
                    >
                        <path id="Path" d="M1 45l5 1L33 1h-5z" />
                    </g>
                    <g id="Group" opacity=".5" transform="translate(90 3)" fill="#2C2C2C">
                        <path id="Path" d="M0 39l7 3L32 1 21 3z" />
                    </g>
                    <g id="Group" opacity=".5" transform="translate(16 2)" fill="#2C2C2C">
                        <path id="Path" d="M1 42l15 7L45 3 24 0z" />
                    </g>
                    <path
                        d="M107 5h8l17 2c5 1 8 2 10 4 2 1 3 3 3 6 1 5 2 9 1 13-1 5-4 9-9 13a40 40 0 01-21 5c-9 0-16-2-22-7a26 26 0 01-11-16h-1v-3l-3-1a27 27 0 00-9 1h-2l-1 3c-2 7-6 13-14 18-5 3-11 5-18 5s-13-2-19-4c-6-4-9-8-10-11l-1-6v-3c-1-5 0-9 3-12 3-4 9-6 18-7a203 203 0 0130 1c4 0 8 1 10 5l2 2h12l3-2h1v-1c2-2 7-4 12-4l7-1h4zm1-5L95 1c-6 1-11 3-14 7l-3 1h-8c-2-4-7-7-13-7a279 279 0 00-31-1C8 2-1 10 0 24l2 10c4 11 18 18 33 18a38 38 0 0036-26 29 29 0 017 0c4 16 19 26 38 26h1c19-1 31-8 33-21V17c-2-8-7-13-17-14l-25-3z"
                        id="Shape"
                        fill="#000"
                    />
                </g>

                <g id="eyeBrower_right" transform="translate(211 83)" fill="#000">
                    <path
                        d="M23 7c9 1 18 4 22 8 1 0 2 0 1-1C44 7 35 0 23 0 13 0 3 6 0 12l1 1c5-4 13-6 22-6z"

                        id="Path"
                    />
                </g>
                <g id="eyeBrower_left" transform="translate(141 96)" fill="#000">
                    <path
                        d="M19 6c8 0 16 2 20 5l1-1C37 5 29 0 20 0 10 0 3 5 0 10l1 1c4-3 11-5 18-5z"

                        id="Path"
                    />
                </g>
            </a.svg>
        </div>
    );
}

export default Animate;
