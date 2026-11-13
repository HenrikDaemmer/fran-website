import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { ImageItem } from "@/data/content";

const AUTOPLAY_MS = 5500;
const EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]";

/**
 * Karussell „Meine Küche“.
 * Alle Bilder liegen übereinander und werden per Überblendung + leichtem Zoom gewechselt –
 * dadurch gibt es kein Ruckeln, kein Nachladen und keinen Sprung beim Wechsel vom letzten zum ersten Bild.
 */
export function KitchenCarousel({ items }: { items: ImageItem[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const pointerStart = useRef<number | null>(null);

  const count = items.length;
  const next = (active + 1) % count;

  const go = useCallback(
    (step: number) => setActive((current) => (current + step + count) % count),
    [count],
  );

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const node = rootRef.current;
    if (!node || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.35,
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const autoplay = inView && !paused && !reduceMotion;

  useEffect(() => {
    if (!autoplay) return;
    const timer = window.setTimeout(() => go(1), AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [autoplay, active, go]);

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(-1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(1);
    }
  };

  const onPointerDown = (event: PointerEvent) => {
    pointerStart.current = event.clientX;
  };
  const onPointerUp = (event: PointerEvent) => {
    if (pointerStart.current === null) return;
    const delta = event.clientX - pointerStart.current;
    pointerStart.current = null;
    if (Math.abs(delta) > 40) go(delta < 0 ? 1 : -1);
  };

  return (
    <div
      ref={rootRef}
      role="region"
      aria-roledescription="Karussell"
      aria-label="Beispielgerichte"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="outline-none"
    >
      <div className="grid grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-center gap-3 md:gap-5">
        {/* Hauptbild */}
        <div
          className="relative aspect-[4/5] touch-pan-y select-none overflow-hidden rounded-2xl bg-white/5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={() => (pointerStart.current = null)}
        >
          {items.map((item, index) => (
            <img
              key={item.src}
              src={item.src}
              alt={index === active ? item.alt : ""}
              aria-hidden={index !== active}
              draggable={false}
              className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[1100ms] ${EASE} ${
                index === active ? "z-10 scale-100 opacity-100" : "z-0 scale-[1.08] opacity-0"
              }`}
            />
          ))}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Vorschau aufs nächste Gericht */}
        <button
          type="button"
          onClick={() => go(1)}
          aria-label={`Nächstes Gericht: ${items[next].label}`}
          className="group relative block aspect-[3/4] w-full translate-y-6 overflow-hidden rounded-2xl text-left opacity-80 outline-none transition duration-500 hover:translate-y-4 hover:opacity-100 focus-visible:ring-2 focus-visible:ring-primary"
        >
          {items.map((item, index) => (
            <img
              key={item.src}
              src={item.src}
              alt=""
              draggable={false}
              className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[1100ms] ${EASE} ${
                index === next ? "scale-100 opacity-100" : "scale-[1.08] opacity-0"
              }`}
            />
          ))}
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-3 pt-10 text-xs uppercase tracking-[0.2em] text-white/80">
            Als Nächstes
          </span>
        </button>
      </div>

      {/* Steuerung */}
      <div className="mt-10 flex items-center gap-5">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Vorheriges Gericht"
          className="rounded-full border border-white/25 p-3 text-white transition hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Nächstes Gericht"
          className="rounded-full bg-primary p-3 text-primary-foreground shadow-warm transition hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-espresso"
        >
          <ArrowRight className="h-5 w-5" />
        </button>

        <div className="min-w-0 flex-1" aria-live="polite">
          <p className="text-sm tabular-nums text-white/55">
            {String(active + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </p>
          <p key={active} className="reveal is-visible truncate font-display text-lg text-white">
            {items[active].label}
          </p>
        </div>
      </div>

      {/* Fortschritt */}
      <div className="mt-5 flex gap-1.5" aria-hidden="true">
        {items.map((item, index) => (
          <button
            key={item.src}
            type="button"
            tabIndex={-1}
            onClick={() => setActive(index)}
            className="relative h-1 flex-1 overflow-hidden rounded-full bg-white/15"
          >
            {index < active && <span className="absolute inset-0 bg-white/50" />}
            {index === active && (
              <span
                key={`${active}-${autoplay}`}
                className={`absolute inset-0 bg-primary ${autoplay ? "animate-progress" : ""}`}
                style={{ ["--progress-duration" as string]: `${AUTOPLAY_MS}ms` }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
