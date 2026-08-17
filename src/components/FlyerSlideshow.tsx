import { useEffect, useState } from "react";

type Slide = { url: string; alt: string };

export function FlyerSlideshow({ slides, interval = 5000 }: { slides: Slide[]; interval?: number }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, interval);
    return () => window.clearInterval(id);
  }, [paused, interval, slides.length, index]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-background/20 shadow-2xl ring-4 ring-accent/60">
        {slides.map((slide, i) => (
          <img
            key={slide.url}
            src={slide.url}
            alt={slide.alt}
            loading={i === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.url}
            type="button"
            aria-label={`Show flyer ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={`size-2.5 rounded-full transition-all ${
              i === index ? "w-6 bg-accent" : "bg-primary-foreground/40 hover:bg-primary-foreground/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
