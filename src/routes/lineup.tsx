import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Clock, Music2, Users } from "lucide-react";

export const Route = createFileRoute("/lineup")({
  head: () => ({
    meta: [
      { title: "Lineup — VA Rhythm & Roots Festival 2026" },
      { name: "description", content: "Festival schedule: Line Dancing 11a–1p, Live R&B Band & DJs 11a–4p, Live Reggae, Soca & Afrobeat Band & DJs 4p–7p." },
      { property: "og:title", content: "Festival Lineup — VA Rhythm & Roots 2026" },
      { property: "og:description", content: "From line dancing to Reggae, here's the full day of music." },
    ],
  }),
  component: Lineup,
});

const schedule = [
  { time: "11:00 AM – 1:00 PM", title: "Line Dancing", desc: "Warm up the day with classic and current line-dance hits.", icon: Users, accent: "from-accent to-secondary" },
  { time: "11:00 AM – 4:00 PM", title: "Live R&B Band & DJs", desc: "Smooth grooves, throwbacks, and the best of R&B all afternoon.", icon: Music2, accent: "from-primary to-accent" },
  { time: "4:00 PM – 7:00 PM", title: "Live Reggae, Soca & Afrobeat Band & DJs", desc: "Island vibes take over — Reggae, Soca, and Afrobeat to close it out.", icon: Music2, accent: "from-secondary to-primary" },
];

function Lineup() {
  return (
    <PageShell>
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center">
          <h1 className="font-display text-5xl md:text-6xl">The Lineup</h1>
          <p className="mt-3 text-lg opacity-90">Saturday, August 22, 2026 · 11 AM – 7 PM</p>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4 py-14 space-y-6">
        {schedule.map(({ time, title, desc, icon: Icon, accent }) => (
          <div key={title} className="relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm">
            <div className={`absolute inset-y-0 left-0 w-2 bg-gradient-to-b ${accent}`} />
            <div className="pl-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary"><Icon /></div>
                <div>
                  <h2 className="font-display text-2xl">{title}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 font-semibold text-secondary whitespace-nowrap">
                <Clock className="size-4" />
                {time}
              </div>
            </div>
          </div>
        ))}
        <p className="text-center text-sm text-muted-foreground pt-4">
          Performer names announced soon — follow us for updates.
        </p>
      </section>
    </PageShell>
  );
}
