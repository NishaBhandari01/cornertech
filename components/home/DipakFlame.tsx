import React, { useId } from "react";


export default function DipakFlame({ className = "w-32 h-32" }: { className?: string }) {
    const uid = useId().replace(/:/g, "");
    const id = (name: string) => `${name}-${uid}`;

    const outer = [
        "M100 130 C79 130 71 108 82 86 C91 69 99 58 100 40 C107 58 121 70 123 94 C125 113 117 130 100 130 Z",
        "M100 130 C78 130 73 110 84 90 C92 74 104 66 98 46 C110 60 122 74 122 96 C123 114 117 130 100 130 Z",
        "M100 130 C80 130 72 106 81 88 C90 72 96 62 103 42 C108 60 120 68 124 92 C126 112 118 130 100 130 Z",
        "M100 130 C79 130 74 109 85 88 C93 71 101 62 99 44 C109 59 121 72 122 95 C123 113 117 130 100 130 Z",
        "M100 130 C79 130 71 108 82 86 C91 69 99 58 100 40 C107 58 121 70 123 94 C125 113 117 130 100 130 Z",
    ];

    const inner = [
        "M100 130 C88 130 84 116 90 102 C95 91 99 84 100 72 C105 84 113 92 113 107 C113 120 108 130 100 130 Z",
        "M100 130 C87 130 85 117 91 104 C96 94 103 88 99 76 C108 86 114 94 113 108 C112 120 108 130 100 130 Z",
        "M100 130 C89 130 84 115 90 101 C95 90 98 84 102 74 C106 86 112 92 114 106 C115 120 108 130 100 130 Z",
        "M100 130 C88 130 85 116 91 103 C96 93 101 86 99 75 C107 85 113 93 113 107 C112 120 108 130 100 130 Z",
        "M100 130 C88 130 84 116 90 102 C95 91 99 84 100 72 C105 84 113 92 113 107 C113 120 108 130 100 130 Z",
    ];

    const morph = (values: string[], dur: string) => (
        <animate
            attributeName="d"
            dur={dur}
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1"
            values={values.join(";")}
        />
    );

    return (
        <svg viewBox="0 0 200 220" className={className} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Burning dipak">
            <defs>
                <radialGradient id={id("glow")} cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.55" />
                    <stop offset="55%" stopColor="#f97316" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                </radialGradient>
                <linearGradient id={id("outer")} x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="55%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#fbbf24" />
                </linearGradient>
                <linearGradient id={id("inner")} x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#fef08a" />
                </linearGradient>
                <linearGradient id={id("clay")} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#c2410c" />
                    <stop offset="100%" stopColor="#7c2d12" />
                </linearGradient>
            </defs>

            {/* Soft pulsing glow */}
            <circle cx="100" cy="95" r="75" fill={`url(#${id("glow")})`}>
                <animate attributeName="r" values="70;80;72;82;70" dur="2.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;1;0.75;1;0.8" dur="2.4s" repeatCount="indefinite" />
            </circle>

            {/* Rising sparks */}
            {[
                { x: 94, d: "2.6s", b: "0s" },
                { x: 108, d: "3.2s", b: "0.9s" },
                { x: 101, d: "2.9s", b: "1.7s" },
            ].map((s, i) => (
                <circle key={i} cx={s.x} cy="60" r="1.6" fill="#fde68a">
                    <animate attributeName="cy" values="75;20" dur={s.d} begin={s.b} repeatCount="indefinite" />
                    <animate attributeName="cx" values={`${s.x};${s.x + (i % 2 ? 8 : -8)};${s.x}`} dur={s.d} begin={s.b} repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0;1;0" dur={s.d} begin={s.b} repeatCount="indefinite" />
                </circle>
            ))}


            <g>
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    values="-2 100 130;2.5 100 130;-1.5 100 130;2 100 130;-2 100 130"
                    dur="2.2s"
                    repeatCount="indefinite"
                />
                <path fill={`url(#${id("outer")})`} d={outer[0]}>
                    {morph(outer, "1.8s")}
                </path>
                <path fill={`url(#${id("inner")})`} d={inner[0]}>
                    {morph(inner, "1.4s")}
                </path>
                <ellipse cx="100" cy="122" rx="5" ry="8" fill="#fff7ed" opacity="0.9">
                    <animate attributeName="ry" values="8;10;7;9;8" dur="1.2s" repeatCount="indefinite" />
                </ellipse>
            </g>

            {/* Wick */}
            <rect x="97.5" y="128" width="5" height="22" rx="2.5" fill="#1f2937" />

            {/* Diya body */}
            <path d="M28 150 Q30 196 100 200 Q170 196 172 150 Z" fill={`url(#${id("clay")})`} />
            <path d="M172 150 Q186 148 192 140 Q184 158 172 164 Z" fill="#9a3412" />
            <ellipse cx="100" cy="150" rx="72" ry="13" fill="#9a3412" />
            <ellipse cx="100" cy="150" rx="62" ry="9" fill="#f59e0b" opacity="0.85" />
            <ellipse cx="100" cy="150" rx="62" ry="9" fill="#fde68a" opacity="0.35">
                <animate attributeName="opacity" values="0.2;0.5;0.25;0.45;0.2" dur="1.8s" repeatCount="indefinite" />
            </ellipse>

            {/* Decorative band on the clay */}
            <path d="M44 168 Q100 182 156 168" fill="none" stroke="#fbbf24" strokeWidth="2" strokeDasharray="3 5" opacity="0.7" />
        </svg>
    );
}
