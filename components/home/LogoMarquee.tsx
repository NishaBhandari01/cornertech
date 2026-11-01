import React from "react";
import Image from "next/image";

type Logo = { name: string; src: string };


const LOGOS: Logo[] = [
    { name: "CAAN", src: "/trust/caan.webp" },
    { name: "Debai", src: "/trust/debai.webp" },
    { name: "Dream Way Education Hub", src: "/trust/dream_way.webp" },
    { name: "Dynamic", src: "/trust/dynamic.webp" },
    { name: "Kalika", src: "/trust/kalika.webp" },
    { name: "Krish Aluminium", src: "/trust/krish_aluminium.webp" },
    { name: "Krish Marble", src: "/trust/krish_marble.webp" },
    { name: "Neplo", src: "/trust/neplo.webp" },
    { name: "PZ", src: "/trust/pz.webp" },
    { name: "Rohan Trade Link", src: "/trust/rohan_trade_link.webp" },
    { name: "Shine", src: "/trust/shine.webp" },
    { name: "Siddhartha Hospitality", src: "/trust/siddhartha_hospitality.webp" },
    { name: "SRM", src: "/trust/srm.webp" },
    { name: "Swargadwari CC", src: "/trust/swargadwari_cc.webp" },
];

export default function LogoMarquee({  logos = LOGOS,  speed = 30}: {
    logos?: Logo[];
    speed?: number;
}) {

    const track = [...logos, ...logos];

    return (
        <section className="w-full py-10 bg-[#0b0217]">
            <h2 className="text-center text-sm sm:text-base font-bold tracking-[0.25em] uppercase text-purple-500 mb-8">
                Trusted by leading companies
            </h2>

            <div
                className="relative overflow-hidden group"
                style={{
                    maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                    WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                }}
            >
                <div
                    className="logo-marquee-track flex w-max"
                    style={{ animationDuration: `${speed}s` }}
                >
                    {track.map((logo, i) => (
                        <div
                            key={`${logo.name}-${i}`}
                            className="mr-6 shrink-0 w-44 h-28 sm:w-56 sm:h-32 rounded-2xl bg-white border border-purple-100 shadow-md shadow-purple-200/40 flex items-center justify-center p-5"
                            aria-hidden={i >= logos.length}
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={logo.src}
                                    alt={logo.name}
                                    fill
                                    sizes="224px"
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes logo-marquee {
                    from { transform: translateX(0); }
                    to   { transform: translateX(-50%); }
                }
                .logo-marquee-track {
                    animation-name: logo-marquee;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                    will-change: transform;
                }
                .group:hover .logo-marquee-track {
                    animation-play-state: paused;
                }
                @media (prefers-reduced-motion: reduce) {
                    .logo-marquee-track { animation: none; }
                }
            `}</style>
        </section>
    );
}
