"use client"

import React, { useState } from "react";



type Piece = {
  id: string;
  points: string; 
  gradient: string;
  from: { x: number; y: number; r: number }; 
  delay: number;
};

const PIECES: Piece[] = [
  {
    id: "ribbon-top",
    points:
      "292.5,34.2 205.2,34.2 85.2,234.2 131.5,324.5 276.5,324.2 243.5,270.2 163.8,270 145,239.2 237.2,87 329,87.2",
    gradient: "gradTop",
    from: { x: -300, y: -300, r: -40 },
    delay: 0,
  },
  {
    id: "ribbon-dark",
    points:
      "322.2,119.2 262.2,119.2 188.2,240.2 247.8,241.8 256.8,229.2 309.8,316.2 288,353 117.8,354 68.5,271.2 40.2,323.5 89.2,407.5 317.5,405.5 372.8,315 287.8,181",
    gradient: "gradDark",
    from: { x: -280, y: 320, r: 35 },
    delay: 0.2,
  },
  {
    id: "chevron",
    points: "361.5,124.2 331,177 413.8,315.2 362,406.8 423,407.8 476.5,317.2",
    gradient: "gradChevron",
    from: { x: 340, y: 20, r: 30 },
    delay: 0.4,
  },
];

type Letter = { id: string; d: string; side: "left" | "right"; color: string };

const BLACK = "#000000";
const PURPLE = "#9424ff";

