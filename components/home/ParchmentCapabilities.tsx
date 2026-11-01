import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CAPABILITIES = [
  "Web Development",
  "Digital Marketing",
  "Graphic Design",
  "Mobile App Dev",
  "Content Creation",
  "Cloud Solution",
  "E-commerce Solutions",
  "UI/UX Design",
  "Social Media Management",
];

const MAX_VISIBLE = 5;     
const TYPE_SPEED = 70;     
const HOLD_TIME = 1100;    
const SHIFT_TIME = 450;   

interface LineItem {
  id: number;
  text: string;
}

export default function InfiniteParchmentCapabilities() {
  const [lines, setLines] = useState<LineItem[]>([]);
  const stepRef = useRef<number>(0);

  useEffect(() => {
    let cancelled = false;
    const timers: NodeJS.Timeout[] = [];
    const wait = (ms: number): Promise<void> =>
      new Promise((resolve) => {
        timers.push(setTimeout(resolve, ms));
      });

    stepRef.current = 0;
    setLines([]);

    (async () => {
      while (!cancelled) {
        const step = stepRef.current++;
        const text = CAPABILITIES[step % CAPABILITIES.length];

        setLines((prev) => {
          const base = prev.length >= MAX_VISIBLE ? prev.slice(1) : prev;
          return [...base, { id: step, text: '' }];
        });

        await wait(SHIFT_TIME);

        for (let i = 1; i <= text.length; i++) {
          if (cancelled) return;
          setLines((prev) =>
            prev.map((l) => (l.id === step ? { ...l, text: text.slice(0, i) } : l))
          );
          await wait(TYPE_SPEED);
        }

        await wait(HOLD_TIME);
      }
    })();

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="lg:col-span-3 flex flex-col justify-end items-start lg:items-end space-y-2 pb-2 pl-4 lg:pl-0 lg:pr-4"
    >
      <span className="text-[11px] font-mono tracking-widest text-[#eeab78] uppercase font-bold z-10 ">
        OUR CAPABILITIES
      </span>

      <div
        className="h-36 w-full max-w-xs overflow-hidden relative p-4 rounded-xl shadow-2xl border border-[#8c6d53]/60"
        style={{
          backgroundImage: `url('/mapp.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow:'inset 0 0 25px rgba(80, 50, 20, 0.4), 0 10px 20px rgba(0,0,0,0.3)',
        }}
      >
        <div
          className="relative z-0 h-full w-full flex flex-col justify-end items-start lg:items-end gap-2 font-serif"
          style={{
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent 0%, black 25%)',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 25%)',
          }}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {lines.map((line) => {
              return (
                <motion.div
                  key={line.id}
                  layout
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{
                    layout: { type: 'spring', stiffness: 120, damping: 20 },
                    duration: 0.45,
                    ease: 'easeOut',
                  }}
                  className="h-5 shrink-0 text-[10px] md:text-[11px] font-bold tracking-wider text-[#2c1810] uppercase drop-shadow-[0_0.5px_0.5px_rgba(255,255,255,0.6)] flex items-center gap-1 whitespace-nowrap"
                >
                  <span>{line.text}</span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}