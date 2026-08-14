import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Clock, Mic } from "lucide-react";

export const Route = createFileRoute("/lineup")({
  head: () => ({
    meta: [
      { title: "Lineup — VA Rhythm & Roots Festival 2026" },
      { name: "description", content: "Full schedule: line dancing 11:00 AM, R&B bands & DJs 12:30–4:00 PM, and Reggae bands & DJs 4:00–6:30 PM. Hosted by Ray Leezy of 87.7 & 102.1." },
      { property: "og:title", content: "Festival Lineup — VA Rhythm & Roots 2026" },
      { property: "og:description", content: "Line dancing, R&B, and Reggae — the full day of music, hosted by Ray Leezy." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Lineup,
});

const lineup = [
  {
    label: "Line Dancing",
    emoji: "💃",
    window: "11:00 AM – 12:30 PM",
    accent: "from-accent to-secondary",
    slots: [
      { time: "11:00 AM – 12:30 PM", act: "DJ Red Carpet Capo w/ The 757 No Limit Steppaz and Dancing w/ Delo" },
    ],
  },
  {
    label: "R&B Lineup",
    emoji: "🎷",
    window: "12:30 PM – 4:00 PM",
    accent: "from-primary to-accent",
    slots: [
      { time: "12:30 PM – 1:30 PM", act: "Raspy & The Unknown R&B Band" },
      { time: "1:30 PM – 2:15 PM", act: "DJ Chris G" },
      { time: "2:15 PM – 3:15 PM", act: "Phenomenal Sound R&B Band" },
      { time: "3:15 PM – 4:00 PM", act: "DJ Jack of Spade" },
    ],
  },
  {
    label: "Reggae Lineup",
    emoji: "🌴",
    window: "4:00 PM – 6:30 PM",
    accent: "from-secondary to-primary",
    slots: [
      { time: "4:00 PM – 5:00 PM", act: "Greg Gutty Reggae Band" },
      { time: "5:00 PM – 6:30 PM", act: "DJ Higher Level, DJ Sniper, & DJ Geso" },
    ],
  },
];

function Lineup() {
  return (
    <PageShell>
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center">
          <h1 className="font-display text-5xl md:text-6xl">Entertainment &amp; Music Lineup</h1>
          <p className="mt-3 text-lg opacity-90">Saturday, August 22, 2026 · 11:00 AM – 7:00 PM</p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm font-semibold">
            <Mic className="size-4 text-accent" /> Host: Ray Leezy (87.7 &amp; 102.1)
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 space-y-6">
        {lineup.map((block) => (
          <div key={block.label} className="relative overflow-hidden rounded-2xl border bg-card shadow-sm">
            <div className={`absolute inset-y-0 left-0 w-2 bg-gradient-to-b ${block.accent}`} />
            <div className="pl-6 pr-6 py-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="font-display text-2xl">
                  <span className="mr-2" aria-hidden="true">{block.emoji}</span>
                  {block.label}
                </h2>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary">
                  <Clock className="size-4" />{block.window}
                </span>
              </div>
              <ul className="mt-4 divide-y divide-border/70">
                {block.slots.map((slot) => (
                  <li key={slot.time} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-3">
                    <span className="w-full sm:w-48 shrink-0 font-mono text-sm font-semibold text-primary">
                      {slot.time}
                    </span>
                    <span className="text-foreground/90">{slot.act}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </PageShell>
  );
}