const LETTERS: Letter[] = [
  {
    id: "C",
    side: "left",
    color: BLACK,
    d: "M57.2,427.0 L53.7,428.0 L49.5,430.0 L46.2,433.0 L44.2,435.5 L43.0,437.8 L42.0,441.7 L41.8,446.3 L42.5,450.2 L43.3,452.5 L45.8,456.2 L48.0,458.3 L51.8,460.7 L54.7,461.8 L59.0,462.7 L62.8,462.7 L67.3,461.8 L71.2,460.2 L74.3,458.0 L76.8,455.0 L78.3,451.5 L77.7,451.2 L70.3,451.2 L67.3,454.3 L63.5,456.0 L59.3,456.2 L56.0,455.3 L53.0,453.3 L51.3,451.3 L49.8,447.3 L49.7,443.5 L51.0,438.7 L54.7,434.8 L56.8,433.8 L59.3,433.3 L62.3,433.3 L65.3,434.0 L67.3,435.2 L70.3,438.3 L78.2,438.2 L78.3,437.3 L76.2,433.5 L73.7,431.0 L70.8,429.2 L64.7,427.0Z",
  },
  {
    id: "O1",
    side: "left",
    color: BLACK,
    d: "M98.5,427.0 L94.7,428.2 L90.8,430.2 L87.0,433.7 L85.5,435.7 L84.0,439.2 L83.2,442.8 L83.2,446.5 L84.0,450.3 L85.3,453.5 L87.3,456.2 L89.5,458.3 L95.5,461.7 L100.2,462.7 L105.0,462.7 L108.8,461.8 L115.2,458.5 L118.3,455.3 L120.8,450.7 L121.8,446.3 L121.7,441.5 L120.8,438.7 L118.0,433.7 L114.2,430.2 L110.3,428.2 L107.3,427.2Z M97.7,434.0 L100.7,433.3 L104.3,433.3 L107.3,434.0 L109.7,435.3 L112.8,439.2 L114.0,443.5 L113.7,448.2 L111.7,452.0 L108.3,455.0 L104.5,456.2 L98.7,455.8 L94.8,453.8 L92.2,450.3 L91.0,446.8 L91.2,441.8 L93.0,437.7 L95.7,435.0Z",
  },
  {
    id: "R1",
    side: "left",
    color: BLACK,
    d: "M127.7,427.3 L127.2,428.7 L127.3,461.7 L127.8,462.2 L134.3,462.2 L134.7,461.8 L134.8,449.3 L135.5,448.7 L137.8,448.7 L139.0,449.5 L146.5,462.0 L154.7,462.2 L154.8,461.0 L146.8,448.7 L147.5,447.7 L151.5,445.8 L153.0,444.2 L154.7,441.2 L154.8,435.5 L152.8,431.7 L151.3,430.2 L149.0,428.8 L143.8,427.3Z M135.0,433.8 L135.5,433.3 L142.8,433.3 L145.2,434.2 L147.0,436.3 L147.2,439.3 L146.8,440.7 L145.0,442.5 L143.3,443.2 L135.2,443.0 L134.8,442.5Z",
  },
  {
    id: "N",
    side: "left",
    color: BLACK,
    d: "M162.3,427.3 L161.8,428.0 L162.0,461.8 L162.5,462.2 L168.8,462.2 L169.5,461.3 L169.5,440.3 L170.3,440.0 L186.3,462.0 L193.5,462.2 L194.0,461.3 L193.8,427.7 L193.3,427.2 L187.5,427.2 L186.5,427.7 L186.3,449.3 L185.8,449.8 L185.0,449.3 L169.2,427.3Z",
  },
  {
    id: "O2",
    side: "left",
    color: BLACK,
    d: "M215.0,427.0 L210.7,428.3 L206.0,431.0 L203.3,433.7 L201.3,436.5 L200.2,439.3 L199.5,442.8 L199.5,446.7 L200.2,450.3 L201.2,452.7 L203.5,456.0 L205.7,458.2 L208.7,460.2 L212.5,461.8 L216.5,462.7 L223.2,462.3 L226.0,461.5 L231.3,458.7 L235.7,453.8 L237.3,450.3 L237.8,448.0 L238.0,442.8 L237.7,440.5 L235.7,435.5 L233.7,433.0 L230.2,430.0 L226.5,428.2 L222.7,427.0Z M213.7,434.2 L216.7,433.3 L220.7,433.3 L223.2,433.8 L226.3,435.7 L228.7,438.3 L230.2,443.2 L229.8,448.2 L227.8,452.3 L225.2,454.7 L220.8,456.2 L215.7,456.0 L211.7,454.2 L210.0,452.7 L208.3,450.2 L207.3,445.8 L207.8,440.7 L209.3,437.7 L211.8,435.2Z",
  },
  {
    id: "R2",
    side: "left",
    color: BLACK,
    d: "M244.0,427.3 L243.5,428.5 L243.7,461.7 L244.7,462.3 L250.2,462.3 L251.0,461.7 L251.0,449.3 L251.8,448.7 L254.2,448.7 L255.3,449.7 L260.2,458.0 L263.0,462.0 L271.0,462.2 L271.3,461.8 L271.2,461.0 L263.2,448.8 L263.7,447.8 L266.3,446.8 L268.0,445.7 L270.7,442.0 L271.3,439.3 L271.3,436.7 L270.8,434.5 L269.5,432.0 L266.3,429.3 L263.8,428.2 L258.7,427.2Z M251.2,433.8 L251.8,433.3 L259.2,433.3 L261.3,434.0 L262.8,435.5 L263.3,436.7 L263.3,439.8 L262.7,441.3 L261.2,442.7 L259.7,443.2 L251.7,443.2 L251.0,442.5Z",
  },
  {
    id: "T",
    side: "right",
    color: PURPLE,
    d: "M289.3,427.3 L288.8,428.7 L288.8,432.2 L289.5,433.0 L298.3,433.2 L298.8,433.8 L298.8,461.5 L299.7,462.3 L306.0,462.2 L306.7,461.2 L306.7,433.7 L307.7,433.0 L316.2,433.0 L316.7,432.3 L316.5,427.7 L315.5,427.2Z",
  },
  {
    id: "E",
    side: "right",
    color: PURPLE,
    d: "M322.3,427.3 L322.0,427.8 L322.0,461.7 L322.5,462.2 L343.5,462.0 L343.8,461.5 L343.8,457.3 L343.3,456.5 L330.5,456.5 L329.8,455.8 L329.7,448.8 L330.3,447.3 L341.7,447.3 L342.3,446.2 L342.3,442.7 L341.7,441.8 L330.3,441.8 L329.8,441.3 L329.7,434.7 L329.8,433.7 L330.5,433.0 L343.3,433.0 L343.8,432.3 L343.7,427.7 L342.5,427.2Z",
  },
  {
    id: "C2",
    side: "right",
    color: PURPLE,
    d: "M363.3,427.2 L360.2,428.2 L356.5,430.0 L352.5,433.7 L350.0,437.7 L349.0,440.7 L348.8,447.3 L349.2,449.5 L351.3,454.2 L353.7,457.2 L355.8,459.0 L361.5,461.8 L365.8,462.7 L369.8,462.7 L374.3,461.8 L377.2,460.7 L380.7,458.5 L384.7,453.7 L385.3,452.0 L385.2,451.3 L377.3,451.2 L374.0,454.5 L370.3,456.0 L366.2,456.2 L362.5,455.2 L358.8,452.0 L357.2,449.2 L356.5,445.7 L357.0,440.7 L358.0,438.5 L361.3,435.0 L363.7,433.8 L366.2,433.3 L371.8,433.8 L374.0,435.0 L377.3,438.3 L384.7,438.3 L385.3,437.3 L383.7,434.3 L380.8,431.2 L376.0,428.3 L371.7,427.0Z",
  },
  {
    id: "H",
    side: "right",
    color: PURPLE,
    d: "M392.2,427.3 L391.8,428.3 L392.0,461.8 L392.8,462.3 L398.8,462.2 L399.3,461.7 L399.3,448.5 L400.0,447.5 L414.7,447.3 L415.7,448.2 L415.8,461.8 L416.7,462.3 L422.7,462.2 L423.2,461.5 L423.0,427.5 L422.3,427.2 L416.5,427.2 L415.8,427.5 L415.7,441.2 L415.2,441.7 L400.3,441.8 L399.5,441.3 L399.3,427.7 L398.3,427.2Z",
  },
];

