import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Music, Users, Utensils, PartyPopper, Mic, Tent, Ban, Clock } from "lucide-react";
import { FlyerSlideshow } from "@/components/FlyerSlideshow";
import flyerMusic from "@/assets/flyer-music-lineup.jpg.asset.json";
import flyerFood from "@/assets/flyer-food-festival.jpg.asset.json";
import flyerVendors from "@/assets/flyer-vendors.jpg.asset.json";

const EVENTBRITE = "https://varhythmandrootsfestival.eventbrite.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VA Rhythm & Roots Festival 2026 — Aug 22, Virginia Beach" },
      { name: "description", content: "Free, all-ages festival at Mount Trashmore Park: R&B and Reggae bands, DJs, line dancing, food trucks, craft vendors, and family fun." },
      { property: "og:title", content: "VA Rhythm & Roots Festival 2026 — Aug 22, Virginia Beach" },
      { property: "og:description", content: "Free, all-ages festival at Mount Trashmore Park: R&B and Reggae bands, DJs, line dancing, food trucks, craft vendors, and family fun." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: flyerMusic.url },
      { name: "twitter:image", content: flyerMusic.url },
    ],
  }),
  component: Home,
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

function Home() {
  const scrollToLineup = () => {
    document.getElementById("lineup")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_60%,white,transparent_40%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center text-primary-foreground">
          <div>
            <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
              Saturday · August 22, 2026
            </span>
            <h1 className="mt-4 font-display text-5xl md:text-7xl leading-none">
              VA Rhythm &amp; Roots Festival 2026
            </h1>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/90 max-w-xl">
              Come for <span className="text-accent font-semibold">R&amp;B</span>, stay for{" "}
              <span className="text-accent font-semibold">Reggae</span>. Live bands, DJs, food
              trucks, craft vendors, and family fun at Mount Trashmore Park, Virginia Beach.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm font-semibold">
              <Mic className="size-4 text-accent" /> Hosted by Ray Leezy of 87.7 &amp; 102.1
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <a href={EVENTBRITE} target="_blank" rel="noopener noreferrer">Rent a Shelter</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToLineup}
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                View Lineup
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-2"><Calendar className="mt-0.5 text-accent" /><div><div className="font-semibold">11:00 AM – 6:30 PM</div><div className="opacity-80">Saturday, August 22, 2026</div></div></div>
              <div className="flex items-start gap-2"><MapPin className="mt-0.5 text-accent" /><div><div className="font-semibold">Mount Trashmore Park</div><div className="opacity-80">310 Edwin Drive, Virginia Beach, VA</div></div></div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-accent/40 blur-2xl" />
            <div className="relative">
              <FlyerSlideshow
                slides={[
                  { url: flyerMusic.url, alt: "VA Rhythm & Roots Festival 2026 music lineup flyer" },
                  { url: flyerFood.url, alt: "VA Rhythm & Roots Festival 2026 food festival flyer" },
                  { url: flyerVendors.url, alt: "VA Rhythm & Roots Festival 2026 vendors flyer" },
                ]}
              />
            </div>
          </div>

        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-display text-4xl text-center">What to expect</h2>
        <p className="mt-2 text-center text-muted-foreground">Free · All ages · One unforgettable day</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Music, title: "Live Music & DJs", body: "Live R&B bands & DJs from 11:00 AM – 4:00 PM, followed by Reggae bands & DJs from 4:00 PM – 6:30 PM." },
            { icon: Users, title: "Line Dancing", body: "Kick off the festival with high-energy line dancing from 11:00 AM – 12:30 PM." },
            { icon: Utensils, title: "Food Trucks", body: "Delicious Soul Food and authentic Caribbean cuisine." },
            { icon: PartyPopper, title: "Family Fun", body: "Face painting, bounce house, art & craft vendors, free admission, and fun for all ages." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
              <Icon className="text-primary" />
              <h3 className="mt-3 font-display text-xl">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lineup */}
      <section id="lineup" className="scroll-mt-20 bg-accent/10 border-y">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="font-display text-4xl text-center">Entertainment &amp; Music Lineup</h2>
          <p className="mt-2 text-center text-muted-foreground">
            Hosted by <strong className="text-foreground">Ray Leezy</strong> (87.7 &amp; 102.1)
          </p>

          <div className="mt-10 space-y-6">
            {lineup.map((block) => (
              <div key={block.label} className="relative overflow-hidden rounded-2xl border bg-card shadow-sm">
                <div className={`absolute inset-y-0 left-0 w-2 bg-gradient-to-b ${block.accent}`} />
                <div className="pl-6 pr-6 py-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-2xl">
                      <span className="mr-2" aria-hidden="true">{block.emoji}</span>
                      {block.label}
                    </h3>
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
          </div>

          <p className="mt-8 text-center">
            <Link to="/lineup" className="text-primary font-semibold hover:underline">
              See the full lineup page →
            </Link>
          </p>
        </div>
      </section>

      {/* Shelter rental */}
      <section className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="font-display text-4xl">Reserve a Park Shelter</h2>
          <p className="mt-4 text-foreground/90 leading-relaxed">
            Planning to attend with a large group or family? Reserve one of the park shelters at
            Mount Trashmore for your crew. Reservations are managed directly through Eventbrite.
          </p>
          <div className="mt-6">
            <Button asChild size="lg">
              <a href={EVENTBRITE} target="_blank" rel="noopener noreferrer">
                <Tent className="size-4" />Book Your Shelter on Eventbrite
              </a>
            </Button>
          </div>
        </div>
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <Ban className="text-primary" />
            <h3 className="font-display text-2xl">Good to know</h3>
          </div>
          <p className="mt-2 text-foreground/90">
            Only lawn chairs are allowed in general areas — please leave private canopies and tents
            at home.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