// The small ™ mark (a "T" and an "M"), kept as one group so it pops in together
const TM_PATHS = [
  "M427.3,411.2 L427.0,411.5 L427.2,413.8 L431.3,413.8 L432.7,414.5 L432.7,427.5 L435.5,427.8 L436.0,427.3 L436.0,414.3 L437.5,413.8 L441.2,413.8 L441.7,413.0 L441.5,411.7 L440.8,411.2Z",
  "M443.7,411.5 L443.7,427.7 L446.5,427.8 L447.0,427.2 L446.8,417.5 L447.3,416.8 L452.3,422.8 L453.5,422.7 L457.8,417.3 L458.7,417.2 L459.0,417.8 L458.8,427.3 L459.5,427.8 L461.5,427.8 L462.3,427.3 L462.2,411.7 L461.8,411.3 L458.7,411.2 L453.3,417.7 L451.8,417.0 L447.5,411.3 L444.2,411.2Z",
];

export default function CornorTechLogoAnimation() {

  const [run, setRun] = useState(0);

  let leftIndex = 0;
  let rightIndex = 0;

  return (
    <div style={styles.wrapper}>
      <style>{css}</style>

      <svg
        key={run}
        viewBox="0 0 500 500"
        style={styles.svg}
        role="img"
        aria-label="Cornor Tech logo"
      >
        <defs>

          <linearGradient
            id="gradTop"
            gradientUnits="userSpaceOnUse"
            x1="188"
            y1="324"
            x2="188"
            y2="34"
          >
            <stop offset="0" stopColor="#6708e7" />
            <stop offset="1" stopColor="#a257fe" />
          </linearGradient>
          <linearGradient
            id="gradDark"
            gradientUnits="userSpaceOnUse"
            x1="235"
            y1="119"
            x2="235"
            y2="407"
          >
            <stop offset="0" stopColor="#584596" />
            <stop offset="1" stopColor="#773ce4" />
          </linearGradient>
          <linearGradient
            id="gradChevron"
            gradientUnits="userSpaceOnUse"
            x1="410"
            y1="408"
            x2="410"
            y2="124"
          >
            <stop offset="0" stopColor="#8b04ff" />
            <stop offset="1" stopColor="#a254ff" />
          </linearGradient>
        </defs>


        <g className="logo-glow">
          {PIECES.map((p) => (
            <polygon
              key={p.id}
              points={p.points}
              fill={`url(#${p.gradient})`}
              className="piece"
              style={
                {
                  "--fx": `${p.from.x}px`,
                  "--fy": `${p.from.y}px`,
                  "--fr": `${p.from.r}deg`,
                  animationDelay: `${p.delay}s`,
                } as React.CSSProperties
              }
            />
          ))}
        </g>


        {LETTERS.map((l) => {
          const i = l.side === "left" ? leftIndex++ : rightIndex++;
          const delay =
            l.side === "left" ? 1.5 + i * 0.07 : 1.6 + i * 0.07;
          return (
            <path
              key={l.id}
              d={l.d}
              fill={l.color}
              fillRule="evenodd"
              className="letter"
              style={
                {
                  "--lx": l.side === "left" ? "-170px" : "170px",
                  animationDelay: `${delay}s`,
                } as React.CSSProperties
              }
            />
          );
        })}


        <g className="tm" style={{ animationDelay: "2.3s" }}>
          {TM_PATHS.map((d, i) => (
            <path key={i} d={d} fill="#000" />
          ))}
        </g>
      </svg>
      

       
    </div>
  );
}

const css = `
  .piece {
    transform-box: fill-box;
    transform-origin: center;
    opacity: 0;
    animation: assemble 1.1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }

  @keyframes assemble {
    0%   { opacity: 0; transform: translate(var(--fx), var(--fy)) rotate(var(--fr)) scale(0.7); }
    55%  { opacity: 1; }
    100% { opacity: 1; transform: translate(0, 0) rotate(0deg) scale(1); }
  }

  .logo-glow {
    animation: glow 1.6s ease-in-out 1.3s 1 both;
  }
  @keyframes glow {
    0%, 100% { filter: drop-shadow(0 0 0 rgba(140, 60, 255, 0)); }
    50%      { filter: drop-shadow(0 0 16px rgba(140, 60, 255, 0.7)); }
  }

  .letter {
    opacity: 0;
    animation: letterIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }
  @keyframes letterIn {
    from { opacity: 0; transform: translateX(var(--lx)); }
    to   { opacity: 1; transform: translateX(0); }
  }

  .tm {
    transform-box: fill-box;
    transform-origin: center;
    opacity: 0;
    animation: pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }
  @keyframes pop {
    from { opacity: 0; transform: scale(0); }
    to   { opacity: 1; transform: scale(1); }
  }

  @media (prefers-reduced-motion: reduce) {
    .piece, .letter, .tm, .logo-glow {
      animation-duration: 0.01s !important;
      animation-delay: 0s !important;
    }
  }
`;

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#120524",
    gap: 24,
    overflow: "hidden",
  },
  svg: {
    width: "min(80vw, 480px)",
    height: "auto",
    overflow: "visible",
  },
  button: {
    padding: "10px 22px",
    borderRadius: 999,
    border: "none",
    background: "#7a2cff",
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer",
    fontSize: 15,
  },
};
